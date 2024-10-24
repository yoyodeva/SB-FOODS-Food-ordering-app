const MenuItem = require('../models/menuItem');

// Get all menu items
exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving menu items' });
    }
};

// Add a new menu item (admin use case)
exports.addMenuItem = async (req, res) => {
    const { name, price, description, imageUrl } = req.body;

    const newMenuItem = new MenuItem({
        name,
        price,
        description,
        imageUrl
    });

    try {
        await newMenuItem.save();
        res.status(201).json(newMenuItem);
    } catch (error) {
        res.status(500).json({ message: 'Error adding menu item' });
    }
};
