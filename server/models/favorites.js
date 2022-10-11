import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    coffees: [{
        type: mongoose.Types.ObjectId,
        ref: 'Coffee'
    }],
    shops: [{
        type: mongoose.Types.ObjectId,
        ref: 'Shop'
    }]
});

const Favorites = mongoose.model('Favorite', favoriteSchema);
export default Favorites;