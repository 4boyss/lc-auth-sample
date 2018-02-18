const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', (req, res) => {
    res.render('/signup')
})

router.get('/success', (req, res) => {
    const message = 'You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message. \n\nPlease verify your email.'
    const title = 'Finished Signup'
    res.locals.data = {message, title}
    res.render('/success')
})

router.post('/', (req, res) => {
    const {username = null, password = null, email = null} = req.body
    if((!username && !email) || !password) return res.status(500).json(new Error('invalidate payload'))

    return (new controller(req, res)).validate()
})

module.exports = router
