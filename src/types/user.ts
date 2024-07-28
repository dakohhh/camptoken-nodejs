import { Document } from "mongoose";

export interface IUser{
    _id: string;
    firstname: string
    lastname: string
    email: string
    password: string;
    role: "student" | "vendor" | "admin";
    isVerified: boolean;
    createdAt?:Date;
    updatedAt?:Date;
}


export interface IStudent extends IUser{};

export interface IVendor extends IUser{
    businessName:string;
};