const Category = require("../models/category.model");

const createCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const category = new Category({
            name: name,
        });

        await category.save();
        res.status(201).json({ message: "Category creada exitosamente." });
    } catch (error) {
        console.error("Error al crear la categoría:", error);
        res.status(500).json({ error: "Ha ocurrido un error al crear la categoría." });
    }
};


module.exports = {
    createCategory,
};