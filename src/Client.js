const snekfetch = require('snekfetch');
const Package = require('../package.json');

const Util = require('./util/Util');
const Player = require('./Player');
const Match = require('./matches/Match');
const Status = require('./Status');
const Season = require('./Season');
const PlayerSeason = require('./playerseason/PlayerSeason');
/**
 * The main hub for interacting with the pubg api, and starting point for any api instance
 * @class Client
 * @param {string} key PUBG app api token
 * @param {string} [defaultShard='pc-oc'] Default shard to use if none provided in methods
 */
class Client {
    constructor(key, defaultShard = 'pc-oc') {
        if (!key) {
            throw new Error('No API key passed.');
        }

        /**
         * The api key passed into the client
         * @type {string}
         */
        this.key = key;

        /**
         * The default shard for the client if none provided
         */
        this.defaultShard = defaultShard;
    }

    /**
     * Get player by the given id or name
     * @param {Object} args Specify what player to get
     * * {id: ['id1', 'id2']}
     * * {id: 'id'}
     * * {name: 'name'}
     * * {name: ['name1', 'name2']}
     * @param {string} [shard=this.defaultShard] The server shard to send the request to
     * @returns {Promise<Array<Player>>|Promise<Player>}
     * @memberof Client
     */
    getPlayer(args, shard = this.defaultShard) {
        if (typeof args !== 'object' || typeof shard !== 'string') throw new Error('Requires (object, !string)');

        if (args.id) {
            return this._baseRequest({ endpoint: Array.isArray(args.id) ? 'players' : `players/${args.id}`, shard, query: Array.isArray(args.id) ? { 'filter[playerIds]': args.id.join(',') } : {} })
                .then(players => Array.isArray(players.data) ? players.data.length === 1 ? new Player(players.data[0], this) : players.data.map(p => new Player(p, this)) : new Player(players.data, this))
                .catch(e => Promise.reject(e.body.errors));
        }
        if (args.name) {
            return this._baseRequest({ endpoint: 'players', shard, query: { 'filter[playerNames]': Array.isArray(args.name) ? args.name.join(',') : args.name } })
                .then(players => Array.isArray(players.data) ? players.data.length === 1 ? new Player(players.data[0], this) : players.data.map(p => new Player(p, this)) : new Player(players.data, this))
                .catch(e => Promise.reject(e.body.errors));
        }
        return Promise.reject(new Error('Invalid use of <Client>.getPlayer()'));
    }

    /**
     * Get an array of all seasons of the shard
     * @param {string} [shard=this.defaultShard] The server shard to send the request to
     * @returns {Promise<Array<Season>>}
     * @memberof Client
     */
    getSeasons(shard = this.defaultShard) {
        return this._baseRequest({ endpoint: 'seasons', shard })
            .then(seasons => seasons.data.map(s => new Season(s, this)));
    }

    /**
     * Get a player season object
     * @param {(string|Player)} player The player of the player season
     * @param {(string|Season)} season The season of the player season
     * @param {string} [shard=player.attributes.shardId|this.defaultShard] The server shard to send the request to
     * @returns {Promise<PlayerSeason>}
     * @memberof Client
     */
    getPlayerSeason(player, season, shard) {
        return this._baseRequest({ endpoint: `players/${player instanceof Player ? player.id : player}/seasons/${season instanceof Season ? season.id : season}`, shard: player instanceof Player ? player.attributes.shardId : shard || this.defaultShard })
            .then(ps => new PlayerSeason(ps.data));
    }

    /**
     * Get a match from a match id
     * @param {string} id Id of the match to get
     * @param {string} [shard=this.defaultShard] The server shard to send the request to
     * @returns {Promise<Match>}
     * @memberof Client
     */
    getMatch(id, shard = this.defaultShard) {
        if (typeof id !== 'string' || typeof shard !== 'string') throw new Error('Requires (string, !string)');
        return this._baseRequest({ endpoint: `matches/${id}`, shard })
            .then(match => new Match(match.data, this, match.included))
            .catch(e => Promise.reject(e.body.errors));
    }

    /**
     * Gets the status of the api
     * @returns {Promise<Status>}
     * @memberof Client
     */
    getStatus() {
        return this._baseRequest({ endpoint: 'status' })
            .then(status => new Status(status.data))
            .catch(e => Promise.reject(e.body.errors));
    }

    /**
     * Gets the status of the api
     * @param {Date} [createdAt] The starting search date for the matches
     * @param {string} [shard=this.defaultShard] The server shard to send the request to
     * @returns {Promise<Array<Match>>}
     * @memberof Client
     */
    getSamples(createdAt, shard = this.defaultShard) {
        return this._baseRequest({ endpoint: 'samples', shard, query: createdAt instanceof Date ? { 'filter[createdAt]': createdAt.toISOString() } : {} })
            .then(samples => samples.data.relationships.matches.data.map(m => new Match(m.id, this)))
            .catch(e => Promise.reject(e.body.errors));
    }

    /**
     * Fetches telemetry data object
     * @param {string} url URL of the telemetry object
     * @returns {Promise<Object>}
     * @memberof Client
     */
    getTelemetry(url) {
        if (!url || typeof url !== 'string') throw new Error('Requires (string)');
        return this._baseRequest({ url });
    }

    /**
     * Carries out a basic http request to the api
     * @private
     * @param {Object} options Object describing request
     * @param {string} options.endpoint Endpoint to hit of the api
     * @param {string} options.shard The server shard to send the request to
     * @param {Object} [options.query={}] Snekfetch options
     * @returns {Promise<Object>}
     * @memberof Client
     */
    _baseRequest(options = {}) {
        const url = options.url || Util.constructURL(options.endpoint, options.shard);
        if (!url) throw new Error('Invalid shard');
        return snekfetch.get(url)
            .set(this._headers)
            .query(options.query || {})
            .then(r => r.body);
    }


    get _headers() {
        return {
            'User-Agent': `pubg.js v${Package.version} (${Package.homepage})`,
            accept: 'application/json',
            Authorization: `Bearer ${this.key}`,
        };
    }
}

module.exports = Client;
