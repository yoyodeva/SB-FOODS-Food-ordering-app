const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Route to get all menu items
router.get('/', menuController.getMenuItems);

// Route to add a new menu item (POST)
router.post('/', menuController.addMenuItem);

module.exports = router;
