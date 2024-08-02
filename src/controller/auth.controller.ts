import { Request, Response, NextFunction } from 'express';
import { BadRequestException } from '../utils/exceptions';
import AuthService from '../services/auth.service';
import response from '../utils/response';
import { StatusCodes } from 'http-status-codes';

class AuthController {
    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const results = await AuthService.login(req);
            res.status(StatusCodes.OK).json(response('login successfull', results));
        } catch (error) {
            next(error);
        }
    }

    static async signupStudent(req: Request, res: Response, next: NextFunction) {
        try {
            const new_student = await AuthService.registerStudent(req);

            const results = { student: new_student };

            res.status(StatusCodes.CREATED).json(response('user registered successfull', results));
        } catch (error) {
            next(error);
        }
    }

    static async signupVendor(req: Request, res: Response, next: NextFunction) {
        try {
            const new_student = await AuthService.registerVendor(req);

            const results = { student: new_student };

            res.status(StatusCodes.CREATED).json(response('user registered successfull', results));
        } catch (error) {
            next(error);
        }
    }
}

export default AuthController;
