const Menu = require('../models/menuItem');
const MenuItem = require('../models/menuItem');

module.exports = {
    index,
    new: newItem,
    create,
    addToMenu
}

function index(req, res) {
    Menu.find({}, function(err, menuItems) {
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

function addToMenu(req, res) {
    Menu.findById(req.params.id, function(err, menu) {
        menu.contents.push(req.body.menuItemId);
        menu.save(function(err) {
            res.redirect(`/menus/${menu._id}`);
        });
    });
}


// function update(req, res) {
//     req.body.active = !!req.body.active;
//     Skill.update(req.params.id, req.body);
//     res.redirect(`/skills/${req.params.id}`);
// }