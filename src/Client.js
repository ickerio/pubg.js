const axios = require('axios');
const _ = require('lodash');

const Package = require('../package.json');
const Util = require('./util/Util');
const Player = require('./Player');
const Match = require('./matches/Match');
const Status = require('./Status');
const Season = require('./Season');
const Tournament = require('./Tournament');
const PlayerSeason = require('./playerseason/PlayerSeason');
const { GAME_MODES } = require('./util/Constants');
/**
 * The main hub for interacting with the pubg api, and starting point for any api instance
 * @class Client
 * @param {string} key PUBG app api token
 * @param {string} [defaultShard='steam'] Default shard to use if none provided in methods
 */
class Client {
    constructor(key, defaultShard = 'steam') {
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
            return this._baseRequest({
                endpoint: Array.isArray(args.id) ?
                    'players' :
                    `players/${args.id}`,
                shard,
                params: Array.isArray(args.id) ?
                    { 'filter[playerIds]': args.id.join(',') } :
                    {},
            })
                .then(players =>
                    Array.isArray(players.data) ?
                        players.data.length === 1 ?
                            new Player(players.data[0], this) :
                            players.data.map(p => new Player(p, this)) :
                        new Player(players.data, this)
                )
                .catch(e => {
                    throw e.message;
                });
        }
        if (args.name) {
            return this._baseRequest({
                endpoint: 'players',
                shard,
                params: {
                    'filter[playerNames]': Array.isArray(args.name) ?
                        args.name.join(',') :
                        args.name,
                },
            })
                .then(players =>
                    Array.isArray(players.data) ?
                        players.data.length === 1 ?
                            new Player(players.data[0], this) :
                            players.data.map(p => new Player(p, this)) :
                        new Player(players.data, this)
                )
                .catch(e => {
                    throw e.message;
                });
        }
        throw new Error('Invalid use of <Client>.getPlayer()');
    }

    /**
     * Get an array of all seasons of the shard
     * @param {string} [shard=this.defaultShard] The server shard to send the request to
     * @returns {Promise<Array<Season>>}
     * @memberof Client
     */
    getSeasons(shard = this.defaultShard) {
        return this._baseRequest({ endpoint: 'seasons', shard })
            .then(seasons => seasons.data.map(s => new Season(s, this)))
            .catch(e => {
                throw e.message;
            });
    }

    /**
     * Get a Season Object with the info of the current season
     * @param {string} [shard=this.defaultShard] The server shard to send the request to
     * @returns {Promise<Season>}
     * @memberof Client} shard
     */
    getCurrentSeason(shard = this.defaultShard) {
        return this._baseRequest({ endpoint: 'seasons', shard })
            .then(
                seasons =>
                    new Season(
                        seasons.data.find(
                            season => season.attributes.isCurrentSeason
                        ),
                        this
                    )
            )
            .catch(e => {
                throw e.message;
            });
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
        return this._baseRequest({
            endpoint: `players/${
                player instanceof Player ? player.id : player
            }/seasons/${season instanceof Season ? season.id : season}`,
            shard:
                player instanceof Player ?
                    player.attributes.shardId :
                    shard || this.defaultShard,
        })
            .then(ps => {
                if (player instanceof Player) ps.data.relationships.player = new Player(_.omit(player, ['relationships']));

                return new PlayerSeason(ps.data);
            })
            .catch(e => {
                throw e.message;
            });
    }

    /**
     * Get an array of up to 10 player season objects.
     * For PUBG API calls optimization, method will use the regular getPlayerSeason() function when fetching for less than 6 players.
     * This function is meant to retrieve more than one Player Season. For a single player use getPlayerSeason
     * @param {Object} args Specify what player to get
     * * {ids: ['id1', 'id2']}
     * * {names: ['name1', 'name2']}
     * * {players: ['name1', 'name2']}
     * @param {(string|Season)} season The season of the player season
     * @param {string} [shard=this.defaultShard] The server shard to send the request to
     * @returns {Promise<Array<PlayerSeason>>}
     * @memberof Client
     */
    async getManyPlayerSeason(args, season, shard) {
        if (typeof args !== 'object' || typeof season !== 'string') throw new Error('Requires (object, string, !string, !string)');

        if (!args.ids && !args.names && !args.players) throw new Error('Invalid use of <Client>.getManyPlayerSeason()');

        let playerCount = args.ids ? args.ids.length : args.names ? args.names.length : args.players.length;
        if (playerCount > 10) {
            throw new Error('<Client>.getManyPlayerSeason() can only fetch up to 10 players.');
        }
        const playersArray = args.ids ?
            await this.getPlayer({ id: args.ids }, shard) :
            args.names ?
                await this.getPlayer({ name: args.names }, shard) :
                args.players;

        if (playersArray.length < 6) {
            return Promise.all(
                playersArray.map(player =>
                    this.getPlayerSeason(player, season, shard)
                )
            )
                .then(psArray => psArray)
                .catch(e => { throw e.message; });
        } else {
            let gameModeStats = {};

            await Promise.all(GAME_MODES.map(mode => this._baseRequest({
                endpoint: `seasons/${season}/gameMode/${mode}/players`,
                params: { 'filter[playerIds]': playersArray.map(p => p.id).join() },
                shard: shard || this.defaultShard,
            }).then(psArray => { gameModeStats[mode] = psArray.data; })))
                .catch(e => { throw e.message; });

            return playersArray.map(player => {
                let playerSeason = {};
                GAME_MODES.forEach(mode => {
                    _.merge(
                        playerSeason,
                        gameModeStats[mode].find(ps => ps.relationships.player.data.id === player.id)
                    );
                });
                playerSeason.relationships.player = player;
                return new PlayerSeason(playerSeason);
            });
        }
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
            .catch(e => {
                throw e.message;
            });
    }

    /**
     * Gets the status of the api
     * @returns {Promise<Status>}
     * @memberof Client
     */
    getStatus() {
        return this._baseRequest({ endpoint: 'status' })
            .then(status => new Status(status.data))
            .catch(e => {
                throw e.message;
            });
    }

    /**
     * Gets a list of all tournaments
     * @returns {Promise<Array<Tournament>>}
     * @memberof Client
     */
    getTournaments() {
        return this._baseRequest({ endpoint: 'tournaments' })
            .then(tournaments =>
                tournaments.data.map(t => new Tournament(t, this))
            )
            .catch(e => {
                throw e.message;
            });
    }

    /**
     * Gets the tournament with the matching id
     * @param {string} id Tournament ID
     * @returns {Promise<Tournament>}
     * @memberof Client
     */
    getTournament(id) {
        return this._baseRequest({ endpoint: `tournaments/${id}` })
            .then(tournament => new Tournament(tournament.data))
            .catch(e => {
                throw e.message;
            });
    }

    /**
     * Gets a list of all past matches from the api
     * @param {Date} [createdAt] The starting search date for the matches
     * @param {string} [shard=this.defaultShard] The server shard to send the request to
     * @returns {Promise<Array<Match>>}
     * @memberof Client
     */
    getSamples(createdAt, shard = this.defaultShard) {
        return this._baseRequest({
            endpoint: 'samples',
            shard,
            params:
                createdAt instanceof Date ?
                    { 'filter[createdAt]': createdAt.toISOString() } :
                    {},
        })
            .then(samples =>
                samples.data.relationships.matches.data.map(
                    m => new Match(m.id, this)
                )
            )
            .catch(e => {
                throw e.message;
            });
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
     * @returns {Promise<Object>}
     * @memberof Client
     */
    _baseRequest(options = {}) {
        const url =
            options.url || Util.constructURL(options.endpoint, options.shard);
        if (!url) throw new Error('Invalid shard');
        return axios
            .get(url, {
                headers: this._headers,
                params: options.params,
                timeout: 5000,
            })
            .then(r => r.data)
            .catch(e => {
                let error = new Error();
                error.message = e.response ?
                    { status: e.response.status, message: e.response.statusText } :
                    e.request ?
                        { status: '500', message: 'Internal Server Error' } :
                        e.message;
                throw error;
            });
    }

    get _headers() {
        return {
            'User-Agent': `pubg.js v${Package.version} (${Package.homepage})`,
            accept: 'application/vnd.api+json',
            Authorization: `Bearer ${this.key}`,
        };
    }
}

module.exports = Client;
