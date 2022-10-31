const express = require('express');
const router = express.Router();
const menuItemsCtrl = require('../controllers/menuItems');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/'

// GET /menuItems (display all menu items)
router.get('/menuItems', menuItemsCtrl.index);
// GET /menuItems/new (display a form for entering a new menu item)
router.get('/menuItems/new', ensureLoggedIn, menuItemsCtrl.new);
// POST /menuItems (create new menu item)
router.post('/menuItems', menuItemsCtrl.create)

module.exports = router;
