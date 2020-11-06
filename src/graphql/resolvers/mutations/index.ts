import signUp from "./users/signUp";
import signIn from './users/signIn';
import updateUser from "./users/updateUser";
import deleteUser from "./users/deleteUser";
import createPost from "./posts/createPost";
import updatePost from "./posts/updatePost";
import deletePost from "./posts/deletePost";
import createRating from './ratings/createRating';
import updateRating from "./ratings/updateRating";

const Mutation = {
    signUp,
    signIn,
    updateUser,
    deleteUser,
    createPost,
    updatePost,
    deletePost,
    createRating,
    updateRating
};

export default Mutation;
