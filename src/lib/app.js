import http from 'http'
import url from 'url'

import parseBody from './body-parser.js'
import parseMultipart from './multipart.js'
import extractCookies from './cookies.js'
import baseFormat from './formatters/index.js'
import matchRoute from './matcher.js'
import cors from './cors.js'

class App {
  constructor (context = {}) {
    this.server = http.createServer(this.listener)
    this.routes = []
    this.context = context
    this.middlewares = []
    this.authenticators = []
    this.errorHandler = null
    this.corsConfiguration = null
  }

  async listener (req, res) {
    const urlObj = new url.URL(req.url, true)
    const {
      pathname,
      query,
    } = urlObj

    let body = null
    if (req.headers['content-type'] === 'multipart/form-data') {
      Object.defineProperty(req, 'multipart', {
        configurable : true,
        enumerable : true,
        writable : false,
        value : await parseMultipart(req),
      })
    } else {
      Object.defineProperty(req, 'body', {
        configurable : true,
        enumerable : true,
        writable : false,
        value : await parseBody(req),
      })
    }

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
      cors : {
        configurable : true,
        enumerable : true,
        writable : false,
        value : this.corsConfiguration,
      }
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
      error : {
        configurable : true,
        enumerable : true,
        writable : false,
        value (data = {}, status = 500) {
          this.writeHead(status, { 'Content-Type' : 'application/json' })
          return this.end(JSON.stringify(data))
        },
      },
    })

    const beforeMiddlewares = this.middlewares.filter((mw) => mw.before || (!mw.before && !mw.after))
    const afterMiddlewares = this.middlewares.filter((mw) => mw.after)

    try {
      for (const mw of beforeMiddlewares) {
        await mw(req, res)
      }

      const route = this.routes.find((r) => matchRoute(req, r))
      if (route) {
        await route.handler(req, res)
      } else {
        throw new Error('404 Not Found')
      }

      for (const mw of afterMiddlewares) {
        await mw(req, res)
      }
    } catch (err) {
      if (!this.errorHandler) {
        return res.error({
          message : err.message,
        }, 500)
      }
      return this.errorHandler(err, req, res)
    }
  }

  addRoute (route) {
    if (!route.handler) {
      throw new Error('a route is supposed to have a handler function')
    }
    this.routes.push(route)
    return this
  }

  addAuthenticator (authenticatorClass) {
    if (authenticatorClass) {
      this.authenticators.push(new authenticatorClass())
    }
    return this
  }

  use (fn) {
    this.middlewares.push(fn)
    return this
  }

  cors (options) {
    this.corsConfiguration = options
    if (this.corsConfiguration) {
      this.addRoute({
        name : '__cors',
        method : 'options',
        handler : cors,
      })
    }
    return this
  }

  listen (port) {
    this.server.listen(port)
    return this
  }

  error (fn) {
    this.errorHandler = fn
    return this
  }
}

export default App
