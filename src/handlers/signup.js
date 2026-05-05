const authService = require("../services/authService");
const response = require("../utils/response");

exports.handler = async (event) => {
  try {
    const { email, password } = JSON.parse(event.body);

    const user = await authService.signup(email, password);

    return response.success(user, 201);

  } catch (err) {
    return response.error(err.message);
  }
};