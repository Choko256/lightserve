const qs = require('querystring')

module.exports = (data = {}) => {
  return {
    contentType : 'application/x-www-form-urlencoded',
    value : qs.stringify(data),
  }
}
