# LightServe

LightServe is a little webserver giving everything you need.

## Installation

```
npm install lightserve
```

**OR**

```
yarn add lightserve
```

## Usage

```javascript
import { App } from 'lightserve'

const app = new App()
app.addRoute({
  name : 'home',
  method : 'get',
  path : '/',
  handler : async (req, res) => {
    res.format(null, 'Hello World!')
  },
}).listen(3000)
```

## API Reference

### `App`

The `App` object is the global object that represents your webserver.

#### `addRoute(options): App`

Adds a route definition.

**Arguments**

| Name | Description |
| ---- | ----------- |
| `options` | Object defining a route |
| `options.method` | **Optional, Default `get`** Method used for this route |
| `options.path` | **Optional** Path of the route |
| `options.handler` | **Required** Async Function taking `req` and `res` parameters |
| `options.authenticated` | **Optional** Set this route as requiring authentication |
| `options.name` | Name of the route |

#### `use(middleware): App`

Adds a middleware.

**Arguments**

| Name | Description |
| ---- | ----------- |
| `middleware` | Middleware definition |
| `middleware.before` | **Optional** Sets the middleware to be executed before the route handler |
| `middleware.after` | **Optional** Sets the middleware to be executed after the route handler |
| `middleware.fn` | **Required** Middleware function, taking `req` and `res` parameters |

#### `addAuthenticator(authenticator): App`

Adds an authenticator handler. It's only meant to check if the incoming request matches your
needs about the authentication.

**Arguments**

| Name | Description |
| ---- | ----------- |
| `authenticator` | Authenticator definition |
| `authenticator.authenticate` | **Required** Function taking `req` as parameter |

#### `cors(options): App`

Enables CORS (Cross-Origin Resource Sharing) for your webserver.

**Arguments**

| Name | Description |
| ---- | ----------- |
| `origin` | **Required** You should always set the origin of your requests. Set it as `*` to set uncontrolled origin. |
| `allowMethods` | **Optional** Set a list of allowed methods. It defaults to `GET` and `POST` |
| `credentials` | **Optional** Sets if the cookies are meant to be received through the requests. Default to `false` |
| `allowHeaders` | **Optional** Sets a list of allowed headers. It defaults to `Accept,Content-Type,Content-Length,User-Agent` |
| `exposeHeaders` | **Optional** Sets a list of headers that are exposed by the server. Defaults to an empty string |

#### `error(handler): App`

Defines a global error handler for your webserver.

**Arguments**

| Name | Description |
| ---- | ----------- |
| `handler` | Function to be called whenever an error occurs in the process. It takes `err`, `req` and `res` arguments |

#### `listen(port): App`

Starts the server on the given port.

**Arguments**

| Name | Description |
| ---- | ----------- |
| `port` | Port to start the server on. |

### Requests

LightServe adds some information inside the request object.

#### `pathname: string`

This is the actual url pathname without the query parameters.

#### `query: object`

The `query` object contains all the query parameters as an object.

#### `body: object`

The `body` object contains all the request body (for all requests but multipart ones where it is undefined).

#### `multipart: object`

The `multipart` object contains the request multipart body.

Each key of the object is a field name, each value is an object with a `type` property which value can be `field` or `file`.

**For fields** : The value is the string representation of what has been sent.

**For files** : The value is a buffer containing the file data.

#### `context: object`

The context is a flexible object you can use to store what you want.

> I suggest you use that one to store some user authentication data.

#### `cookies: object`

List of cookies as an object where the keys are the cookie names, and values are the cookie values.

#### `cors: object`

The `cors` object contains the CORS configuration you set in the `app.cors` function.

### Responses

LightServe adds some information inside the response object.

#### `cookie(cookies: Array)`

Sets a cookie in the response.

**Arguments**

| Name | Description |
| ---- | ----------- |
| `cookies` | Array of cookies items |
| `cookie.name` | **Required** Name of the cookie |
| `cookie.content` | **Required** Value of the cookie |
| `cookie.domain` | **Optional** Domain set for the cookie validity |
| `cookie.path` | **Optional** Path set for the cookie validity |
| `cookie.secure` | **Optional** Flag set to restrict the cookie to HTTPS connections |
| `cookie.httpOnly` | **Optional** Forces the cookie to not be accessible via JavaScript |
| `cookie.sameSite` | **Optional** Sets the Same-Site policy for the browser (more information here https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
| `cookie.expires` | **Optional** Sets a JavaScript Date as the cookie expiration date |
| `cookie.maxAge` | **Optional** Seconds the cookie will be accepted before expiration |

#### `format(type: string, data: any, headers: object, status: number = 200)`

Formats and sends a response.

**Arguments**

| Name | Description |
| ---- | ----------- |
| `type` | Type of the response, can be `json` or `urlencoded` |
| `data` | Data the response will send |
| `headers` | Additional headers the response will send |
| `status` | HTTP status of the response |

#### `error(data: any, status: number = 500)`

Helper sending a JSON formatted error.

**Arguments**

| Name | Description |
| ---- | ----------- |
| `data` | Error data |
| `status` | HTTP status of the error response |

> Note that this helper will force the `application/json` content type for the response.
