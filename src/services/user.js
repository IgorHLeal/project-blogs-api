require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const userService = {
  create: async (data) => {
    const user = await User.create(data);

    const jwtConfig = {
      algorithm: 'HS256',
    };

    const token = jwt.sign({
      data: { email: data.email, id: user.id } },
      JWT_SECRET, jwtConfig);

    return { token };
  },
};

module.exports = userService;