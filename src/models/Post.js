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
    published: {
        type: Boolean,
        default: false
    },
    uri: {
        type: String,
        required: [true, 'you should provide url for your post']
    },
    cover: {
        type: String,
        default: 'default.jpg'
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'post must have an author']
    }
});

postSchema.index({
    author: 1,
    url: 1
}, {
    unique: true
});

const Post = mongoose.model('Post', postSchema);

export default Post;
