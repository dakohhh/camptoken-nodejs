import express from 'express';
import AuthController from '@/controller/auth.controller';
// import validateRequestBody from "../middleware/validation";
// import signupSchema from "../validation/student.validation";
// import loginValidation from "validation/login.validation";

export default (router: express.Router) => {
    router.post('/auth/login', AuthController.login);
    router.post('/auth/student/signup', AuthController.signupStudent);
    router.post('/auth/vendor/signup', AuthController.signupVendor);
};
