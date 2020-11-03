import {GraphQLUpload} from 'graphql-upload';

import Query from "./queries";
import Mutation from "./mutations";
import User from "./models/user";
import Post from "./models/post";

const resolvers = {
    Query,
    Mutation,
    User,
    Post,
    UploadFile: GraphQLUpload
};

export default resolvers;
