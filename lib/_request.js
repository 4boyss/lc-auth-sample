var request = require('request');
const appId = process.env.LC_APP_ID
const appKey = process.env.LC_APP_KEY

const genHeaders = (body) => {
    if(!body.session)
        return {
            "content-type": "application/json",
            "X-LC-Id": appId,
            "X-LC-Key": appKey
        }

    return {
        "content-type": "application/json",
        "X-LC-Id": appId,
        "X-LC-Key": appKey,
        "X-LC-Session": body.session
    }
}

module.exports = (path, body) => new Promise((resolve, reject)=>{
    request({
        url: `https://7lum301k.api.lncld.net/1.1/${path}`,
        json: true,
        headers: genHeaders(body),
        body
    }, function(error, response, body) {
        if(error) return reject(error)

        return resolve(body)
    });
})
  