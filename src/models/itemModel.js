const {
  PutCommand,
  GetCommand,
  ScanCommand,
  UpdateCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");

const dynamo = require("./dynamoClient");

const TABLE = process.env.TABLE_NAME;

module.exports.createItem = async (item) => {
  await dynamo.send(new PutCommand({
    TableName: TABLE,
    Item: item,
  }));

  return item;
};

module.exports.getItem = async (id) => {
  const res = await dynamo.send(new GetCommand({
    TableName: TABLE,
    Key: { id },
  }));

  return res.Item || null;
};

module.exports.listItems = async () => {
  const res = await dynamo.send(new ScanCommand({
    TableName: TABLE,
  }));

  return res.Items || [];
};

module.exports.updateItem = async (id, name) => {
  const res = await dynamo.send(new UpdateCommand({
    TableName: TABLE,
    Key: { id },
    UpdateExpression: "set #n = :n",
    ExpressionAttributeNames: { "#n": "name" },
    ExpressionAttributeValues: { ":n": name },
    ReturnValues: "ALL_NEW",
  }));

  return res.Attributes;
};

module.exports.deleteItem = async (id) => {
  await dynamo.send(new DeleteCommand({
    TableName: TABLE,
    Key: { id },
  }));

  return { id };
};