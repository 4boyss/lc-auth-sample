

var controller = function(req, res) {
    this.req = req
    this.res = res
}

controller.prototype.validate = function(){
    const {username = null, password = null, email = null} = this.req.body
    const res = this.res
    const _u = username || email

    return new AV.User()
        .signUp({username: _u, password, email})
        .then((u) => {
            const message = 'You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message. \n\nPlease verify your email.'
            const title = `Thx for signup ${_u}`
            res.locals.data = {message, title, email}
            return res.render('/success')
        }, (err) => {
            return res.status(500).json(new Error(err))
        });
}

module.exports = controller
