import Post from "../../models/Post";

const posts = (parentValues, args, context, info) => Post.find();

export default posts;
