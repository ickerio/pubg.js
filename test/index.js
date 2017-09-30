const pubgClient = require('../');

const client = new pubgClient('yourKey');
client.getProfile('ickerio').then(p => {

    const jeff = p.getStats({
        region: 'oc',
        season: '2017-pre4',
        match: 'solo'
    });
    console.log(jeff);
});