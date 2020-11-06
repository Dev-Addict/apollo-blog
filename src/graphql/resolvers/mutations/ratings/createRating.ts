import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";

interface Args {
    data: {
        post: string;
        value: number;
    };
}

const createPost = async (
    parentValues: null,
    {data: {post, value}}: Args,
    {req, models: {Rating, User}}: Context
) => {
    const {_id: author} = await protect(req, User);

    const rating = await Rating.create({author, post, value});

    return {
        code: 201,
        success: true,
        message: 'posts created',
        rating
    };
};

export default createPost;
