const express = require('express')
const next = require('next')

const { parse } = require('url')

const bodyParser = require("body-parser");
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

require('./lib/init')
const users = require('./routers/users')

app.prepare()
.then(() => {
  const server = express()

  server.use((req, res, next)=>{
    res.render = (routerPath) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      app.render(req, res, routerPath, query)
    }
    next()
  })

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use('/users', users)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})