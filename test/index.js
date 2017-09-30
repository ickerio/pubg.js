const pubgClient = require('../');

const client = new pubgClient('c9ede33c-74d7-4c4a-978c-2a4807da2cd7');
client.getProfile('ickerio').then(p => {

    p.getStats({
        region: 'oc',
        season: '2017-pre4',
        match: 'solo'
    });
});