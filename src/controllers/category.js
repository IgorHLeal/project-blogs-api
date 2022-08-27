const categoryService = require('../services/category');

const categoryController = {
  create: async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });

      const category = await categoryService.create(name);
      return res.status(201).json(category);
  },

  getAll: async (_req, res) => {
    const categories = await categoryService.getAll();
    return res.status(200).json(categories);
  },
};

module.exports = categoryController;
