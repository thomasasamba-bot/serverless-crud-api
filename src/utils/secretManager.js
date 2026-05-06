const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

const client = new SecretsManagerClient();
let cachedSecret = null;

async function getJwtSecret() {
  if (cachedSecret) return cachedSecret;

  const secretArn = process.env.JWT_SECRET_ARN;
  if (!secretArn) {
    throw new Error('JWT_SECRET_ARN environment variable is not set');
  }

  const command = new GetSecretValueCommand({ SecretId: secretArn });
  const response = await client.send(command);
  cachedSecret = response.SecretString;
  return cachedSecret;
}

module.exports = { getJwtSecret };