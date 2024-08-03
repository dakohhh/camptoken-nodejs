import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '@/services/users.service';
import response from '@/utils/response';
import { AuthRequest } from '@/types/auth';
class UserController {
    static async getUserSession(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            const result = UserService.getUserSession(req);

            res.status(StatusCodes.OK).json(response('user session info', result));
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
