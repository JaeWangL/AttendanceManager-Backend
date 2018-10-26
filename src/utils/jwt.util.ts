import jwt from 'jsonwebtoken';
import { User } from '../entities/user.entity';

export const createJWT = (id: number): string => {
    const token = jwt.sign({ id }, process.env.JWT_TOKEN || '');
  
    return token;
};

export const decodeJWT = async (token: string): Promise<User | undefined> => {
    try {
        const decoded: any = jwt.verify(token, process.env.JWT_TOKEN || '');
        const { id } = decoded;
        const user = await User.findOne({ id });
        
        return user;
    } catch (error) {
        return undefined;
    }
};
