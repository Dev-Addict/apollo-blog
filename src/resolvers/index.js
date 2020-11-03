import {GraphQLUpload} from 'graphql-upload';

import Query from "./queries";
import Mutation from "./mutations";

const resolvers = {
    Query,
    Mutation,
    UploadFile: GraphQLUpload
};

export default resolvers;
