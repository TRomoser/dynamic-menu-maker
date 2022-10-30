const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const menuSchema = new Schema({
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
    images: String,
    addOnStr: String,
    addOnPrice: {
        type: Number,
        required: false
    },
    allergens: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Menu', menuSchema);