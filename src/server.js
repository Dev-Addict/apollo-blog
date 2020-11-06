import {join} from 'path';
import {config} from 'dotenv';

config({
    path: join(__dirname, '../config.env')
});

import logger from "node-color-log";

import app from './app';
import apolloServer from './graphql/server';
import connectDb from './utils/db/connectDb';

apolloServer.applyMiddleware({app});

const Port = process.env.PORT || 4000;
app.listen({
    port: Port
}, () => {
    logger.info(`🚀 server is running at http://localhost:${Port}.`);
    logger.info(`☄️ apollo server is running at http://localhost:${Port}${apolloServer.graphqlPath}.`);
});

connectDb();
