import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '@/services/users.service';
import response from '@/utils/response';
import { AuthRequest } from '@/types/auth';
import WalletService from '@/services/wallet.service';
import { IUser } from '@/types';

class UserController {
    static async getUserSession(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            // const result = UserService.getUserSession(req);

            const $currentUser = req.user as IUser


            const user_wallet =  await WalletService.getUserWallet($currentUser);

            console.log(user_wallet);


            res.status(StatusCodes.OK).json(response('user session info'));
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
