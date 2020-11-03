import Post from "../../../models/Post";

const posts = ({id}, args, context, info) => Post.find({author: id});

export default posts;
