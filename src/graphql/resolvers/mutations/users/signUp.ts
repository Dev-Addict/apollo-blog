import Context from "../../../types/Context";
import signToken from "../../../utils/signToken";
import {IUser} from "../../../../models/User";

interface Args {
    data: {
        name: string;
        email: string;
        username: string;
        avatar?: string;
        password: string;
        bio?: string;
    };
}

interface CreateUserData {
    name: string;
    email: string;
    username: string;
    avatar?: string;
    password: string;
    bio?: string;
}

const signUp = async (
    parentValues: null,
    {data: {name, email, username, avatar, password, bio}}: Args,
    {models: {User}}: Context
) => {
    const user = await User.create<CreateUserData>({name, email, password, username, bio})
        .catch(err => {
            return {
                code: 400,
                success: false,
                message: err.message,
                user: null
            };
        }) as IUser;

    const token = signToken(user);

    return {
        code: 201,
        success: true,
        message: 'users created.',
        token,
        user
    };
};

export default signUp;
