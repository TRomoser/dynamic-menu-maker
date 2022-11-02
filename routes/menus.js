const express = require('express');
const router = express.Router();
const menusCtrl = require('../controllers/menus');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/menus'

// GET /menus (display all menus)
router.get('/', menusCtrl.index);
// GET /menus/new (display a form for making a new menu)
router.get('/new', ensureLoggedIn, menusCtrl.new);
// GET /menus/:id (show functionality)
router.get('/:id', menusCtrl.show);
// POST /menus (create functionality)
router.post('/', ensureLoggedIn, menusCtrl.create);
// DELETE /menus/:id (delete a menu)
router.delete('/:id', ensureLoggedIn, menusCtrl.delete);
// GET /menus/:id/edit (edit a menu)
router.get('/:id/edit', ensureLoggedIn, menusCtrl.edit);
// PUT /menus/:id (update a menu) 
router.put('/:id', ensureLoggedIn, menusCtrl.update)

module.exports = router;