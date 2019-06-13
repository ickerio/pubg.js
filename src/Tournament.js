const Match = require('./matches/Match');

/**
 * An API returned tournament object
 * @class Tournament
 */
class Tournament {
    constructor(content, client) {
        /**
         * The client that created the Player
         * @type {Client}
         */
        Object.defineProperty(this, 'client', { value: client });

        this.full = !!content.relationships;

        /**
         * Tournament ID
         * @type {string}
         */
        this.id = content.id;
        /**
         * Relationships of the Tournament
         * @type {Object}
         * @property {Array<Match>} relationships.matches Array of empty Match classes, will need `.fetch()`
         */
        this.relationships = {
            matches: this.full ?
                content.relationships.matches.data.map(
                    m => new Match(m.id, this.client)
                ) :
                [],
        };
    }

    /**
     * Fetches the full tournament with all matches included
     * @returns {Promise<Match>}
     * @memberof Match
     */
    fetch() {
        return this.client.getTournament(this.id);
    }
}

module.exports = Tournament;
