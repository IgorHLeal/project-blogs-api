const { Router } = require('express');
const userController = require('../controllers/user');
const tokenAuth = require('../middlewares/auth');

const userRouter = Router();

userRouter.post('/', userController.create);
userRouter.get('/', tokenAuth, userController.getAll);
userRouter.get('/:id', tokenAuth, userController.getById);

module.exports = userRouter;
