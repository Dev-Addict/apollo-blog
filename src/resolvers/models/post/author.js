import User from "../../../models/User";

const author = ({author}, args, context, info) => User.findById(author);

export default author;
