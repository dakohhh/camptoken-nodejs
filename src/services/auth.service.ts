import { IUser, IStudent } from "@/types";
import Student from "../models/student.model";

export default class AuthService{

    static async register(signupStudentInput:IStudent){

        const new_student = await new Student(signupStudentInput).save();

        return new_student;

    }

    static async login(userInput:IUser){

        console.log(userInput);

    }
   
}

