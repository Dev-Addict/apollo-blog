import {gql} from 'apollo-server';

const typeDefs = gql`
    scalar UploadFile
    
    type Query {
        users: [User!]!
    }

    type Mutation {
        signUp(data: SignUpData!): SignUpMutationResponse
    }

    type User {
        id: ID!
        name: String!
        email: String!
        avatar: String!
    }

    input SignUpData {
        name: String!
        email: String!
        avatar: UploadFile
        password: String!
    }

    type SignUpMutationResponse {
        code: String!
        success: Boolean!
        message: String!
        token: String
        user: User
    }
`;

export default typeDefs;
