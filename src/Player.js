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

        /**
         * API id of the player
         * @type {string}
         */
        this.id = content.id;

        /**
         * Attributes of the Player
         * @type {Object}
         * @property {string} attributes.name PUBG player name
         * @property {string} attributes.shardId Platform-region shard
         * @property {Date} attributes.createdAt Date at which the player account was created
         * @property {string} attributes.patchVersion Version of the game
         * @property {string} attributes.titleId Identifies the studio and game
         */
        this.attributes = {
            name: content.attributes.name,
            shardId: content.attributes.shardId,
            createdAt: new Date(content.attributes.createdAt),
            patchVersion: content.attributes.patchVersion,
            titleId: content.attributes.titleId,
        };

        /**
         * References to resource objects related to this player
         * @type {Object}
         * @property {Array<Asset>} relationships.assets NOT IN API YET: Array of all assets of the player
         * @property {Array<Match>} relationships.matches Array of empty Match classes, will need `.fetch()`
         */
        this.relationships = {
            assets: content.relationships.assets.data,
            matches: content.relationships.matches.data.map(m => new Match(m.id, this.client)),
        };
    }

    getPlayerStats(season) {
        return this.client.getPlayerStats(this, season);
    }
}

module.exports = Player;
