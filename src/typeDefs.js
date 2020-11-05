import {gql} from 'apollo-server-express';

const typeDefs = gql`
    scalar UploadFile
    scalar JSON
    scalar Email
    
    type Query {
        users(page: Int, limit: Int, sort: String, filter: JSON): UsersQueryResponse!
        user(id: ID!): User
        posts(page: Int, limit: Int, sort: String, filter: JSON): PostsQueryResponse!
        post(id: ID!): Post
    }

    type Mutation {
        signIn(data: SignInData!): AuthMutationResponse!
        signUp(data: SignUpData!): AuthMutationResponse!
        updateUser(data: UpdateUserInput!): UpdateUserMutationResponse!
        deleteUser(id: ID!): DeleteMutationResponse!
        createPost(data: CreatePostInput!): PostMutationResponse!
        updatePost(data: UpdatePostInput!, id: ID!): PostMutationResponse!
        deletePost(id: ID!): DeleteMutationResponse!
    }

    type User {
        id: ID!
        name: String!
        email: Email!
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
        email: Email!
        avatar: UploadFile
        password: String!
    }
    
    input SignInData {
        email: Email!
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
    
    type UsersQueryResponse {
        results: Int!
        page: Int!
        limit: Int!
        docs: [User!]!
    }

    type PostsQueryResponse {
        results: Int!
        page: Int!
        limit: Int!
        docs: [Post!]!
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
    
    type DeleteMutationResponse {
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
