const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

const client = new SecretsManagerClient({
  region: process.env.AWS_REGION || "us-east-1",
});

let cachedSecret = null;

async function getJwtSecret() {
  if (cachedSecret) return cachedSecret;

  const command = new GetSecretValueCommand({
    SecretId: process.env.JWT_SECRET_ARN,
  });

  const response = await client.send(command);

  const secret = JSON.parse(response.SecretString);

  cachedSecret = secret.JWT_SECRET;

  return cachedSecret;
}

module.exports = {
  getJwtSecret,
};