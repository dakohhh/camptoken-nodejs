import express from "express";
import Joi from "joi";
import { BadRequestException } from "../utils/exceptions";

// export default (schema: Joi.Schema) => {
//   return async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     try {
//       schema.validate
//       await schema.validateAsync(req.body, { abortEarly: false });
//       next();
//     } catch (error: any) {
//       const validationError = new BadRequestException(error.details[0].message);
//       next(validationError);
//     }
//   };
// };