const itemService = require("../services/itemService");
const response = require("../utils/response");

exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;

    const item = await itemService.getItem(id);

    if (!item) {
      return response.error("Item not found", 404);
    }

    return response.success(item);
  } catch (err) {
    return response.error(err.message);
  }
};