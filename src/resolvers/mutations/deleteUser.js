import User from "../../models/User";
import Post from "../../models/Post";
import protect from "../../utils/auth/protect";

const deleteUser = async (parentValues, args, {req}, info) => {
    const {_id} = await protect(req);

    await Post.deleteMany({author: _id});
    await User.findByIdAndDelete(_id);

    return {
        code: 204,
        success: true,
        message: 'user deleted'
    };
};

export default deleteUser;
