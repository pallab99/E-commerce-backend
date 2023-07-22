const { User } = require("../../model/user/user.model");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const isPasswordMatched = password === confirmPassword;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already taken" });
    }

    if (!isPasswordMatched) {
      return res
        .status(400)
        .json({ message: "Password and confirm password do not match" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json(user);
  } catch (error) {
    console.log({ error });
    res.status(500).json(error);
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "The user doesn't exists" });
    }

    if (existingUser.password != password) {
      return res.status(400).json({ message: "Password do not match" });
    }
    res.status(201).json(existingUser);
  } catch (error) {
    console.log({ error });
    res.status(500).json(error);
  }
};

exports.logoutUser = async (req, res) => {
    try {
     res.status(200).json({
        message: "Log out successfully" 
     })
    } catch (error) {
      console.log({ error });
      res.status(500).json(error);
    }
  };