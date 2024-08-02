import { Request, Response, NextFunction } from "express";
import signupSchema from "../validation/student.validation";
import { BadRequestException } from "../utils/exceptions";
import AuthService from "../services/auth.service";
import response from "../utils/response";
import { StatusCodes } from "http-status-codes";


export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const { email, password } = req.body;

        // const token = await authenticateUser(email, password)

        // const context = { token: token }

        // return response.status(200).json({
        //     status: true, 
        //     message: "login successfull", 
        //     data: context 
        // }).end()

        next();

    }
    catch (error) {
        console.log(error);
        next(error);
    }
};


export const signupStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const {error, value} = signupSchema.options({ stripUnknown: true }).validate(req.body);

        console.log(error?.message);

        if (error) throw new BadRequestException(error.message);

        const new_student = await AuthService.register(value);

        const context = { student: new_student };

        res.status(StatusCodes.CREATED).json(response("user registred successfull", context));

    }
    catch (error) {
        console.log(error);
        next(error);
    }
};

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