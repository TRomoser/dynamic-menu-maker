const Menu = require('../models/menuItem');

module.exports = {
    index,
    new: newItem
}

function index(req, res) {
    Menu.find({}, function(err, menus) {
        res.render('menuItems/index', { title: 'All Menu Items', menuItems });
    });
}

function newItem(req, res) {
    res.render('menuItems/new', { title:'Add Dish'});
}