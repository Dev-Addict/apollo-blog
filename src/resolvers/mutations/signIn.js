import User from "../../models/User";
import signToken from "../../utils/signToken";

const signIn = async (parentValues, {data: {email, password}}, context, info) => {
    const user = await User.findOne({email}).select('+password');

    if (!email)
        return {
            code: 401,
            success: false,
            message: 'email or password is invalid',
            token: null,
            user: null
        };
    if (!(await user.correctPassword(password, user.password)))
        return {
            code: 401,
            success: false,
            message: 'email or password is invalid',
            token: null,
            user: null
        };

    const token = signToken(user);

    return {
        code: 200,
        success: true,
        message: 'successfully logged in.',
        token,
        user
    }
};

export default signIn;
