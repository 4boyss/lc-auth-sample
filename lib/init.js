const appId = process.env.LC_APP_ID
const appKey = process.env.LC_APP_KEY
const masterKey = process.env.LC_APP_MASTER
const disableCurrentUser = false
let keysObj

if(!appId || !appKey) throw(new Error('APP Keys is not provided'))

if(masterKey) 
  keysObj = {appId,appKey,masterKey, disableCurrentUser}
else
  keysObj = {appId,appKey, disableCurrentUser}

global.AV = require('leancloud-storage/live-query')

AV.init(keysObj);

console.log('AV is inited ...')
