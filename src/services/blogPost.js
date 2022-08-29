const { User, Category, BlogPost } = require('../database/models');

const blogPostService = {
  getAll: async () => {
      const listBlogPosts = await BlogPost.findAll({
        include: [
          { model: User, as: 'user', attributes: { exclude: 'password' } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      });
      return listBlogPosts;
  },
};

module.exports = blogPostService;
