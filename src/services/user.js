const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const validations = require('../middlewares/userValidation');

const { JWT_SECRET } = process.env;

const create = async (data) => {
  const validate = await validations(data);
  if (validate.error) {
    return validate;
  }

  const user = await User.create(data);

  const userData = { email: data.email, id: user.id };
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const token = jwt.sign(userData, JWT_SECRET, jwtConfig);

  return token;
};

const getAll = async () => {
  const listUsers = await User.findAll({ attributes: { exclude: 'password' } });
  return listUsers;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
  return user;

  // Outra forma de desenvolver usando o findByPk
  // const user = await User.findByPk(id, { attributes: { exclude: 'password' } });
};

module.exports = {
  create,
  getAll,
  getById,
};

// Referências:
// A validação do email com o regex foi retirada do projeto Trybe Wallet com as referências abaixo:
// Regex: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
// match: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match

// Obs: O ".test" foi substituído pelo ".match" pois estava dando erro (Tentar descobrir o porque);