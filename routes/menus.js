const express = require('express');
const router = express.Router();
const menusCtrl = require('../controllers/menus');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const menu = require('../models/menu');
const { menus } = require('../data');

// All routes start with '/menus'

// GET /menus (display all menus)
router.get('/', ensureLoggedIn, menusCtrl.index);
// GET /menus/:id/ (show a menu)
router.get('/:id', ensureLoggedIn, menusCtrl.show);
// POST /menus (create functionality)
router.post('/', ensureLoggedIn, menusCtrl.create);
// DELETE /menus/:id (delete a menu)
router.delete('/:id', ensureLoggedIn, menusCtrl.delete);
// GET /menus/:id/edit (edit a menu)
router.get('/:id/edit', ensureLoggedIn, menusCtrl.edit);
// PUT /menus/:id (update a menu) 
router.put('/:id', ensureLoggedIn, menusCtrl.update);

module.exports = router;