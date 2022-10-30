const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }, 
      userName: String,
      userAvatar: String,
      
})

module.exports = mongoose.model('Menu', menuSchema);