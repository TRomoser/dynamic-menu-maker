const Menu = require('../models/menu');
const MenuItem = require('../models/menuItem');

module.exports = {
    index,
    create,
    addToMenu,
    edit,
    update,
    delete: deleteMenuItem
}

function index(req, res) {
    MenuItem.find({}, function(err, menuItems) {
        let menuSectionEnum = MenuItem.schema.obj.menuSection.enum
        res.render('menuItems/index', { 
            title: 'All Menu Items', 
            menuItems,
            menuSectionEnum
        });
    });
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
            res.redirect('/menuItems/index');
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