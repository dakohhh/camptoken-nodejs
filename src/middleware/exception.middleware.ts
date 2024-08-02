import express, { Express } from 'express';
import response from '@/utils/response';
import * as exception from '@/utils/exceptions';

const configureErrorMiddleware = (app: Express) => {
    app.use((error: Error, req: express.Request, res: express.Response) => {
        if (
            error instanceof exception.BadRequestException ||
            error instanceof exception.UnauthorizedException ||
            error instanceof exception.ServerErrorException ||
            error instanceof exception.NotFoundException ||
            error instanceof exception.ForbiddenException ||
            error instanceof exception.CredentialException
        ) {
            res.status(error.statusCode).json(response(error.message, error.data, false));
        } else {
            // Handling other types of errors
            res.status(500).json(response('Internal Server Error', null, false));
        }
    });
};

export default configureErrorMiddleware;
