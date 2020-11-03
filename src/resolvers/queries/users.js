import User from "../../models/User";

const users = (parentValues, args, context, info) => User.find();

export default users;
