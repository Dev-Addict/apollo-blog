import Post from "../../../models/Post";
import protect from "../../../utils/auth/protect";

const createPost = async (parentValues, {data: {title, body, published, uri, cover}}, {req}, info) => {
    const {_id: author} = await protect(req);

    const post = await Post.create({title, body, published, uri, cover, author});

    return {
        code: 201,
        success: true,
        message: 'posts created',
        post
    };
};

export default createPost;
