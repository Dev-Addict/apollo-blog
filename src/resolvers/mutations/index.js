import signUp from "./users/signUp";
import signIn from './users/signIn';
import updateUser from "./users/updateUser";
import deleteUser from "./users/deleteUser";
import createPost from "./posts/createPost";
import updatePost from "./posts/updatePost";
import deletePost from "./posts/deletePost";

const Mutation = {
    signUp,
    signIn,
    updateUser,
    deleteUser,
    createPost,
    updatePost,
    deletePost
};

export default Mutation;
