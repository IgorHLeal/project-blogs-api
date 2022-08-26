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

  getAll: async () => {
    const listUsers = await User.findAll({ attributes: { exclude: 'password' } });
    return listUsers;
  },

  getById: async (id) => {
    const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
    return user;

    // Outra forma de desenvolver usando o findByPk
    // const user = await User.findByPk(id, { attributes: { exclude: 'password' } });
  },
};

module.exports = userService;