function encrypt (req) {
    const {ip, userAgent} = req.normalizer
    console.log('ip: ', ip)
    console.log('userAgent: ', userAgent)
    return require('./crypter').encrypt(ip)
}

function decrypt (text = '') {
//   var decipher = crypto.createDecipher(algorithm, password)
//   var dec = decipher.update(text, 'hex', 'utf8')
//   dec += decipher.final('utf8')
//   return dec
}

module.exports = {encrypt, decrypt}
