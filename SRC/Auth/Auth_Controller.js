// ===== controllers/auth.js =====
const User = require("../Models/User_Model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validate } = require("../User_Validation");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  let [isValid, errors] = validate(username, email, password);
  if (!isValid) return res.status(400).json({ errors });

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ msg: "Email already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });

  res.status(201).json({ msg: "User registered successfully", user });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid email or password" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid email or password" });

  const token = jwt.sign({ id: user._id, email: user.email }, "secret_key", { expiresIn: "1h" });

  res.json({ msg: "Login successful", token });
};

const profile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json({ user });
};

module.exports = { register, login, profile };
