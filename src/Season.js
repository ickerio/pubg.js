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

        if (typeof content === 'string') {
            this.id = content;
            this.full = false;
            return;
        }

        /**
         * Season  ID
         * @type {string}
         */
        this.id = content.id;

        /**
         * If the season contains full data, like it's attributes
         * @type {boolean}
         */
        this.full = true;

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

    /**
     * Get a player season object
     * @param {(string|Player)} player The player of the player season
     * @param {string} [shard=player.attributes.shardId|this.defaultShard] The server shard to send the request to
     * @returns {Promise<PlayerSeason>}
     * @memberof Season
     */
    getPlayerSeason(player, shard) {
        return this.client.getPlayerSeason(player, this, shard);
    }
}

module.exports = Season;
