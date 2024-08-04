import { BaseUser, Student, Vendor } from '@/models';
import { Request } from 'express';
import { BadRequestException } from '@/utils/exceptions';
import { hashPassword, comparePassword } from '@/authentication/hash';
import { UserRoles } from '@/enums/user-roles';
import { TokenService } from './token.service';
import WalletService from './wallet.service';
import Wallet from '@/models/wallet.model';
import Joi from 'joi';

class AuthService {
    static async registerStudent({ body }: Partial<Request>) {
        const { error, value } = Joi.object({
            firstname: Joi.string().min(3).max(30).required(),
            lastname: Joi.string().min(3).max(30).required(),
            phoneNumber: Joi.string().min(10).max(10).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
        })
            .options({ stripUnknown: true })
            .validate(body);

        if (error) throw new BadRequestException(error.message);

        const hashedPassword = await hashPassword(value.password);

        const context = {
            firstname: value.firstname,
            lastname: value.lastname,
            phoneNumber: value.phoneNumber,
            email: value.email,
            password: hashedPassword,
            role: UserRoles.STUDENT,
        };

        const new_student = await new Student(context).save();

        const wallet = await Wallet.create({ user: new_student });

        new_student.walletId = wallet._id;

        await new_student.save();

        const { password, ...student } = new_student.toObject();

        // Send Verification Email

        return student;
    }

    static async registerVendor({ body }: Partial<Request>) {
        const { error, value } = Joi.object({
            firstname: Joi.string().min(3).max(30).required(),
            lastname: Joi.string().min(3).max(30).required(),
            phoneNuber: Joi.string().min(10).max(10).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            businessName: Joi.string().min(5).max(50).required(),
        })
            .options({ stripUnknown: true })
            .validate(body);

        if (error) throw new BadRequestException(error.message);

        const hashedPassword = await hashPassword(value.password);

        const context = {
            firstname: value.firstname,
            lastname: value.lastname,
            phoneNumber: value.phoneNumber,
            email: value.email,
            password: hashedPassword,
            role: UserRoles.VENDOR,
            businessName: value.businessName,
        };

        const new_vendor = await new Vendor(context).save();

        const { password, ...vendor } = new_vendor.toObject();

        // Send Verification Email

        return vendor;
    }

    static async login({ body }: Partial<Request>) {
        const { error, value } = Joi.object({
            email: Joi.string().email().min(3).max(30).required(),
            password: Joi.string().min(3).max(30).required(),
        })
            .options({ stripUnknown: true })
            .validate(body);

        if (error) throw new BadRequestException(error.message);

        // Check if user exists
        const user = await BaseUser.findOne({ email: value.email });

        if (!user) throw new BadRequestException('Invalid email or password');

        // Check if password is correct
        const validPassword = await comparePassword(value.password, user.password);

        if (!validPassword) throw new BadRequestException('Invalid email or password');

        // Check if the user's account is disabled
        if (user.accountDisabled) throw new BadRequestException('Your account is disabled, please contact support');

        // Generate JWT Token
        const token = await TokenService.generateToken(user);

        return { role: user.role, token: token };
    }
}

export default AuthService;
