const blogPostService = require('../services/blogPost');

const blogPostController = {
  getAll: async (_req, res) => {
      const blogPosts = await blogPostService.getAll();
      return res.status(200).json(blogPosts);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const post = await blogPostService.getById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  },
};

module.exports = blogPostController;
