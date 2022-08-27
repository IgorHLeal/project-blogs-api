const { Router } = require('express');
const { create, getAll, getById } = require('../controllers/user');
const tokenAuth = require('../middlewares/auth');

const userRouter = Router();

userRouter.post('/', create);
userRouter.get('/', tokenAuth, getAll);
userRouter.get('/:id', tokenAuth, getById);

module.exports = userRouter;
