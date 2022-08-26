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

  getAll: async (_req, res) => {
    const users = await userService.getAll();
    return res.status(200).json(users);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  },
};

module.exports = userController;
