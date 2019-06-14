const Match = require('./matches/Match');
/**
 * An API returned player object
 * @class Player
 */
class Player {
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
         * API id of the player
         * @type {string}
         */
        this.id = content.id;

        /**
         * If the player contains full data or needs `.fetch()`
         * @type {boolean}
         */
        this.full = false;

        /**
         * Attributes of the Player
         * @type {Object}
         * @property {string} attributes.name PUBG player name
         * @property {string} attributes.shardId Platform-region shard
         * @property {string} attributes.patchVersion Version of the game
         * @property {string} attributes.titleId Identifies the studio and game
         */
        this.attributes = {
            name: content.attributes.name,
            shardId: content.attributes.shardId,
            patchVersion: content.attributes.patchVersion,
            titleId: content.attributes.titleId,
        };

        /**
         * References to resource objects related to this player
         * @type {Object}
         * @property {Array<Asset>} relationships.assets NOT IN API YET: Array of all assets of the player
         * @property {Array<Match>} relationships.matches Array of empty Match classes, will need `.fetch()`
         */
        if (content.relationships) {
            this.relationships = {
                assets: content.relationships.assets.data,
                matches: content.relationships.matches.data.map(
                    m => new Match(m.id, this.client)
                ),
            };
            this.full = true;
        }
    }

    /**
     * Get a player season object
     * @param {(string|Season)} season The season of the player season
     * @param {string} [shard=this.attributes.shardId] The shard of the player season
     * @returns {Promise<PlayerSeason>}
     * @memberof Player
     */
    getPlayerSeason(season, shard = this.attributes.shardId) {
        return this.client.getPlayerSeason(this, season, shard);
    }

    /**
     * Fetches the full match
     * @param {string} [shard=this.client.defaultShard] ShardId to fetch the player from
     * @returns {Promise<Match>}
     * @memberof Player
     */
    fetch(shard = this.client.defaultShard) {
        return this.client.getPlayer({ id: this.id }, shard);
    }
}

module.exports = Player;
