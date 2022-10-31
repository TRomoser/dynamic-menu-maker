const express = require('express');
const router = express.Router();
const menusCtrl = require('../controllers/menus');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/menus'

// GET /menus (display all menus)
router.get('/', menusCtrl.index);

module.exports = router;
