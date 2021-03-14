module.exports = (req, route) => {
  const matchMethod = req.method.toLowerCase() === route.method.toLowerCase()
  let matchPath = false
  if (route.path instanceof RegExp) {
    matchPath = req.pathname.match(route.path)
  } else if (typeof route.path === 'string') {
    matchPath = req.pathname === route.path
  } else if (!route.path) {
    matchPath = true
  }
  return matchMethod && matchPath
}
