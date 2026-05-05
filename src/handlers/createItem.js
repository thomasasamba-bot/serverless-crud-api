const itemService = require("../services/itemService");
const auth = require("../middlewares/auth");
const response = require("../utils/response");
const logger = require("../utils/logger");

exports.handler = async (event) => {
  const requestId = event.requestContext?.requestId;

  try {
    const user = await auth(event);

    const body = JSON.parse(event.body);

    const item = await itemService.createItem(body);

    logger.info("Item created", {
      requestId,
      action: "CREATE_ITEM",
      user: user.email,
      itemId: item.id,
    });

    return response.success({ user, item });

  } catch (err) {
    logger.error("Create item failed", {
      requestId,
      error: err.message,
    });

    return response.error(err.message, 401);
  }
};