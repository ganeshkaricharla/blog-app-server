const router = require('express').Router();
const Category = require('../models/Category');




router.post("/", async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = newCategory.save();
        res.status(200).json


    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/", async (req, res) => {
    try {
        const Categories = await Category.find();
        res.status(200).json(Categories);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})




module.exports = router;
