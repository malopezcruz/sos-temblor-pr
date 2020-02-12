const { GATSBY_PRIVATE_KEY_ID } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GATSBY_PRIVATE_KEY_ID,
  };
};
