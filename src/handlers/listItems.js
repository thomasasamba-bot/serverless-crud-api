const itemService = require("../services/itemService");
const response = require("../utils/response");

exports.handler = async () => {
  try {
    const items = await itemService.listItems();

    return response.success(items);
  } catch (err) {
    return response.error(err.message);
  }
};