import { Document } from 'mongoose';

export interface IUser extends Document {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: 'student' | 'vendor' | 'admin';
    isVerified: boolean;
    accountDisabled: boolean;
    lastActive: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IStudent extends IUser {}

export interface IVendor extends IUser {
    businessName: string;
}
