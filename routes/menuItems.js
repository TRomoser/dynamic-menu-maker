const express = require('express');
const router = express.Router();
const menuItemsCtrl = require('../controllers/menuItems');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/'

// GET /menuItems (display all menu items)
router.get('/menuItems/index', ensureLoggedIn, menuItemsCtrl.index);
// GET /menuItems/new (display a form for entering a new menu item)
// router.get('/menuItems/new', ensureLoggedIn, menuItemsCtrl.new);
// POST /menuItems (create new menu item)
router.post('/menuItems', ensureLoggedIn, menuItemsCtrl.create);
// DELETE menuItems/:id (delete a menu item)
router.delete('/menuItems/:id', ensureLoggedIn, menuItemsCtrl.delete);
// GET /menuItems/:id/edit (edit a menu item)
router.get('/menuItems/:id/edit', ensureLoggedIn, menuItemsCtrl.edit);
// PUT /menuItems/:id (update a menu item) 
router.put('/menuItems/:id', ensureLoggedIn, menuItemsCtrl.update);
// POST /menus/:id/menuItems (add menu items to menu)
router.post('/menus/:id/menuItems', ensureLoggedIn, menuItemsCtrl.addToMenu);

module.exports = router;