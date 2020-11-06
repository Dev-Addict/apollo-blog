import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'rating should have an author']
    },
    post: {
        type: mongoose.Schema.ObjectId,
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

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;
