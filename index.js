module.exports = {
    // Base Class
    Client: require('./src/client.js'),

    Profile: require('./src/profile.js'),
    Account: require('./src/account.js'),
    Stats: require('./src/stats.js'),
    Match: require('./src/match.js'),

    version: require('./package.json').version
};