import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";

interface Args {
    data: any;
}

const updateUser = async (
    parentValues: null,
    {data}: Args,
    {req, models: {User}}: Context
) => {
    const {_id} = await protect(req, User);

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
        message: 'users updated',
        user
    };
};

export default updateUser;
