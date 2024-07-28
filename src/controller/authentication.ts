import { Request, Response, NextFunction } from "express";
import signupSchema from "../validation/student.validation"
import { BadRequestException } from "../utils/exceptions";
import AuthService from "../services/auth.service";
import { IStudent } from "../types";
import response from "../utils/response";


export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        // const token = await authenticateUser(email, password)

        // const context = { token: token }

        // return response.status(200).json({
        //     status: true, 
        //     message: "login successfull", 
        //     data: context 
        // }).end()

    }
    catch (error) {
        console.log(error)
        next(error)
    }
}


export const signupStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const {error, value} = signupSchema.validate(req.body);

        if (error) throw new BadRequestException(error.details[0].message);
    
        const userInput = value as IStudent

        await AuthService.register(userInput);

        res.status(201).json({"message": "user registred successfull"})

    }
    catch (error) {
        console.log(error)
        next(error)
    }
}

// export const signupVendor = async (req: Request, res: Response, next: NextFunction) => {
//     try {

//         const {error, value} = signupSchema.validate(req.body);

//         if (error) throw new BadRequestException(error.details[0].message);
    
//         const userInput = value as IUser

//         await AuthService.register(userInput);

//         res.status(201).json({"message": "user registred successfull"})

//     }
//     catch (error) {
//         console.log(error)
//         next(error)
//     }
// }