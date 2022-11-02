const Menu = require('../models/menu');
const MenuItem = require('../models/menuItem');

module.exports = {
    index,
    show,
    new: newMenu,
    create,
    delete: deleteMenu,
    edit,
    update
}

function index(req, res) {
    Menu.find({}, function(err, menus) {
        res.render('menus/index', { title: 'All Menus', menus });
    });
}

function show(req, res) {
    Menu.findById(req.params.id, function(err, menu) {
        MenuItem.find({menu: menu._id},function(err, menuItems) {
            let menuTypeEnum = menu.schema.obj.menuType.enum;
            res.render('menus/show', {
                title: 'Menu Details',
                menu,
                menuTypeEnum,
                menuItems
            });
        });
    });
}

function newMenu(req, res) {
    res.render('menus/new', { title: 'Create a New Menu' });
}

function create(req, res) {
    req.body.user = req.user._id;
    const menu = new Menu(req.body);
    menu.save(function(err) {
        console.log(err);
        if (err) return res.redirect('/menus/new');
        res.redirect('/menus');
    });
}

function deleteMenu(req,res) {
    Menu.findOneAndDelete(
        {_id: req.params.id, user: req.user._id}, function(err) {
            res.redirect('/menus');
        }
    );
}

function edit(req, res) {
    Menu.findOne({_id: req.params.id, user: req.user._id}, function(err, menu) {
        if (err || !menu) return res.redirect('/menus');
        res.render('menus/edit', { title: 'Edit Menu', menu});
    });
}

function update(req, res) {
    Menu.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id},
        req.body,
        {new: true},
        function(err, menu) {
            if (err || !menu) return res.redirect('/menus');
            res.redirect(`/menus`);
        }
    );
}