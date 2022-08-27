const { Category } = require('../database/models');

const categoryService = {
  create: async (name) => {
  const category = await Category.create({ name });
    return category;
  },

  getAll: async () => {
    const listCategories = await Category.findAll();
    return listCategories;
  },
};

module.exports = categoryService;
