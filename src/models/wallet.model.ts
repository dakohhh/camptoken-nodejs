import mongoose, { Schema } from 'mongoose';
import BaseUser from './user.model';
import { generateWalletId } from '@/utils/generate';
import { IWallet } from '@/types';

const baseOptions = {
    timestamps: true,
};

const WalletSchema: Schema<IWallet> = new Schema<IWallet>(
    {
        walletId: {
            type: String,
            required: true,
            unique: true,
            maxlength: 10,
            default: () => generateWalletId(),
        },
        balance: {
            type: Number,
            required: true,
            default: 0,
        },
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
            unique: true,
            ref: 'User',
        },

        walletDisabled: {
            type: Boolean,
            default: false,
        },
    },
    baseOptions
);

const Wallet = mongoose.model<IWallet>('Wallet', WalletSchema);

export default Wallet;
