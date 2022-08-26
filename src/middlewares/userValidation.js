const Joi = require('joi');
const { User } = require('../database/models');

const validations = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'any.required': '"displayName" is required',
    'string.min': '"displayName" length must be at least 8 characters long',
  }),

  email: Joi.string().email().required().messages({
    'any.required': '"email" must be a valid email',
    'string.min': '"email" must be a valid email',
  }),
  
  password: Joi.string().min(6).required().messages({
    'any.required': '"displayName" is required',
    'string.min': '"password" length must be at least 6 characters long',
  }),

  image: Joi.string(),
});

const userValidations = async (req, res, next) => {
  const valid = validations.validate(req.body);
  if (valid.error) {
    return next({ message: valid.error.details[0].message, code: 400 });
  }
  const { email } = req.body;
  const user = User.findOne({ where: { email } });
  if (user) return res.status(409).json({ message: 'User already registered' });

  return next();
};

module.exports = userValidations;