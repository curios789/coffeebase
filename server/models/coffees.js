import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const coffeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    flavor: [{
        type: String,
        required: true
    }],
    body: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    acidity: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comments: [commentSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const Coffee = mongoose.model('Coffee', coffeeSchema);
export default Coffee;