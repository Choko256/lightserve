import qs from 'querystring'

export default (data = {}) => {
  return {
    contentType : 'application/x-www-form-urlencoded',
    value : qs.stringify(data),
  }
}
