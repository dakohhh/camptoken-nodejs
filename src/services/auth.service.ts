import { IUser } from "types";

export default class AuthService{

    static async register(userInput:IUser){

        console.log(userInput);


    }

    static async login(userInput:IUser){

        console.log(userInput);

    }
   
}

