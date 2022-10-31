const Menu = require('../models/menu');
const MenuItem = require('../models/menuItem');

module.exports = {
    index,
    new: newMenu
}

function index(req, res) {
    Menu.find({}, function(err, menus) {
        res.render('menus/index', { title: 'All Menus', menus });
    });
}

function newMenu(req, res) {
    res.render('menus/new', { title: 'Create a New Menu' });
}