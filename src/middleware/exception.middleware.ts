import express from "express";
import * as exception from "../utils/exceptions";

export default (
    err: Error,
    req: express.Request,
    res: express.Response,
) => {

    if (
        err instanceof exception.BadRequestException ||
    err instanceof exception.UnauthorizedException ||
    err instanceof exception.ServerErrorException ||
    err instanceof exception.NotFoundException ||
    err instanceof exception.ForbiddenException ||
    err instanceof exception.CredentialException
    ) {
    
        res.status(err.statusCode).json({
            status: false,
            message: err.message,
            data: err.data,
        });
    } else {
    // Handling other types of errors
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: null,
        });
    }
};
