const {signUp, login, fetchMe} = require('../../modules/users')

const randomString = ()=> Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const mockUsername = `mockUsername-${randomString()}`
const mockPassword = `mockPassword-${randomString()}`
let createdId, sessionToken
let _user

describe('usersSignup controller', ()=>{
    beforeAll(()=>{
        require('../../lib/init')
    })

    afterAll(()=>{
        // console.log('AV.User._currentUser: ', AV.User._currentUser)
    })

    it('signUp()', (done)=>{
        signUp(mockUsername, mockPassword).then((_u)=>{
            done()
        })
    })

    it('login()', (done)=>{
        login(mockUsername, mockPassword).then((res)=>{
            expect(mockUsername).toBe(res.username)
            expect(typeof res.sessionToken).toBe('string')
            expect(typeof res.objectId).toBe('string')
            createdId = res.objectId
            sessionToken = res.sessionToken
            done()
        })
    })

    it('fetchMe()', ()=>{
        fetchMe(sessionToken).then((res)=>{
            expect(mockUsername).toBe(res.username)
            expect(res.objectId).toBe(createdId)
            done()
        })
    })
})