import moment from 'moment';
import { AuthRequest } from '@/types/auth';
import { IUser } from '@/types';
import mongoose from 'mongoose';
import baseuserSchema from '@/models/user.model';
import Wallet from '@/models/wallet.model';

class WalletService {
    static async createUserWallet({ _id }: Pick<IUser, '_id'>) {
        const wallet = await Wallet.create({ user: _id });

        const user = await baseuserSchema.findOne({ _id });

        if (!user) throw new Error('User not found');

        user.walletId = wallet._id;
        await user.save();
    }

    static async getUserWallet({ _id }: Pick<IUser, '_id'>) {
        const wallet = await Wallet.findOne({ user: _id });

        return wallet;
    }
}

export default WalletService;
