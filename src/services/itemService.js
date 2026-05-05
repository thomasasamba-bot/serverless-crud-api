const { v4: uuidv4 } = require("uuid");
const itemModel = require("../models/itemModel");
const logger = require("../utils/logger");

module.exports = {
  createItem: async (data) => {
    const item = {
      id: uuidv4(),
      name: data.name,
    };

    logger.info("Creating item in service", {
      itemId: item.id,
    });

    return await itemModel.createItem(item);
  },

  getItem: async (id) => {
    logger.info("Fetching item", { itemId: id });
    return await itemModel.getItem(id);
  },

  listItems: async () => {
    logger.info("Listing items");
    return await itemModel.listItems();
  },

  updateItem: async (id, data) => {
    logger.info("Updating item", { itemId: id });
    return await itemModel.updateItem(id, data.name);
  },

  deleteItem: async (id) => {
    logger.info("Deleting item", { itemId: id });
    return await itemModel.deleteItem(id);
  },
};