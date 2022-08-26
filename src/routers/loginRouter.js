const { Router } = require('express');
const loginController = require('../controllers/login');
const loginValidation = require('../middlewares/loginValidation');

const loginRouter = Router();

loginRouter.post('/', loginValidation, loginController.login);

module.exports = loginRouter;
