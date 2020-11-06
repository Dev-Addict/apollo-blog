import protect from "../../../utils/auth/protect";

const createPost = async (
    parentValues,
    {data: {title, body, published, uri, cover, commentOf}},
    {req, models: {Post, User}},
    info
) => {
    const {_id: author} = await protect(req, User);

    const post = await Post.create({title, body, published, uri, cover, author, commentOf});

    return {
        code: 201,
        success: true,
        message: 'posts created',
        post
    };
};

export default createPost;
