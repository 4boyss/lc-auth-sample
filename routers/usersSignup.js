const express = require('express')
const router = express.Router()

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
    const {username = null, password = null} = req.body

    if(!username || !password) return res.status(500).json(new Error('invalidate payload'))

    var user = new AV.User();
    // user.setUsername(username)
    // user.setPassword(password)
    return user
        .signUp({username, password})
        .then(function (u) {
            return res.json(u)
        }, (err) => {
            return res.status(500).json(new Error(err))
        });
})

module.exports = router
