import {
    CreateTimeTableMutationArgs,
    CreateTimeTableResponse,
} from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import { TimeTable } from '../../../entities/timeTable.entity';
import { User } from '../../../entities/user.entity';

const resolvers: Resolvers = {
    Mutation: {
        createUser: async (_, args: CreateTimeTableMutationArgs): Promise<CreateTimeTableResponse> => {
            try {
                const existingUser = await User.findOne(args.userId);
                if (!existingUser) {
                    return {
                        isOk: false,
                        error: "User Not Found"
                    };
                }

                await TimeTable.create({
                    userId: args.userId,
                    day: args.day,
                    period: args.period
                }).save();

                return {
                    isOk: true,
                    error: null
                };
            } catch (error) {
                return {
                    isOk: false,
                    error: error.message
                };
            }
        }
    }
};

export default resolvers;