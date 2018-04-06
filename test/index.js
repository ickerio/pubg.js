const pubg = require('../');

const client = new pubg.Client(process.env.PUBG_KEY);

console.log(`Testing version ${pubg.version} of pubg.js`);

client.getPlayer({ name: 'NAME THAT WONT EXIST 1233166' })
    .catch(() => console.log('test 1 passed'));

client.getStatus()
    .then(() => console.log('test 1 passed'))

client.getMatch('not an id')
    .catch(() => console.log('test 1 passed'));