const {
  PutCommand,
  GetCommand
} = require("@aws-sdk/lib-dynamodb");

const dynamo = require("./dynamoClient");

const TABLE = process.env.USERS_TABLE;

module.exports.createUser = async (user) => {
  await dynamo.send(new PutCommand({
    TableName: TABLE,
    Item: user,
  }));

  return { email: user.email };
};

module.exports.getUser = async (email) => {
  const res = await dynamo.send(new GetCommand({
    TableName: TABLE,
    Key: { email },
  }));

  return res.Item || null;
};