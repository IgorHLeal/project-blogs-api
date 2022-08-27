const { Router } = require('express');
const categoryController = require('../controllers/category');
const tokenAuth = require('../middlewares/auth');

const userRouter = Router();

userRouter.post('/', tokenAuth, categoryController.create);

module.exports = userRouter;
