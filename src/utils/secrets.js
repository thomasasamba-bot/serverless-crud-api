const AWS = require("aws-sdk");
const ssm = new AWS.SSM();

let cached;

module.exports.getJWTSecret = async () => {
  if (cached) return cached;

  const res = await ssm.getParameter({
    Name: process.env.JWT_SECRET_PARAM,
    WithDecryption: true,
  }).promise();

  cached = res.Parameter.Value;
  return cached;
};