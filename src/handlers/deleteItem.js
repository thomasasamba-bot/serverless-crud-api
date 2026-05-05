const itemService = require("../services/itemService");
const response = require("../utils/response");

exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;

    await itemService.deleteItem(id);

    return response.success({ message: "Item deleted successfully" });
  } catch (err) {
    return response.error(err.message);
  }
};