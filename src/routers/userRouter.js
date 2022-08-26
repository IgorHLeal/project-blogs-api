const { Router } = require('express');
const userController = require('../controllers/user');
const userValidation = require('../middlewares/userValidation');
const tokenAuth = require('../middlewares/auth');

const userRouter = Router();

userRouter.post('/', userValidation, userController.create);
userRouter.get('/', tokenAuth, userController.getAll);

module.exports = userRouter;
