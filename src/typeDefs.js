import {gql} from 'apollo-server';

const typeDefs = gql`
    scalar UploadFile
    
    type Query {
        users: [User!]!
        user(id: ID!): User
    }

    type Mutation {
        signIn(data: SignInData!): AuthMutationResponse!
        signUp(data: SignUpData!): AuthMutationResponse!
        updateUser(data: UpdateUserInput): UpdateUserMutationResponse!
        deleteUser(id: ID!): DeleteUserMutationResponse!
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
    
    input SignInData {
        email: String!
        password: String!
    }
    
    input UpdateUserInput {
        name: String
        avatar: UploadFile
    }

    type AuthMutationResponse {
        code: String!
        success: Boolean!
        message: String!
        token: String
        user: User
    }

    type UpdateUserMutationResponse {
        code: String!
        success: Boolean!
        message: String!
        user: User
    }
    
    type DeleteUserMutationResponse {
        code: String!
        success: Boolean!
        message: String!
    }
`;

export default typeDefs;
