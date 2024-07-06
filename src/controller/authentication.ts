import { Request, Response, NextFunction } from "express";



export const login = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { email, password } = request.body;

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