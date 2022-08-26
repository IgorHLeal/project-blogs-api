const loginService = require('../services/login');

const loginController = {
  login: async (req, res, next) => {
    const token = await loginService.login(req.body);

    if (token.message) return next(token);

    return res.status(200).json(token);
  },
};

module.exports = loginController;

// Referências:
// Código feito com base no dia 24.3
