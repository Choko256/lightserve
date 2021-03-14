exports.extractCookies = (req) => {
  const cookieHeader = req.headers.cookie
  if (!cookieHeader) {
    return {}
  }
  const cookies = cookieHeader.split(';').reduce((agg, item) => {
    const [cn, cv] = item.trim().split('=')
    agg[cn] = cv
    return agg
  }, {})
  return cookies
}
