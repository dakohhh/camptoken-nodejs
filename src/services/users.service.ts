import moment from 'moment';
import { AuthRequest } from '@/types/auth';

class UserService {
    static async getUserSession({ user, body }: Partial<AuthRequest>) {
        console.log(moment(user?.lastActive).format('YYYY-MM-DD HH:mm:ss'));

        return {};
    }
}

export default UserService;
