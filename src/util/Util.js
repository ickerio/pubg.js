const Constants = require('./Constants');

class Util {
  constructor() {
    throw new Error(
      `The ${this.constructor.name} class may not be instantiated.`
    );
  }
  static constructURL(endpoint, shard) {
    return shard
      ? this.verifyShard(shard)
        ? `${Constants.BASE_URL}/shards/${shard}/${endpoint}`
        : undefined
      : `${Constants.BASE_URL}/${endpoint}`;
  }

  static verifyShard(shard) {
    // eslint-disable-line no-unused-vars
    return Constants.SHARDS.includes(shard);
  }

  static async asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }
}

module.exports = Util;
