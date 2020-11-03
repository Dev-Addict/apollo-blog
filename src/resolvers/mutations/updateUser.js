import User from "../../models/User";
import protect from "../../utils/auth/protect";

const updateUser = async (parentValues, {data}, {req}, info) => {
    const {_id} = await protect(req);


    const user = await User.findByIdAndUpdate(_id, data).catch(err => {
        return {
            code: 400,
            success: false,
            message: err.message,
            user: null
        };
    });

    return {
        code: 202,
        success: true,
        message: 'user updated',
        user
    };
};

export default updateUser;
