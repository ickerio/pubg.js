module.exports = {
    // Base Class
    Client: require('./client.js'),

    Profile: require('./profile.js'),
    Account: require('./account.js'),
    Stats: require('./stats.js'),
    Match: require('./match.js'),

    version: require('../package.json').version
};