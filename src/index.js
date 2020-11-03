import {join} from 'path';
import {config} from 'dotenv';

config({
    path: join(__dirname, '../config.env')
});

import {ApolloServer, gql} from 'apollo-server';
import mongoose from 'mongoose';
import logger from 'node-color-log';

import typeDefs from "./typeDefs";
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        return {req}
    }
});

const Port = process.env.PORT || 4000;
server.listen({
    port: Port
}).then(({url}) => {
    logger.info(`🚀 server is running ar ${url}.`);
});

const DB = (process.env.DATABASE_URL || '')
    .replace('<password>', process.env.DATABASE_PASSWORD)
    .replace('<database>', process.env.DATABASE_NAME);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    logger.info('🍃 Connected to database successfully.');
});
