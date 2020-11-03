import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    body: {
        type: String,
        required: [true, 'body is required']
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'post must have an author']
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;
