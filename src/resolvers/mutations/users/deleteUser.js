import protect from "../../../utils/auth/protect";

const deleteUser = async (parentValues, args, {req, models: {Post, User}}, info) => {
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
