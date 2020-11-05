import Post from "../../../models/Post";

const post = async (parentValues, {id}, context, info) => {
    return await Post.findById(id);
};

export default post
