import qs from 'querystring'

export default (req) => {
  return new Promise((resolve, reject) => {
    let data = ''
    req
      .on('data', (chunk) => {
        data += chunk.toString()
      })
      .on('end', () => {
        const ct = req.headers['content-type']
        if (ct?.startsWith('application/json')) {
          return resolve(JSON.parse(data))
        }
        if (ct?.startsWith('application/x-www-form-urlencoded')) {
          return resolve(qs.parse(data))
        }
        return resolve(data)
      })
      .on('error', (err) => {
        return reject(err)
      })
  })
}
