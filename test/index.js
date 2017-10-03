const pubgClient = require('../');

const client = new pubgClient(process.env.PUBG_KEY || 'c9ede33c-74d7-4c4a-978c-2a4807da2cd7');

console.log(`Testing version ${client.version} of pubg.js`);

client.getProfile('ickerio')
    .then(() => console.log('Test 1: Success'));

client.getProfile('ickerio')
    .then(profile => {
        profile.getStats({
            region: 'oc',
            season: '2017-pre4',
            match: 'solo'
        }).getItem('RoundsPlayed');
    })
    .then(() => console.log('Test 2: Successs'));

client.getProfile('usernameThatDefinatelyWontExist372')
    .catch(() => console.log('Test 3: Success'));

client.getAccount('76561198114629752')
    .then(() => console.log('Test 4: Success'));

client.getAccount('12343211231313213123123123')
    .catch(() => console.log('Test 5: Success'));