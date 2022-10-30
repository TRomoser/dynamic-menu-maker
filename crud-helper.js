// crud-helper.js
/*---
Used to perform CRUD external to the application

To use (don't type the $'s):
  1. Open a Node REPL in Terminal:
        $ node

  2. Load this crud-helper.js module
        $ .load crud-helper.js

  3. When done CRUDing, exit the REPL with:
        $ .exit (or ctrl-D, or ctrl-C twice)

Note that if any changes are made to the models or
this module, exit 
---*/


// If the db connection string is in a .env file,
// we need to process it just like in server.js
require('dotenv').config();
// Connect to the database
require('./config/database');

/*--- Require the app's Mongoose models ---*/
const Menu = require('./models/menu');
const MenuItem = require('./models/menuItem');

/*--- Define Variables to Hold Documents ---*/
let menu, menus;
let menuItem, menuItems;

/*--- Example ---*/

// console.log all movie documents
// Preview of promise syntax - coming SOON!
Menu.find({}).then(console.log);

console.log('Time to CRUD!');