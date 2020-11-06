import Context from "../../../types/Context";
import signToken from "../../../utils/signToken";
import {IUser} from "../../../../models/User";

interface Args {
    data: {
        email: string;
        password: string;
    };
}

const signIn = async (
    parentValues: null,
    {data: {email, password}}: Args,
    {models: {User}}: Context
) => {
    const user = await User.findOne({email}).select('+password') as IUser;

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
