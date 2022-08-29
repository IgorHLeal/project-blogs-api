const blogPostService = require('../services/blogPost');

const blogPostController = {
  getAll: async (_req, res) => {
      const blogPosts = await blogPostService.getAll();
      return res.status(200).json(blogPosts);
  },
};

module.exports = blogPostController;
