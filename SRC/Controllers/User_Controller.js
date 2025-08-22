const User = require("../Models/User_Model");

const getAll = async (req, res) => {
  const users = await User.find();
  res.json({ users, msg: "All users" });
};

const getOne = async (req, res) => {
  const id = req.params["id"];
  const user = await User.findOne({ _id: id });
  if (!user) return res.json({ msg: "User not found" });
  return res.json({ user, msg: "User found" });
};

const createOne = async (req, res) => {
  const { username, password, contectNo, email } = req.body;                        
  const user = await User.create({ username, password, contectNo, email });
  res.status(201).json({ msg: "User created", user });
};

const updateOne = async (req, res) => {
  const id = req.params["id"];
  const user = await User.findById(id);
  if (!user) return res.json({ msg: "User not found" });

  const { username, password, contectNo, email } = req.body;

  await User.findOneAndUpdate(
    { _id: id },
    { username, password, contectNo, email }
  );

  res.json({ msg: "User updated successfully" });
};

const deleteOne = async (req, res) => {
  const id = req.params["id"];
  const result = await User.findByIdAndDelete(id);
  res.json({ msg: `User deleted successfully, ${JSON.stringify(result)}` });
};

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };

