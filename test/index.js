const pubgClient = require('../');

const client = new pubgClient(process.env.PUBG_KEY);

client.getProfile('ickerio').then(profile => {

    profile.getStats({
        region: 'oc',
        season: '2017-pre4',
        match: 'solo'
    }).getItem('RoundsPlayed');

});