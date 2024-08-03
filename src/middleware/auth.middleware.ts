import { UserRoles } from '@/enums/user-roles';
import { AuthRequest } from '@/types/auth';
import { Response, NextFunction } from 'express';
import { UnauthorizedException, ForbiddenException } from '@/utils/exceptions';
import JWT from 'jsonwebtoken';
import settings from '@/settings';
import { Payload } from '@/types';
import { BaseUser } from '@/models';
import { IUser } from '@/types';

function auth(role: UserRoles) {
    return async (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers['authorization'];

            const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the Authorization header

            if (!token) throw new UnauthorizedException('-middleware/missing-token');

            const payload = JWT.verify(token, settings.JWT_SECRET) as Payload;

            let user = await BaseUser.findOne({ _id: payload.userId });

            // If the user is not found
            if (!user) throw new UnauthorizedException('-middleware/user-not-found');

            // If the user is not verified
            if (!user.isVerified) throw new UnauthorizedException('-middleware/user-not-verified');

            // If role is not authorized to access route
            if (user.role !== role) throw new ForbiddenException('-middleware/user-not-authorized');

            // Update the last active date for user
            user = (await BaseUser.findByIdAndUpdate(user.id, { lastActive: Date.now() }, { new: true })) as IUser;

            req.user = user;

            next();
        } catch (error) {
            next(error);
        }
    };
}

export default auth;
