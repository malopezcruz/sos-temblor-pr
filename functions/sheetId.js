const { GOOGLE_SPREADSHEET_ID } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GOOGLE_SPREADSHEET_ID,
  };
};
