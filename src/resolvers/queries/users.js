import User from "../../models/User";

const users = async (parentValues, args, context, info) => {
    return await User.find()
};

export default users;
