const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

module.exports.generateToken = async (user) => {
  return jwt.sign(
    { email: user.email },
    SECRET,
    { expiresIn: "1h" }
  );
};

module.exports.verifyToken = async (token) => {
  return jwt.verify(token, SECRET);
};