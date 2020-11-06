import Post from "../../models/Post";
import Rating from "../../models/Rating";

const deletePostAndComments = async (
    id: string
) => {
    await Rating.deleteMany({post: id});
    await Post.findByIdAndDelete(id);

    const comments = await Post.find({commentOf: id});

    for (let i = 0; i < comments.length; i++) {
        await deletePostAndComments(comments[i].id);
    }
};

export default deletePostAndComments;
