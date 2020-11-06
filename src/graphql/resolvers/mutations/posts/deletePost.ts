import {ForbiddenError, AuthenticationError} from "apollo-server-express";

import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";
import deletePostAndComments from "../../../helpers/deletePostAndComments";

interface Args {
    id: string;
}

const deletePost = async (
    parentValues: null,
    {id}: Args,
    {req, models: {Post, User}}: Context
) => {
    const {_id: author} = await protect(req, User);

    const post = await Post.findById(id);

    if (!post) throw new ForbiddenError("post not found");
    if (!post.author === author) throw new AuthenticationError("this is not your post");

    await deletePostAndComments(id);

    return {
        code: 204,
        success: true,
        message: 'posts deleted.'
    };
};

export default deletePost;
