const pubgClient = require('../');

const client = new pubgClient(process.env.PUBG_KEY);
client.getProfile('ickerio').then(p => {

    const myStat = p.getStats({
        region: 'oc',
        season: '2017-pre4',
        match: 'solo'
    });
    console.log(myStat);
});