const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
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
    // addOnPrice: {
    //     type: Number,
    //     required: false
    // },
    allergens: String,
    // menu: [{
    //     ref: 'Menu',
    //     type: Schema.Types.ObjectId
    // }]
}, {
    timestamps: true
})

module.exports = mongoose.model('MenuItem', menuItemSchema);