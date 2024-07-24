import express from "express";
import validateRequestBody from "../middleware/validation";
import loginValidation from "validation/login.validation";




export default (router:express.Router) => {
    // router.post("/auth/student/signup", validateRequestBody(signupSchema), signup);
    // router.post("/auth/vendor/signup", validateRequestBody(signupSchema), signup);
    // router.post("/auth/login", validateRequestBody(loginValidation), login)

}