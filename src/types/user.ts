import mongoose, { Document } from 'mongoose';
import { IWallet } from './wallet';

export interface IUser extends Document {
    _id: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: 'student' | 'vendor' | 'admin';
    isVerified: boolean;
    accountDisabled: boolean;
    lastActive: Date;
    createdAt?: Date;
    updatedAt?: Date;
    walletId?: mongoose.Types.ObjectId;
}

export interface IStudent extends IUser {}

export interface IVendor extends IUser {
    businessName: string;
}
