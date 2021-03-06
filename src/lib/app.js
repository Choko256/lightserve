import http from 'http'
import url from 'url'

import parseBody from './body-parser'
import extractCookies from './cookies'
import baseFormat from './formatters'

class App {
  constructor (context = {}) {
    this.server = http.createServer(this.listener)
    this.routes = []
    this.context = context
    this.middlewares = []
  }

  async listener (req, res) {
    const urlObj = new url.URL(req.url, true)
    const {
      pathname,
      query,
    } = urlObj

    Object.defineProperties(req, {
      pathname : {
        configurable : true,
        enumerable : true,
        writable : false,
        value : pathname,
      },
      query : {
        configurable : true,
        enumerable : true,
        writable : false,
        value : query,
      },
      context : {
        configurable : true,
        enumerable : true,
        writable : false,
        value : this.context,
      },
      cookies : {
        configurable : true,
        enumerable : true,
        writable : false,
        value : extractCookies(req),
      },
      body : {
        configurable : true,
        enumerable : true,
        writable : false,
        value : await parseBody(req),
      },
    })
    Object.defineProperties(res, {
      cookie : {
        configurable : true,
        enumerable : true,
        writable : false,
        value (cookies = []) {
          const cookiesValues = cookies.map((cookie = {}) => {
            const {
              name,
              content,
              domain,
              path = '/',
              secure,
              httpOnly,
              sameSite = 'None',
              expires,
              maxAge,
            } = cookie
            let setCookie = `${name}=${encodeURIComponent(content)}`
            if (domain) {
              setCookie += `; Domain=${domain}`
            }
            if (path) {
              setCookie += `; Path=${path}`
            }
            if (secure) {
              setCookie += '; Secure'
            }
            if (httpOnly) {
              setCookie += '; HttpOnly'
            }
            if (sameSite) {
              setCookie += `; SameSite=${sameSite}`
            }
            if (expires) {
              setCookie += `; Expires=${expires}`
            }
            if (maxAge) {
              setCookie += `; Max-Age=${maxAge}`
            }
            return setCookie
          })
          this.setHeader('Set-Cookie', cookiesValues.join(', '))
        },
      },
      format : {
        configurable : true,
        enumerable : true,
        writable : false,
        value (formatType, data = {}, headers = {}, status = 200) {
          const {
            contentType,
            value,
          } = baseFormat(formatType, data)
          this.writeHead(status, {
            'Content-Type' : contentType,
            ...headers,
          })
          return this.end(value)
        },
      },
    })

    const beforeMiddlewares = this.middlewares.filter((mw) => mw.before || (!mw.before && !mw.after))
    const afterMiddlewares = this.middlewares.filter((mw) => mw.after)
    for (const mw of beforeMiddlewares) {
      await mw(req, res)
    }

    for (const route of this.routes) {
      await route.handler(req, res)
    }

    for (const mw of afterMiddlewares) {
      await mw(req, res)
    }
  }

  addRoute (route) {
    if (!route.handler) {
      throw new Error('a route is supposed to have a handler function')
    }
    this.routes.push(route)
    return this
  }

  use (fn) {
    this.middlewares.push(fn)
    return this
  }

  listen (port) {
    this.server.listen(port)
    return this
  }
}

export default App
