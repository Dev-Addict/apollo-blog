import GraphQLJSON from "graphql-type-json";
import {GraphQLUpload} from 'graphql-upload';

import Query from "./queries";
import Mutation from "./mutations";
import User from "./models/user";
import Post from "./models/post";
import Email from "./scalars/Email";

const resolvers = {
    Query,
    Mutation,
    User,
    Post,
    JSON: GraphQLJSON,
    UploadFile: GraphQLUpload,
    Email
};

export default resolvers;
