const { Router } = require('express');
const { create, getAll } = require('../controllers/category');
const tokenAuth = require('../middlewares/auth');

const userRouter = Router();

userRouter.post('/', tokenAuth, create);
userRouter.get('/', tokenAuth, getAll);

module.exports = userRouter;
