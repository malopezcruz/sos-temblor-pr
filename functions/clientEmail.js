const { GOOGLE_CLIENT_EMAIL } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GOOGLE_CLIENT_EMAIL,
  };
};
