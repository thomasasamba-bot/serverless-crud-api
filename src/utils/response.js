module.exports.success = (data, statusCode = 200) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    success: true,
    data,
  }),
});

module.exports.error = (message, statusCode = 500) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    success: false,
    message,
  }),
});