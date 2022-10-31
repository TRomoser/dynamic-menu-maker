const Menu = require('../models/menuItem');
const MenuItem = require('../models/menuItem');

module.exports = {
    index,
    new: newItem,
    create
}

function index(req, res) {
    Menu.find({}, function(err, menus) {
        res.render('menuItems/index', { title: 'All Menu Items', menuItems });
    });
}

function newItem(req, res) {
    res.render('menuItems/new', { title:'Add Dish'});
}

function create(req,res) {
    req.body.user = req.user._id;
    MenuItem.create(req.body, function(err, menuItem) {
        res.redirect(`/menuItems/new`);
    });
}

function update(req, res) {
    req.body.active = !!req.body.active;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}