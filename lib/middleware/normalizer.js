'use strict'
const cookie = require('cookie');

module.exports = (app) => (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'] || ''

    const normalizer = { ...req.body, ...req.query, ip, userAgent}
    req.normalizer = normalizer
    next()
}
