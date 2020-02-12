const { GOOGLE_PRIVATE_KEY_ID } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GOOGLE_PRIVATE_KEY_ID,
  };
};
