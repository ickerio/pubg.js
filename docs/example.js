const pubg = require('pubg.js');

const client = new pubg.Client('api token');

// Get the most recent match, of the first player returned in the search
client.getPlayer({ name: 'QuangPercy' })
    .then(p => p[0].relationships.matches[0]);
    // => Match class

client.getMatch('match id here')
    .then(match => console.log(match));
    // => Match class

client.getStatus()
    .then(m => console.log('api is online', m))
    .catch(e => console.log('api is offline', e))
