const { GOOGLE_PROJECT_ID } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GOOGLE_PROJECT_ID,
  };
};
