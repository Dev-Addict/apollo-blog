import User from "../../models/User";

const signUp = async (parentValues, {data: {name, email, avatar, password}}, context, info) => {
    const user = await User.create({name, email, password}).catch(err => {
        return {
            code: 400,
            success: false,
            message: err.message,
            user: null
        };
    });

    return {
        code: 201,
        success: true,
        message: 'user created.',
        user
    };
};

export default signUp;
