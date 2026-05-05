const jwt = require("jsonwebtoken");
const logger = require("../utils/logger");

module.exports = async (event) => {
  const requestId = event.requestContext?.requestId;

  const authHeader = event.headers.Authorization || event.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    logger.warn("Missing or invalid auth header", { requestId });
    throw new Error("Unauthorized");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    logger.info("User authenticated", {
      requestId,
      user: decoded.email,
    });

    return decoded;

  } catch (err) {
    logger.error("JWT verification failed", {
      requestId,
      error: err.message,
    });

    throw new Error("Invalid token");
  }
};