// const menuItemSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true,
//         default: 0
//     },
//     description: String,
//     images: String,
//     addOnStr: String,
//     addOnPrice: {
//         type: Number,
//         required: false
//     },
//     allergens: String
// }, {
//     timestamps: true
// })


exports.menuItems = [
    {name: 'Chicken', price: 30, description: 'half chicken', images: '', addOn: 'broccoli', addOnPrice: 6, allergens: 'alium'},
    {name: 'Steak', price: 35, description: '8 oz steak', images: '', addOn: 'potatoes', addOnPrice: 7, allergens: 'none'},
    {name: 'Ravioli', price: 28, description: 'stuffed with lobster', images: '', addOn: '', addOnPrice: 0, allergens: 'shellfish'}
]

exports.menus = [
    {userName: 'TRomoser', menuType: 'Dinner'}
]

// const menuSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//       }, 
//       userName: String,
//       menuType: {
//         type: String,
//         require: true,
//         enum: ['Breakfast', 'Brunch', 'Lunch', 'Happy Hour', 'Dinner', 
//         'Dessert', 'Drink', 'Special'],
//         default: 'Dinner',
//         available: {
//             type: Boolean,
//             default: false
//         }
//       },
//       userName: String,
//     }, {
//         timestamps: true
// })
