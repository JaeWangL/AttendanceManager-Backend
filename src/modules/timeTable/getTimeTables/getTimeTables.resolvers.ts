import {
    GetTimeTablesQueryArgs,
    GetTimeTablesResponse,
} from "./../../../types/graph.d";
import { privateResolver } from '../../../utils/resolver.util';
import { Resolvers } from "../../../types/resolvers";
import { User } from '../../../entities/user.entity';

const resolvers: Resolvers = {
    Query: {
        getTimeTables: privateResolver(async (_, args: GetTimeTablesQueryArgs, { req }): Promise<GetTimeTablesResponse> => {
            try {
                const user = await User.findOne(args.userId);
                if (user) {
                    return {
                        isOk: true,
                        error: null,
                        timeTables: user.timeTables
                    };
                } else {
                    return {
                        isOk: false,
                        error: "User Not Found",
                        timeTables: null
                    };
                }
            } catch (error) {
                return {
                    isOk: false,
                    error: error.message,
                    timeTables: null
                };
            }
        })
    }
};

export default resolvers;