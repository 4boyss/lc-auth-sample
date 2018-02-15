const express = require('express')
const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('/signup')
})

router.post('/signup', (req, res) => {
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
