var APP_ID = process.env.LC_APP_ID
var APP_KEY = process.env.LC_APP_KEY

global.AV = require('leancloud-storage/live-query')

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

console.log('AV is inited ...')
