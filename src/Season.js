/**
 * An API returned Season object
 * @class Season
 */
class Season {
    constructor(content, client) {
        /**
         * The client that created the Player
         * @type {Client}
         */
        Object.defineProperty(this, 'client', { value: client });

        /**
         * Season  ID
         * @type {string}
         */
        this.id = content.id;

        /**
         * Attributes of the Player
         * @type {Object}
         * @property {boolean} attributes.isCurrentSeason Indicates if the season is active
         * @property {boolean} attributes.shardId Indicates if the season is not active
         */
        this.attributes = {
            isCurrentSeason: content.attributes.isCurrentSeason,
            isOffSeason: content.attributes.isOffseason,
        };
    }

    getPlayerStats(player, shard) {
        return this.client.getPlayerStats(player, this, shard);
    }
}

module.exports = Season;
