module.exports = {
    // Base Class
    Client: require('./Client'),

    Profile: require('./Profile'),
    Account: require('./Account'),
    Stats: require('./Stats'),
    Match: require('./Match'),

    version: require('../package.json').version
};