const UserModel = require("../models/User");

//Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    res.status(200).json({ email, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Signup
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.signup(email, password);
    res.status(200).json({ email, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  login,
  signup,
};
