import protect from "../../../utils/auth/protect";

const deletePost = async (parentValues, {id}, {req, models: {Post, User}}, info) => {
    const {_id: author} = await protect(req, User);

    await Post.findOneAndDelete({_id: id, author});

    return {
        code: 204,
        success: true,
        message: 'posts deleted.'
    };
};

export default deletePost;
