const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: String,
  menuType: {
    type: String,
    require: true,
    enum: ['Breakfast', 'Brunch', 'Lunch', 'Happy Hour', 'Dinner',
      'Dessert', 'Drink', 'Special'],
    default: 'Dinner',
    available: {
      type: Boolean,
      default: false
    }
  },
  contents: [{
    type: Schema.Types.ObjectId,
    ref: 'MenuItem',
    required: true
  }],
  visitorContents: []
}, {
  timestamps: true
});

module.exports = mongoose.model('Menu', menuSchema);