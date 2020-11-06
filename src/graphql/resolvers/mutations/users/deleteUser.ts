import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";
import deletePostAndComments from "../../../helpers/deletePostAndComments";

const deleteUser = async (
    parentValues: null,
    args: {},
    {req, models: {Post, User, Rating}}: Context
) => {
    const {_id} = await protect(req, User);

    const posts = await Post.find({author: _id});

    for (let i = 0; i < posts.length; i++)
        await deletePostAndComments(posts[i].id);


    await Rating.deleteMany({author: _id});

    await User.findByIdAndDelete(_id);

    return {
        code: 204,
        success: true,
        message: 'users deleted'
    };
};

export default deleteUser;
