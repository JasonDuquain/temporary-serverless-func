// domain/.netlify/functions/1-hello

const person = {name: 'jon'}

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: 'hallo world'
  }
}