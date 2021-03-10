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
