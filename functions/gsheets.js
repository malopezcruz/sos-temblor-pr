const { GOOGLE_PRIVATE_KEY } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GOOGLE_PRIVATE_KEY,
  };
};
