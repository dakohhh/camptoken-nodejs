import mongoose, { Schema } from 'mongoose';
import { generateWalletId } from '@/utils/generate';
import { IWallet } from '@/types';

const baseOptions = {
    timestamps: true,
};

const WalletSchema: Schema<IWallet> = new mongoose.Schema<IWallet>(
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
            default: 0.23

        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
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
