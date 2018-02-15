const express = require('express')
const next = require('next')
const bodyParser = require("body-parser");
const port = parseInt(process.env.opePORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

require('./lib/init')

app.prepare()
.then(() => {
  const server = express()

  // middleware init below
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(require('./lib/middleware/nextRender')(app))

  // routers config below
  server.use('/users/signup', require('./routers/usersSignup'))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})