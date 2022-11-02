const Menu = require('../models/menuItem');
const MenuItem = require('../models/menuItem');

module.exports = {
    index,
    new: newItem,
    create,
    addToMenu,
    edit,
    update,
    delete: deleteMenuItem
}

function index(req, res) {
    Menu.find({}, function(err, menuItems) {
        res.render('menuItems/index', { title: 'All Menu Items', menuItems });
    });
}

function newItem(req, res) {
    res.render('menuItems/index', { title:'Add Dish' });
}

function create(req,res) {
    req.body.user = req.user._id;
    MenuItem.create(req.body, function(err, menuItem) {
        res.redirect(`/menuItems/index`);
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

function edit(req, res) {
    MenuItem.findOne({_id: req.params.id, user: req.user._id}, function(err, menuItem) {
        if (err || !menuItem) return res.redirect('/menuItems/index');
        res.render('menuItems/edit', { title: 'Edit Menu Item', menuItem});
    });
}

function update(req, res) {
    MenuItem.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id},
        req.body,
        {new: true},
        function(err, menuItem) {
            if (err || !menuItem) return res.redirect('/menuItems');
            res.redirect(`/menuItems`);
        }
    );
}

function deleteMenuItem(req, res) {
    MenuItem.findOneAndDelete(
        {_id: req.params.id, user: req.user._id}, function(err) {
            res.redirect('/menuItems/index');
        }
    );
}

// function update(req, res) {
//     req.body.active = !!req.body.active;
//     Skill.update(req.params.id, req.body);
//     res.redirect(`/skills/${req.params.id}`);
// }