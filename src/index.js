import {ApolloServer, gql} from "apollo-server";
import logger from "node-color-log";

import resolvers from "./resolvers";
import schema from './schema.graphql';

const server = new ApolloServer({
    typeDefs: gql(schema),
    resolvers
});

server.listen().then(({url}) => {
    logger.info(`🚀 server is running ar ${url}`);
});
