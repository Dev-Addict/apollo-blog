import signToken from "../../../utils/signToken";

const signUp = async (
    parentValues,
    {data: {name, email, username, avatar, password, bio}},
    {models: {User}},
    info
) => {
    const user = await User.create({name, email, password, username, bio})
        .catch(err => {
            return {
                code: 400,
                success: false,
                message: err.message,
                user: null
            };
        });

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
