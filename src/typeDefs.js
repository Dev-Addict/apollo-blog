import {gql} from 'apollo-server';

const typeDefs = gql`
    scalar UploadFile
    
    type Query {
        users: [User!]!
        user(id: ID!): User
        posts: [Post!]!
        post(id: ID!): Post
    }

    type Mutation {
        signIn(data: SignInData!): AuthMutationResponse!
        signUp(data: SignUpData!): AuthMutationResponse!
        updateUser(data: UpdateUserInput!): UpdateUserMutationResponse!
        deleteUser(id: ID!): DeleteUserMutationResponse!
        createPost(data: CreatePostInput!): PostMutationResponse!
        updatePost(data: UpdatePostInput!, id: ID!): PostMutationResponse!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        avatar: String!
        posts: [Post!]!
    }
    
    type Post {
        id: ID!
        title: String!
        body: String!
        author: User!
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
    
    input CreatePostInput {
        title: String!
        body: String!
    }
    
    input UpdatePostInput {
        title: String
        body: String
    }

    type AuthMutationResponse {
        code: Int!
        success: Boolean!
        message: String!
        token: String
        user: User
    }

    type UpdateUserMutationResponse {
        code: Int!
        success: Boolean!
        message: String!
        user: User
    }
    
    type DeleteUserMutationResponse {
        code: Int!
        success: Boolean!
        message: String!
    }
    
    type PostMutationResponse {
        code: Int!
        success: Boolean!
        message: String!
        post: Post
    }
`;

export default typeDefs;
