const userService = require('../services/user');

const userController = {
  create: async (req, res, next) => {
    try {
      const token = await userService.create(req.body);

      return res.status(201).json(token);
      } catch (error) {
        return next(error);
      }
  },
};

module.exports = userController;
