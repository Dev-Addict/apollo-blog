import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";

interface Args {
    data: any;
    id: string;
}

const updatePost = async (
    parentValues: null,
    {data, id}: Args,
    {req, models: {Post, User}}: Context
) => {
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
