const { Router } = require('express');
const { login } = require('../controllers/login');
const loginValidation = require('../middlewares/loginValidation');

const loginRouter = Router();

loginRouter.post('/', loginValidation, login);

module.exports = loginRouter;
