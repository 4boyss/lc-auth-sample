const {encrypt} = require('./b-crypter')
const sec = 1000
const min = 60 * sec
const hr = 60 * min
const day = 24 * hr
const week = 7 * day

const setB = (req, res) => {
    return res.cookie('b', encrypt(req), { maxAge: week, httpOnly: true })
}
const setU = (req, res) => {
    const session = res.locals.data.session
    return res.cookie('u',session, { maxAge: day, httpOnly: true })
}

module.exports = {setU, setB}