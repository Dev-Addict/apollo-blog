import {Types, Schema, model, Document} from 'mongoose';

const ratingSchema = new Schema({
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'rating should have an author']
    },
    post: {
        type: Types.ObjectId,
        ref: 'Post',
        required: [true, 'rating should have a post']
    },
    value: {
        type: Number,
        min: [0, 'value at least should be 0'],
        max: [5, 'value can\'t be bigger than 5'],
        required: [true, 'rating should have value']
    }
});

ratingSchema.index({
    author: 1,
    post: 1
}, {
    unique: true
});

export interface Rating {
    author: Types.ObjectId;
    post: Types.ObjectId;
    value: number;
}

export interface IRating extends Rating, Document {
}

const Rating = model<IRating>('Rating', ratingSchema);

export default Rating;
