import { UserRoles } from '@/enums/user-roles';
import { AuthRequest } from '@/types/auth';
import { Request, Response, NextFunction } from 'express';
import { CredentialException, UnauthorizedException, ForbiddenException } from '@/utils/exceptions';
import JWT from 'jsonwebtoken';
import settings from '@/settings';
import { Payload } from '@/types';
import { BaseUser } from '@/models';

function auth(role: UserRoles) {
    // This function is empty because it is a placeholder for the actual implementation.
    // The actual implementation will be provided in the next step.

    return async (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers['authorization'];

            const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the Authorization header

            if (!token) throw new CredentialException('-middleware/missing-token');

            const payload = JWT.verify(token, settings.JWT_SECRET) as Payload;

            const user = await BaseUser.findById(payload.userId);

            // If the user is not found
            if (!user) throw new UnauthorizedException('-middleware/user-not-found');

            // If the user is not verified
            if (!user.isVerified) throw new UnauthorizedException('-middleware/user-not-verified');

            // If role is not authorized to access route
            if (user.role !== role) throw new ForbiddenException('-middleware/user-not-authorized');

            req.user = user;

            next();
        } catch (error) {
            next(error);
        }
    };
}

export default auth;
