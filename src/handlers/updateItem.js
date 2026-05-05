const itemService = require("../services/itemService");
const response = require("../utils/response");

exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;
    const body = JSON.parse(event.body);

    await itemService.updateItem(id, body);

    return response.success({ message: "Item updated successfully" });
  } catch (err) {
    return response.error(err.message);
  }
};