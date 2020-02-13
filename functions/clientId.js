const { GOOGLE_CLIENT_ID } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GOOGLE_CLIENT_ID,
  };
};
