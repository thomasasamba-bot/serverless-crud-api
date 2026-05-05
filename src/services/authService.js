const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwtUtil = require("../utils/jwt");

module.exports.signup = async (email, password) => {
  const existing = await userModel.getUser(email);

  if (existing) {
    throw new Error("User already exists");
  }

  const hashed = await bcrypt.hash(password, 10);

  return await userModel.createUser({
    email,
    password: hashed,
  });
};

module.exports.login = async (email, password) => {
  const user = await userModel.getUser(email);

  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) throw new Error("Invalid credentials");

  return {
    token: await jwtUtil.generateToken(user),
  };
};