import mongoose, { Schema } from 'mongoose';
import { IUser } from '@/types';
import { UserRoles } from '@/enums/user-roles';

const baseOptions = {
    discriminatorKey: 'userType',
    collection: 'users',
    timestamps: true,
};

const BaseUserSchema: Schema<IUser> = new mongoose.Schema<IUser>(
    {
        firstname: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        lastname: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },

        phoneNumber: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 10,
        },

        email: {
            type: String,
            required: true,
            maxlength: 255,
            unique: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 8,
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        accountDisabled: {
            type: Boolean,
            default: false,
        },

        lastActive: {
            type: Date,
            default: () => Date.now(),
        },

        role: {
            type: String,
            enum: Object.values(UserRoles),
        },
    },
    baseOptions
);

const BaseUser = mongoose.model<IUser>('User', BaseUserSchema);

export default BaseUser;
