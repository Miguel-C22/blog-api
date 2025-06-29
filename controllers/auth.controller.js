const bcrypt = require("bcrypt");
const User = require("../models/user.model");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created", userId: user.id });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.body.id;

  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }

  try {
    await User.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "successfully removed user" });
  } catch (error) {
    console.log("Removing User error", error);
    return res
      .status(500)
      .json({ message: "Failed to remove user", error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { name, email, password, id } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.update(
      {
        name,
        email,
        password: hashedPassword,
      },
      {
        where: {
          id,
        },
      }
    );
    return res.status(200).json({ message: "updated user successfully" });
  } catch (error) {
    console.log("Update User error", error);
    return res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
};

exports.getUser = async (req, res) => {
  const userId = req.body.id;

  if (!userId) {
    return res.status(400).json({ message: "Could not get user" });
  }

  try {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    return res.status(200).json({ message: "Found", user });
  } catch (error) {
    console.log("Get User error", error);
    return res
      .status(500)
      .json({ message: "Failed to get user", error: error.message });
  }
};
