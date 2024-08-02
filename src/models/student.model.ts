import BaseUser from "./user.model";
import mongoose from "mongoose";
import { IStudent } from "@/types";


const studentSchema = new mongoose.Schema<IStudent>({});

const Student = BaseUser.discriminator<IStudent>('Student', studentSchema);

export default Student;