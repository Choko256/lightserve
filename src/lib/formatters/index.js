const jsonFormat = require('./json')
const urlencodedFormat = require('./urlencoded')

module.exports = (formatType = 'json', data = {}) => {
  switch (formatType) {
    case 'json':
      return jsonFormat(data)
    case 'urlencoded':
      return urlencodedFormat(data)
    default:
      return {
        contentType : 'text/plain',
        value : data.toString(),
      }
  }
}
