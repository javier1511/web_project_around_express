const User = require('../models/user');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { name, about } = req.body;
      const user = await User.findByIdAndUpdate(req.user._id, { name, about }, { new: true });

      if (!user) {
        return res.status(500).json({ error: 'Usuario no encontrado' });
      }

      res.json({ data: user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateUserAvatar: async (req, res) => {
    try {
      const { avatar } = req.body;
      const user = await User.findByIdAndUpdate(req.user._id, { avatar }, { new: true });

      if (!user) {
        return res.status(500).json({ error: 'Usuario no encontrado' });
      }

      res.json({ data: user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;
