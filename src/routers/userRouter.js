const { Router } = require('express');
const userController = require('../controllers/user');
const userValidation = require('../middlewares/userValidation');

const userRouter = Router();

userRouter.post('/', userValidation, userController.create);

module.exports = userRouter;
