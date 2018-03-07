const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', (req, res) => {
    res.render('/login')
})

router.post('/', (req, res) => {
    const {username = null, password = null, email = null} = req.body
    if((!username && !email) || !password) return res.status(500).json(new Error('invalidate payload'))

    return (new controller(req, res)).validate()
})

module.exports = router
