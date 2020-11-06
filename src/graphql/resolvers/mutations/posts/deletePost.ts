import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";

interface Args {
    id: string;
}

const deletePost = async (
    parentValues: null,
    {id}: Args,
    {req, models: {Post, User}}: Context
) => {
    const {_id: author} = await protect(req, User);

    await Post.findOneAndDelete({_id: id, author});

    return {
        code: 204,
        success: true,
        message: 'posts deleted.'
    };
};

export default deletePost;
