const controller = require('../../../routers/usersSignup/controller')
const httpMocks = require('node-mocks-http')

describe('usersSignup controller', ()=>{
    it('new controller()', ()=>{

        const req = httpMocks.createRequest({method: 'GET',url: '/'})
        const res = httpMocks.createResponse()
        req.body = {username: 'mockUsername'}

        const c = new controller(req, res)

        c.validate()
    })
})