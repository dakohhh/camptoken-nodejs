import { IUser } from './user';

export interface IWallet extends Document {
    walletId: string;
    user: IUser;
    balance: number;
    walletDisabled: boolean;
}
