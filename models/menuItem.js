const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: String,
    image: String,
    addOn: [String],
    allergens: String,
    menuSection: {
        type: String,
        require: true,
        enum: ['Starter', 'Main', 'Side', 'Dessert'],
        default: 'Main'
    },
    available: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('MenuItem', menuItemSchema);