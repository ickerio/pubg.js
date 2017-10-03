const pubgClient = require('../');

const client = new pubgClient(process.env.PUBG_KEY);

console.log(`Testing version ${client.version} of pubg.js`);

// Test 1: getProfile
client.getProfile('ickerio')
    .then(() => console.log('Test 1: Success'));

// Test 2: getStats of profile
client.getProfile('ickerio').then(profile => {
    profile.getStats({
        region: 'oc',
        season: '2017-pre4',
        match: 'solo'
    }).getItem('RoundsPlayed');
}).then(() => console.log('Test 2: Successs'));

// Test 3: getAccount
client.getAccount('76561198114629752')
    .then(() => console.log('Test 3: Success'));