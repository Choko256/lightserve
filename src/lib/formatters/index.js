import jsonFormat from './json'

export default (formatType = 'json', data = {}) => {
  switch (formatType) {
    case 'json':
      return jsonFormat(data)
    default:
      return {
        contentType : 'text/plain',
        value : data.toString(),
      }
  }
}
