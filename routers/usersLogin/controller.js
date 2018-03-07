const {login} = require('../../modules/users')
const {setB,setU} = require('../../lib/cookies')

var controller = function(req, res) {
    this.req = req
    this.res = res
}

controller.prototype.validate = function(){
    const {username = null, password = null, email = null} = this.req.body
    const res = this.res
    const _u = username || email

    return login(_u, password)
        .then((u) => {
            const message = 'Welcome back.'
            const title = `Login as  ${_u}`
            res.locals.data = {message, title, email, session: u.sessionToken}
            return this.render('/success')
        }, (err) => {
            console.log('err: ', err)
            return res.status(500).json(new Error(err))
        });
}


controller.prototype.preRender = function(){
    return new Promise((resolve, reject)=>{
        console.log( '-=-=-= preRender -=-=-=')
        const res = this.res
        const req = this.req
        setB(req, res)
        setU(req, res)
        return resolve()
    })
}

controller.prototype.render = function(path){
    return this.preRender().then(
        ()=> this.res.render(path)
    )
}

module.exports = controller
