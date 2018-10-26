import {
    GetUserQueryArgs,
    GetUserResponse,
} from "./../../../types/graph.d";
import { privateResolver } from '../../../utils/resolver.util';
import { Resolvers } from "../../../types/resolvers";
import { User } from '../../../entities/user.entity';

const resolvers: Resolvers = {
    Query: {
        getUser: privateResolver(async (_, args: GetUserQueryArgs, { req }): Promise<GetUserResponse> => {
            try {
                const user = await User.findOne(args.id);
                if (user) {
                    return {
                        isOk: true,
                        error: null,
                        user,
                    };
                } else {
                    return {
                        isOk: false,
                        error: "Not Found",
                        user: null
                    };
                }
            } catch (error) {
                return {
                    isOk: false,
                    error: error.message,
                    user: null
                };
            }
        })
    }
};

export default resolvers;
