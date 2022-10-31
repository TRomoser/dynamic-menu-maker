const Menu = require('../models/menu');
const MenuItem = require('../models/menuItem');

module.exports = {
    index
}

function index(req, res) {
    Menu.find({}, function(err, menus) {
        res.render('menus/index', { title: 'All Menus', menus });
    });
}