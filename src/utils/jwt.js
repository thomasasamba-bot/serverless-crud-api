const jwt = require("jsonwebtoken");
const { getJwtSecret } = require("./secretManager");

module.exports.generateToken = async (user) => {
  const secret = await getJwtSecret();

  return jwt.sign(
    { email: user.email },
    secret,
    { expiresIn: "1h" }
  );
};

module.exports.verifyToken = async (token) => {
  const secret = await getJwtSecret();

  return jwt.verify(token, secret);
};