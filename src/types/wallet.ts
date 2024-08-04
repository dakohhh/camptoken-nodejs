import { IUser } from './user';
export interface IWallet {
    walletId: string;
    user: IUser;
    balance: number;
    walletDisabled: boolean;
}
