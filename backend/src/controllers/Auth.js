const User = require("../models/User");

module.exports = {
  async signup(req, res) {
    const { username, password, passwordConfirmation } = req.body;

    if (password !== passwordConfirmation) {
      return res.status(422).json({ error: `Password and confirmation do not match!`});
    }

    // Check if theres no user with that username first
    const foundUser = await User.find({ username });

    if (foundUser.length) {
      return res.status(422).json({ error: `Cannot create user because username "${username}" is already taken!`});
    }

    const user = await User.create({
      username,
      password
    });
    return res.json(user);
  },

  async login(req, res) {
    const { username, password } = req.body;
    // Check if theres no user with that username first
    const user = await User.findOne({ username, password }).select("-password");

    if (!user) {
      return res.status(401).json({ error: `Unauthenticated`});
    }
    return res.json(user);
  }
}