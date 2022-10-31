const express = require('express');
const router = express.Router();
const menusCtrl = require('../controllers/menus');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/menus'

// GET /menus (display all menus)
router.get('/', menusCtrl.index);
// GET /menus/new (display a form for making a new menu)
router.get('/new', ensureLoggedIn, menusCtrl.new);

module.exports = router;
