import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '@/services/users.service';
import response from '@/utils/response';
import { AuthRequest } from '@/types/auth';
import WalletService from '@/services/wallet.service';
import { IUser } from '@/types';
import { BaseUser } from '@/models';

class UserController {
    static async getUserSession(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            // const result = UserService.getUserSession(req);

            // const $currentUser = req.user as IUser;

            // req.user?.save()

            // const user_wallet =  await WalletService.getUserWallet($currentUser);

            // user_wallet

            // user_wallet?.deleteOne()

            console.log(req.user)

            res.status(StatusCodes.OK).json(response('user session info'));
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
