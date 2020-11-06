import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";

interface Args {
    data: {
        title: string;
        body: string;
        published: boolean;
        uri: string;
        cover?: string;
        commentOf?: string;
    };
}

const createPost = async (
    parentValues: null,
    {data: {title, body, published, uri, cover, commentOf}}: Args,
    {req, models: {Post, User}}: Context
) => {
    const {_id: author} = await protect(req, User);

    const post = await Post.create({title, body, published, uri, author, commentOf});

    return {
        code: 201,
        success: true,
        message: 'posts created',
        post
    };
};

export default createPost;
