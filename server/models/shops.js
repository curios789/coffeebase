import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    hours: [{
        type: Map,
        of: String
    }],
    brewing: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coffee'
    }],
    rating: {
        type: Number,
        default: 0
    },
    comments: {
        type: [commentSchema]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Shop = mongoose.model('Shop', shopSchema);
export default Shop;