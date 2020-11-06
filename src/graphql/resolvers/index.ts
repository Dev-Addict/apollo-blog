import GraphQLJSON from "graphql-type-json";
import {GraphQLUpload} from 'graphql-upload';

import Query from "./queries";
import Mutation from "./mutations";
import User from "./models/user";
import Post from "./models/post";
import Email from "./scalars/Email";
import Rating from "./models/rating";

const resolvers = {
    Query,
    Mutation,
    User,
    Post,
    Rating,
    JSON: GraphQLJSON,
    UploadFile: GraphQLUpload,
    Email
};

export default resolvers;
