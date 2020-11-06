import Post from "../../../models/Post";

const comments = ({_id}, args, context, info) => Post.find({commentOf: _id});

export default comments;
