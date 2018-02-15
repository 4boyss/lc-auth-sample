'use strict'
const { parse } = require('url')

module.exports = (app) => (req, res, next) => {
  res.render = (routerPath) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    app.render(req, res, routerPath, query)
  }
  next()
}
