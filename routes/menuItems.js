const express = require('express');
const router = express.Router();
const menuItemsCtrl = require('../controllers/menuItems');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/menus'

// GET /menus (display all menus)
router.get('/menuItems', menuItemsCtrl.index);
// 
router.get('/menuItems/new', ensureLoggedIn, menuItemsCtrl.new);

module.exports = router;
