import Post from "../../models/Post";
import protect from "../../utils/auth/protect";

const createPost = async (parentValues, {data: {title, body}}, {req}, info) => {
    const {_id: author} = await protect(req);

    const post = await Post.create({title, body, author});

    return {
        code: 201,
        success: true,
        message: 'post created',
        post
    };
};

export default createPost;
