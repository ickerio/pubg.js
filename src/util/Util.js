const Constants = require('./Constants');

class Util {
    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
    }
    static constructURL(end, shard) {
        return shard ? this.verifyShard(shard) ? `${Constants.BASE_URL}/shards/${shard}/${end}` : false : `${Constants.BASE_URL}/${end}`;
    }

    static verifyShard(shard) { // eslint-disable-line no-unused-vars
        return Constants.SHARDS.includes(shard);
    }
}

module.exports = Util;
