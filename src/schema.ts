import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import {
    fileLoader,
    mergeResolvers,
    mergeTypes,
} from 'merge-graphql-schemas';

const allTypes = fileLoader(path.join(__dirname, "./modules/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "./modules/**/*.resolvers.*"));

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers,
});

export default schema;
