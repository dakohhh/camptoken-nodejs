import moment from 'moment';
import { AuthRequest } from '@/types/auth';
import { IUser } from '@/types';
import mongoose from 'mongoose';
import Wallet from '@/models/wallet.model';

class WalletService {
    static async createUserWallet({ _id }: Pick<IUser, '_id'>) {
        await Wallet.create({ user: _id });
    }

    static async getUserWallet({ _id }: Pick<IUser, '_id'>){

        const wallet = await Wallet.findOne({user: _id});

        return wallet;

    }
}

export default WalletService;
