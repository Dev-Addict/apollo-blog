import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";

const deleteUser = async (
    parentValues: null,
    args: {},
    {req, models: {Post, User}}: Context
) => {
    const {_id} = await protect(req, User);

    await Post.deleteMany({author: _id});
    await User.findByIdAndDelete(_id);

    return {
        code: 204,
        success: true,
        message: 'users deleted'
    };
};

export default deleteUser;
