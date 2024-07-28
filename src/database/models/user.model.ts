import mongoose from "mongoose";
import { IUser } from "types";
import { UserRoles } from "enums";

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
        maxlength: 50
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

    role: {
        type: String,
        enum: Object.values(UserRoles),
        default: UserRoles.STUDENT
    },
}, baseOptions);


const BaseUser = mongoose.model<IUser>('User', BaseUserSchema);

export default BaseUser;