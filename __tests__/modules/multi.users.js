const {signUp, login, fetchMe} = require('../../modules/users')

const randomString = ()=> Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const mockUsername1 = `mockUsername-1-${randomString()}`
const mockPassword1 = `mockPassword-1-${randomString()}`
const mockUsername2 = `mockUsername-2-${randomString()}`
const mockPassword2 = `mockPassword-2-${randomString()}`
let createdId1, sessionToken1
let createdId2, sessionToken2
let _user

describe('usersSignup controller', ()=>{
    beforeAll((done)=>{
        require('../../lib/init')

        return Promise.all([
            signUp(mockUsername1, mockPassword1),
            signUp(mockUsername2, mockPassword2)
        ]).then( result=>{
            createdId1 = result[0].id
            sessionToken1 = result[0]._sessionToken
            createdId2 = result[1].id
            sessionToken2 = result[1]._sessionToken
            return done()
        })
    })

    afterAll(()=>{
        // console.log('AV.User._currentUser: ', AV.User._currentUser)
    })

    it('1st login()', (done)=>{
        return login(mockUsername1, mockPassword1).then((res)=>{
            expect(mockUsername1).toBe(res.username)
            done()
        })
    })

    it('1st fetchMe()', (done)=>{
        return fetchMe(sessionToken1).then((res)=>{
            expect(mockUsername1).toBe(res.username)
            expect(createdId1).toBe(res.objectId)
            return done()
        })
    })

    it('2nd login()', (done)=>{
        return login(mockUsername2, mockPassword2).then((res)=>{
            expect(mockUsername2).toBe(res.username)
            return done()
        })
    })

    it('2nd fetchMe()', (done)=>{
        return fetchMe(sessionToken2).then((res)=>{
            expect(mockUsername2).toBe(res.username)
            expect(createdId2).toBe(res.objectId)
            return done()
        })
    })
})