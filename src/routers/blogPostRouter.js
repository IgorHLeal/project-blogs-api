const { Router } = require('express');
const { getAll } = require('../controllers/blogPost');
const tokenAuth = require('../middlewares/auth');
const { getById } = require('../services/blogPost');

const blogPostRouter = Router();

blogPostRouter.get('/', tokenAuth, getAll);
blogPostRouter.get('/:id', tokenAuth, getById);

module.exports = blogPostRouter;
