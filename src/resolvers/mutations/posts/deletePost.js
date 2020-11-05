import Post from "../../../models/Post";
import protect from "../../../utils/auth/protect";

const deletePost = async (parentValues, {id}, {req}, info) => {
    const {_id: author} = await protect(req);

    await Post.findOneAndDelete({_id: id, author});

    return {
        code: 204,
        success: true,
        message: 'posts deleted.'
    };
};

export default deletePost;
