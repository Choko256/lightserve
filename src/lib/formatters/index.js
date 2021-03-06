import jsonFormat from './json.js'
import urlencodedFormat from './urlencoded.js'

export default (formatType = 'json', data = {}) => {
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
