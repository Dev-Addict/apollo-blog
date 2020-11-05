import {join} from 'path';
import {config} from 'dotenv';

config({
    path: join(__dirname, '../config.env')
});

import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import mongoose from 'mongoose';
import logger from 'node-color-log';

import typeDefs from "./typeDefs";
import resolvers from './resolvers';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        return {req}
    }
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

server.applyMiddleware({app});

const Port = process.env.PORT || 4000;
app.listen({
    port: Port
}, () => {
    logger.info(`🚀 server is running at http://localhost:${Port}${server.graphqlPath}.`);
});

const DB = (process.env.DATABASE_URL || '')
    .replace('<password>', process.env.DATABASE_PASSWORD)
    .replace('<dbname>', process.env.DATABASE_NAME);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    logger.info('🍃 Connected to database successfully.');
});
