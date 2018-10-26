import { createJWT } from "../../../utils/jwt.util";
import { LoginMutationArgs, LoginResponse } from './../../../types/graph';
import { Resolvers } from "../../../types/resolvers";
import { User } from '../../../entities/user.entity';

const resolvers: Resolvers = {
    Mutation: {
        login: async (_, args: LoginMutationArgs): Promise<LoginResponse> => {
            try {
                const user = await User.findOne({ email: args.email });
                if (!user) {
                    return {
                        isOk: false,
                        error: "User not found with that email",
                        userId: null,
                        token: null
                    };
                }

                const checkPassword = await user.comparePassword(args.password);
                if (checkPassword) {
                    const newToken = createJWT(user.id);
                    return {
                        isOk: true,
                        error: null,
                        userId: user.id,
                        token: newToken
                    };
                } else {
                    return {
                        isOk: false,
                        error: "Wrong password",
                        userId: null,
                        token: null
                    };
                }
            } catch (error) {
                return {
                    isOk: false,
                    error: error.message,
                    userId: null,
                    token: null
                };
            }
        }
    }
};

export default resolvers;
