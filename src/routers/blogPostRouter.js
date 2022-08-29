const { Router } = require('express');
const { getAll } = require('../controllers/blogPost');
const tokenAuth = require('../middlewares/auth');

const blogPostRouter = Router();

blogPostRouter.get('/', tokenAuth, getAll);

module.exports = blogPostRouter;
