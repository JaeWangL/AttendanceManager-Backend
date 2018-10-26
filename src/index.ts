import 'dotenv/config';
import app from './app';
import connectionOptions from './db';
import { createConnection } from 'typeorm';
import { Options } from 'graphql-yoga';
import { decodeJWT } from './utils/jwt.util';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";
const SUBSCRIPTION_ENDPOINT: string = "/subscription";

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT,
    subscriptions: {
        path: SUBSCRIPTION_ENDPOINT,
        onConnect: async connectionParams => {
            const token = await connectionParams["X-JWT"];
            if (token) {
                const user = await decodeJWT(token);
                if (user) {
                    return { currentUser: user };
                }
            }
            
            throw new Error("index: No JWT. Can't subscribe");
        }
    }
};

const handleAppStart = () =>
    console.log(`Listening on port ${PORT}`);

createConnection(connectionOptions)
    .then(() => {
        app.start(appOptions, handleAppStart);
    }).catch(err => console.log(err));