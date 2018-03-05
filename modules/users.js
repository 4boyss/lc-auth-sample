var _request = require('../lib/_request');

const signUp = (username, password, payload = {}) => {
    if(!username || !password)
        return Promise.reject(new Error('Invalide null username, password'))

    const {email} = payload
    return (new AV.User()).signUp({username, password, email})
}

// Problem of AV.User().Login() function
const login =(username, password) => {
    return _request('login', {username, password})
}

const fetchMe = (session) => {
    return _request('users/me', {session})
}

module.exports = {signUp, login, fetchMe}