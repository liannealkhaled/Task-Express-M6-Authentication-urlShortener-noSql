const User = require("../../models/User");

exports.GetAllUsers = async () => {};

// exports.signup = async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.signin = async (req, res) => {
//   try {
//   } catch (err) {
//     res.status(500).json("Server Error");
//   }
// };

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find().populate("urls");
//     res.status(201).json(users);
//   } catch (err) {
//     next(err);
//   }
// };
