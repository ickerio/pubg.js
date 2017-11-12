const pubg = require('pubg.js');

// Make sure you set your own key, otherwise it won't work!
// Check the README for more info on obtaining your key.

const client = new pubg.Client('yourKey');

client.getProfile('ickerio')
    .then(profile => {
        const myRank = profile.getStats({
            region: 'oc',
            season: '2017-pre6',
            match: 'solo'
        }).getItem('Rating').rank;

        console.log(`My ranking in solo, oceania this season is ${myRank}`);
    })
    .catch(console.error);