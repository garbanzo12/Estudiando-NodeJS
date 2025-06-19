const User = require('../models/user.model');

// GET all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// POST new user
exports.createUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    const user = new User({ name, email, age });
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

// PUT update user
exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE user
exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};
