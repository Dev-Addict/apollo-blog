import Post from "../../../models/Post";

const commentOf = ({commentOf}, args, context, info) => Post.findById(commentOf);

export default commentOf;
