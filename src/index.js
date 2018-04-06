module.exports = {
    // Base Class
    Client: require('./Client'),

    Match: require('./matches/Match'),
    Player: require('./Player'),

    version: require('../package.json').version,
};
