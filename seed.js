require('dotenv').config();
require('./config/database');

const Menu = require('./models/menu');
const MenuItem = require('./models/menuItem');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

const p1 = Menu.deleteMany({});
const p2 = MenuItem.deleteMany({});

Promise.all([p1, p2])
  .then(function(results) {
    // results will be an array
    // of two result objects
    console.log(results);
    return MenuItem.create(data.menuItems);
  })
  .then(function(menuItems) {
    console.log(menuItems);
    return Menu.create(data.menus);
  })
  .then(function(menus) {
    console.log(menus);
    return Promise.all([
      MenuItem.findOne({name: 'Chicken'}),
      Menu.findOne({title: /Dinner/})
    ]);
  })
  .then(function(results) {
    const chicken = results[0];
    const dinner = results[1];
    dinner.contents.push(chicken._id);
    return dinner.save();
  })
  .then(function(dinner) {
    console.log(dinner);
  })
  .then(process.exit);