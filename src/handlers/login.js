const authService = require("../services/authService");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const result = await authService.login(body.email, body.password);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: err.message }),
    };
  }
};