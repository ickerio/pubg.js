const pubgClient = require('pubg.js');

// Make sure you set your own key, otherwise it won't work!
// Check the README for more info on obtaining your key.

const client = new pubgClient('yourKey');

client.getProfile('ickerio')
    .then(profile => {
        const myRoundsPlayed = profile.getStats({
            region: 'oc',
            season: '2017-pre4',
            match: 'solo'
        }).getItem('RoundsPlayed');

        console.log(myRoundsPlayed);
    })
    .catch(console.error);