import mongoose, {Types, Schema, model, Document} from 'mongoose';

const postSchema = new Schema({
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
        required: [true, 'you should provide url for your posts']
    },
    cover: {
        type: String,
        default: 'default.jpg'
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'posts must have an author']
    },
    commentOf: {
        type: Types.ObjectId,
        ref: 'Post'
    }
});

postSchema.index({
    author: 1,
    url: 1
}, {
    unique: true
});

export interface Post {
    title: string;
    body: string;
    published: boolean;
    uri: string;
    cover?: string;
    author: Types.ObjectId;
    commentOf?: Types.ObjectId;
}

export interface IPost extends Post, Document {
}

const Post = model<IPost>('Post', postSchema);

export default Post;
