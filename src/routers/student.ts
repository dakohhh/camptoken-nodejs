import express from 'express';
import StudentController from '@/controller/student.controller';
import auth from '@/middleware/auth.middleware';
import { UserRoles } from '@/enums/user-roles';
// import validateRequestBody from "../middleware/validation";
// import signupSchema from "../validation/student.validation";
// import loginValidation from "validation/login.validation";

export default (router: express.Router) => {
    router.get('/student/', auth(UserRoles.STUDENT), StudentController.getUserSession);
    // router.post('/auth/student/signup', StudentController.getUserSession);
    // router.post('/auth/vendor/signup', AuthController.signupStudent, signup);
};
