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
        deleteUser: DeleteMutationResponse!
        createPost(data: CreatePostInput!): PostMutationResponse!
        updatePost(data: UpdatePostInput!, id: ID!): PostMutationResponse!
        deletePost(id: ID!): DeleteMutationResponse!
    }

    type User {
        id: ID!
        name: String!
        email: Email!
        username: String!
        avatar: String!
        bio: String
        posts: [Post!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        uri: String!
        cover: String!
        author: User!
        comments: [Post!]!
        commentOf: Post
    }

    input SignUpData {
        name: String!
        email: Email!
        avatar: UploadFile
        password: String!
        username: String!
        bio: String
    }

    input SignInData {
        email: Email!
        password: String!
    }

    input UpdateUserInput {
        name: String
        username: String
        avatar: UploadFile
        bio: String
    }

    input CreatePostInput {
        title: String!
        body: String!
        published: Boolean
        uri: String!
        cover: UploadFile
        commentOf: ID
    }

    input UpdatePostInput {
        title: String
        body: String
        published: Boolean
        uri: String
        cover: UploadFile
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
