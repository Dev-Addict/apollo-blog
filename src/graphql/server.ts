import {ApolloServer} from 'apollo-server-express';

import User from "../models/User";
import Post from "../models/Post";
import Rating from "../models/Rating";
import typeDefs from "../graphql/typeDefs";
import resolvers from '../graphql/resolvers';

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        return {
            req,
            models: {
                User,
                Post,
                Rating
            }
        };
    }
});

export default apolloServer;
