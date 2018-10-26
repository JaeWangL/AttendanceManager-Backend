import { createJWT } from "../../../utils/jwt.util";
import {
    CreateUserMutationArgs,
    CreateUserResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import { User } from '../../../entities/user.entity';

const resolvers: Resolvers = {
    Mutation: {
        createUser: async (_, args: CreateUserMutationArgs): Promise<CreateUserResponse> => {
            try {
                const existingUser = await User.findOne({ email: args.email });
                if (existingUser) {
                    return {
                        isOk: false,
                        error: "This email has already registered",
                        token: null
                    };
                }

                const newUser = await User.create({
                    email: args.email,
                    password: args.password,
                }).save();

                const newToken = createJWT(newUser.id);
                return {
                    isOk: true,
                    error: null,
                    token: newToken,
                };
            } catch (error) {
                return {
                    isOk: false,
                    error: error.message,
                    token: null
                };
            }
        }
    }
};

export default resolvers;