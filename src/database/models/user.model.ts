import mongoose from "mongoose";
import { IUser } from "types";
import { UserRoles } from "../../enums/userRoles";

const baseOptions = {
    discriminatorKey: 'userType', 
    collection: 'users', 
    timestamps: true,
};

const BaseUserSchema = new mongoose.Schema<IUser>({
    firstname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    email: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    role: {
        type: String,
        enum: Object.values(UserRoles),
    },
}, baseOptions);


const BaseUser = mongoose.model<IUser>('User', BaseUserSchema);

export default BaseUser;