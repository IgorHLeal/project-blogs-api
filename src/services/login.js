require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const loginService = {
  login: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user) return { message: 'Invalid fields', code: 400 };
    if (!user || user.password !== password) {
      return { message: 'Invalid fields', code: 400 };
    }

    const jwtConfig = {
      algorithm: 'HS256',
    };

    const token = jwt.sign({
      data: { email, id: user.dataValues.id } },
      JWT_SECRET, jwtConfig);

    return { token };
  },
};

module.exports = loginService;

// Referências:
// Código feito com base no dia 24.3
