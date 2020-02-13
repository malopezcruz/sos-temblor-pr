const { GOOGLE_SPEREADSHEET_ID } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GOOGLE_SPEREADSHEET_ID,
  };
};
