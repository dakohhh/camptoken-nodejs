import { Payload } from '@/types';
import settings from '@/settings';
import JWT from 'jsonwebtoken';
import { IUser } from '@/types';
import { BaseUser } from '@/models';
import { BadRequestException } from '@/utils/exceptions';

export class TokenService {
    static async generateToken(user: Pick<IUser, '_id' | 'role'>) {
        // Construct JWT payload
        const tokenData: Payload = {
            userId: user._id,
            role: user.role,
        };

        // Generate access token and refresh-token JWT
        const accessToken = JWT.sign(tokenData, settings.JWT_SECRET, {
            expiresIn: settings.ACCESS_TOKEN_JWT_EXPIRES_IN / 1000,
        });

        const refreshToken = JWT.sign(tokenData, settings.JWT_SECRET, {
            expiresIn: settings.REFRESH_TOKEN_JWT_EXPIRES_IN / 1000,
        });

        return { access_token: accessToken };
    }

    static generateOtpToken() {}

    static verifyOtpToken() {}
}

export default TokenService;
