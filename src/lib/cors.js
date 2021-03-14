const { codes } = require('./http')

const toBoolean = (value) => {
  if (typeof value === 'boolean') {
    return value
  }
  if (typeof value === 'string') {
    return value === 'true' || value === '1'
  }
  if (typeof value === 'number') {
    return value === 1
  }
  return false
}

module.exports = async (req, res) => {
  res.writeHead(codes.NO_CONTENT.code, {
    'Access-Control-Allow-Origin' : req.cors.origin || '*',
    'Access-Control-Allow-Methods' : req.cors.allowMethods || 'GET,POST',
    'Access-Control-Allow-Credentials' : toBoolean(req.cors.credentials),
    'Access-Control-Allow-Headers' : req.cors.allowHeaders || 'Accept,Content-Type,Content-Length,User-Agent',
    'Accces-Control-Expose-Headers' : req.cors.exposeHeaders || '',
  })
  return res.end()
}
