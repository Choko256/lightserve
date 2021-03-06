import { codes } from './http.js'

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

export default async (req, res) => {
  res.writeHead(codes.NO_CONTENT.code, {
    'Access-Control-Allow-Origin' : req.cors.origin,
    'Access-Control-Allow-Methods' : req.cors.allowMethods,
    'Access-Control-Allow-Credentials' : toBoolean(req.cors.credentials),
    'Access-Control-Allow-Headers' : req.cors.allowHeaders,
    'Accces-Control-Expose-Headers' : req.cors.exposeHeaders,
  })
  return res.end()
}
