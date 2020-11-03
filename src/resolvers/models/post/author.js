import User from "../user";

const author = ({author}, args, context, info) => User.findById(author);

export default author;
