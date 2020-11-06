import protect from "../../../utils/auth/protect";

const updatePost = async (parentValues, {data, id}, {req, models: {Post, User}}, info) => {
    const {_id: author} = await protect(req, User);

    const post = await Post.findOneAndUpdate({author, _id: id}, data);

    return {
        code: 200,
        success: true,
        message: 'posts updated',
        post
    };
};

export default updatePost;
