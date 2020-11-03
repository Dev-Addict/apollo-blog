import User from "../../models/User";

const user = async (parentValues, {id}, context, info) => {
    return await User.findById(id);
};

export default user
