window["pubg"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Asset = __webpack_require__(4);
const Roster = __webpack_require__(5);

/**
 * Match objects contain the results of a completed match such as the game mode played, duration, and which players participated
 * @class Match
 */
class Match {
    constructor(content, client, included) {
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
         * If the match contains full data or needs `.fetch()`
         * @type {boolean}
         */
        this.full = true;

        /**
         * Attributes of the Match
         * @type {Object}
         * @property {Date} attributes.createdAt Time this match object was stored in the API
         * @property {number} attributes.duration Length of the match
         * @property {string} attributes.gameMode Game mode played
         * * duo, duo-fpp, solo, solo-fpp, squad, squad-fpp
         * @property {string} attributes.mapName Map name
         * * Desert_Main, Erangel_Main
         * @property {boolean} isCustomMatch True if the match is a custom match
         * @property {string} attributes.patchVersion N/A
         * @property {string} attributes.shardId Platform-region shard
         * @property {Object} attributes.stats N/A
         * @property {Object} attributes.tags N/A
         * @property {string} attributes.titleId Identifies the studio and game
         */
        this.attributes = {
            createdAt: new Date(content.attributes.createdAt),
            duration: content.attributes.duration,
            gameMode: content.attributes.gameMode,
            mapName: content.attributes.mapName,
            isCustomMatch: content.attributes.isCustomMatch,
            patchVersion: content.attributes.patchVersion,
            shardId: content.attributes.shardId,
            stats: content.attributes.stats,
            tags: content.attributes.tags,
            titleId: content.attributes.titleId,
        };

        /**
         * Relations of the Match
         * @type {Object}
         * @property {Array<Asset>} relationships.assets Array of all referenced assets
         * @property {Array<Roster>} relationships.rosters Array of all referenced rosters
         */
        this.relationships = {
            assets: content.relationships.assets.data.map(p => new Asset(included.find(i => i.type === 'asset' && i.id === p.id), included)),
            // eslint-disable-next-line
            rosters: content.relationships.rosters.data.map(p => new Roster(included.find(i => i.type === 'roster' && i.id === p.id), included)),
        };
    }

    /**
     * Fetches the full match
     * @returns {Promise<Match>}
     * @memberof Match
     */
    fetch() {
        return this.client.getMatch(this.id);
    }

    /**
     * Fetches telemetry data of the match
     * @returns {Promise<Object>}
     * @memberof Match
     */
    fetchTelemetry() {
        return this.client.getTelemetry(this.relationships.assets[0].attributes.URL);
    }
}

module.exports = Match;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Match = __webpack_require__(0);
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
        this.full = true;

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
        this.relationships = {
            assets: content.relationships.assets.data,
            matches: content.relationships.matches.data.map(m => new Match(m.id, this.client)),
        };
    }

    /**
     * Get a player season object
     * @param {(string|Season)} season The season of the player season
     * @returns {Promise<PlayerSeason>}
     * @memberof Player
     */
    getPlayerSeason(season) {
        return this.client.getPlayerSeason(this, season);
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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"name":"pubg.js","version":"3.6.0","description":"A powerful Playerunknown's Battlegrounds JavaScript API Wrapper","main":"src/index.js","scripts":{"test":"npm run lint && npm run tests","lint":"eslint src *.js","tests":"node test/index.js","webpack":"./node_modules/.bin/webpack --config webpack.config.js","docs":"./node_modules/.bin/jsdoc src src/matches src/playerseason README.md -t ./node_modules/minami && echo pubg.js.org > ./out/CNAME"},"repository":{"type":"git","url":"git+https://github.com/ickerio/pubg.js.git"},"keywords":["pubg","api","wrapper"],"author":"ickerio","license":"ISC","bugs":{"url":"https://github.com/ickerio/pubg.js/issues"},"runkitExampleFilename":"docs/example.js","homepage":"https://github.com/ickerio/pubg.js#readme","dependencies":{"snekfetch":"^4.0.0"},"devDependencies":{"eslint":"^4.19.1","jsdoc":"^3.5.5","minami":"^1.2.3","uglifyjs-webpack-plugin":"^1.2.5","webpack":"^3.11.0"}}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

class Asset {
    constructor(content) {
        this.id = content.id;
        this.attributes = {
            URL: content.attributes.URL,
            createdAt: content.attributes.createdAt,
            description: content.attributes.description,
            name: content.attributes.name,
        };
    }
}

module.exports = Asset;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Participant = __webpack_require__(6);

class Roster {
    constructor(content, included) {
        this.id = content.id;
        this.attributes = {
            shardId: content.attributes.shardId,
            stats: {
                rank: content.attributes.stats.rank,
                teamId: content.attributes.stats.teamId,
            },
            won: Boolean(content.attributes.won),
        };
        this.relationships = {
            participants: content.relationships.participants.data.map(p => new Participant(included.find(i => i.type === 'participant' && i.id === p.id))),
            team: content.relationships.team.data,
        };
    }
}

module.exports = Roster;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

class Participant {
    constructor(content) {
        this.id = content.id;
        this.attributes = {
            actor: content.attributes.actor,
            shardId: content.attributes.shardId,
            stats: {
                DBNOs: content.attributes.stats.DBNOs,
                assists: content.attributes.stats.assists,
                boosts: content.attributes.stats.boosts,
                damageDealt: content.attributes.stats.damageDealt,
                deathType: content.attributes.stats.deathType,
                headshotKills: content.attributes.stats.headshotKills,
                heals: content.attributes.stats.heals,
                killPlace: content.attributes.stats.killPlace,
                killPoints: content.attributes.stats.killPoints,
                killPointsDelta: content.attributes.stats.killPointsDelta,
                killStreaks: content.attributes.stats.killStreaks,
                kills: content.attributes.stats.kills,
                lastKillPoints: content.attributes.stats.lastKillPoints,
                lastWinPoints: content.attributes.stats.lastWinPoints,
                longestKill: content.attributes.stats.longestKill,
                mostDamage: content.attributes.stats.mostDamage,
                name: content.attributes.stats.name,
                playerId: content.attributes.stats.playerId,
                revives: content.attributes.stats.revives,
                rideDistance: content.attributes.stats.rideDistance,
                roadKills: content.attributes.stats.roadKills,
                swimDistance: content.attributes.stats.swimDistance,
                teamKills: content.attributes.stats.teamKills,
                timeSurvived: content.attributes.stats.timeSurvived,
                vehicleDestroys: content.attributes.stats.vehicleDestroys,
                walkDistance: content.attributes.stats.walkDistance,
                weaponsAcquired: content.attributes.stats.weaponsAcquired,
                winPlace: content.attributes.stats.winPlace,
                winPoints: content.attributes.stats.winPoints,
                winPointsDelta: content.attributes.stats.winPointsDelta,
            },
        };
    }
}

module.exports = Participant;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * An API returned status object
 * @class Status
 */
class Status {
    constructor(content) {
        /**
         * Name or id of the api service
         * @type {string}
         */
        this.id = content.id;
        /**
         * Attributes of the Status
         * @type {Object}
         * @property {Date} attributes.releasedAt Time of the latest version release
         * @property {string} attributes.version Semantic version
         */
        this.attributes = {
            releasedAt: new Date(content.attributes.releasedAt),
            version: content.attributes.version,
        };
    }
}

module.exports = Status;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const GameModeStats = __webpack_require__(9);
const Player = __webpack_require__(1);
const Match = __webpack_require__(0);
const Season = __webpack_require__(2);

/**
 * An API returned player season object
 * @class PlayerSeason
 */
class PlayerSeason {
    constructor(content, client) {
        /**
         * Attributes of the PlayerSeason
         * @type {Object}
         * @property {Object} attributes.gameModeStats An object full of all game mode types being `duo`, `duoFPP`, `solo`, `soloFPP`, `squad`, `squadFPP`
         */
        this.attributes = {
            gameModeStats: {
                duo: new GameModeStats(content.attributes.gameModeStats.duo),
                duoFPP: new GameModeStats(content.attributes.gameModeStats['duo-fpp']),
                solo: new GameModeStats(content.attributes.gameModeStats.solo),
                soloFPP: new GameModeStats(content.attributes.gameModeStats['solo-fpp']),
                squad: new GameModeStats(content.attributes.gameModeStats.squad),
                squadFPP: new GameModeStats(content.attributes.gameModeStats['squad-fpp']),
            },
        };

        /**
         * Relationships of the PlayerSeason
         * @type {Object}
         * @property {Player} relationships.player Player of the PlayerSeason
         * @property {Array<Match>} relationships.matchesSolo All solo matches played during the season by the player
         * @property {Array<Match>} relationships.matchesSoloFPP All solo-fpp matches played during the season by the player
         * @property {Array<Match>} relationships.matchesDuo All duo matches played during the season by the player
         * @property {Array<Match>} relationships.matchesDuoFPP All duo-fpp matches played during the season by the player
         * @property {Array<Match>} relationships.matchesSquad All squad matches played during the season by the player
         * @property {Array<Match>} relationships.matchesSquadFPP All squad-fpp matches played during the season by the player
         * @property {Season} relationships.season All solo matches played during the season by the player
         */
        this.relationships = {
            player: new Player(content.relationships.player.data.id, client),
            matchesSolo: content.relationships.matchesSolo.data.map(m => new Match(m.id, this.client)),
            matchesSoloFPP: content.relationships.matchesSoloFPP.data.map(m => new Match(m.id, this.client)),
            matchesDuo: content.relationships.matchesDuo.data.map(m => new Match(m.id, this.client)),
            matchesDuoFPP: content.relationships.matchesDuoFPP.data.map(m => new Match(m.id, this.client)),
            matchesSquad: content.relationships.matchesSquad.data.map(m => new Match(m.id, this.client)),
            matchesSquadFPP: content.relationships.matchesSquadFPP.data.map(m => new Match(m.id, this.client)),
            season: new Season(content.relationships.season.data.id),
        };
    }
}

module.exports = PlayerSeason;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * An API returned game mode stats
 * @class GameModeStats
 */
class GameModeStats {
    constructor(content) {
        /**
         * Assists
         * @type {Number}
         */
        this.assists = content.assists;

        /**
         * Boosts
         * @type {Number}
         */
        this.boosts = content.boosts;

        /**
         * Downs but not out
         * @type {Number}
         */
        this.dBNOs = content.dBNOs;

        /**
         * Daily kills
         * @type {Number}
         */
        this.dailyKills = content.dailyKills;

        /**
         * Damage dealt
         * @type {Number}
         */
        this.damageDealt = content.damageDealt;

        /**
         * Days
         * @type {string}
         */
        this.days = content.days;

        /**
         * Headshot kills
         * @type {string}
         */
        this.headshotKills = content.headshotKills;

        /**
         * Total HP healed
         * @type {string}
         */
        this.heals = content.heals;

        /**
         * Points from kills
         * @type {string}
         */
        this.killPoints = content.killPoints;

        /**
         * Kills
         * @type {string}
         */
        this.kills = content.kills;

        /**
         * Longest kill
         * @type {string}
         */
        this.longestKill = content.longestKill;

        /**
         * Longest time survived
         * @type {string}
         */
        this.longestTimeSurvived = content.longestTimeSurvived;

        /**
         * Losses
         * @type {string}
         */
        this.losses = content.losses;

        /**
         * Maximum kill streaks
         * @type {string}
         */
        this.maxKillStreaks = content.maxKillStreaks;

        /**
         * Most survival time
         * @type {string}
         */
        this.mostSurvivalTime = content.mostSurvivalTime;

        /**
         * Revives
         * @type {string}
         */
        this.revives = content.revives;

        /**
         * Ride distance
         * @type {string}
         */
        this.rideDistance = content.rideDistance;

        /**
         * Road kills
         * @type {string}
         */
        this.roadKills = content.roadKills;

        /**
         * Round most kills
         * @type {string}
         */
        this.roundMostKills = content.roundMostKills;

        /**
         * Rounds played
         * @type {string}
         */
        this.roundsPlayed = content.roundsPlayed;

        /**
         * Suicides
         * @type {string}
         */
        this.suicides = content.suicides;

        /**
         * Team kills
         * @type {string}
         */
        this.teamKills = content.teamKills;

        /**
         * Time survived
         * @type {string}
         */
        this.timeSurvived = content.timeSurvived;

        /**
         * Top 10s
         * @type {string}
         */
        this.top10s = content.top10s;

        /**
         * Vehicles Destroyed
         * @type {string}
         */
        this.vehicleDestroys = content.vehicleDestroys;

        /**
         * Walk distance
         * @type {string}
         */
        this.walkDistance = content.walkDistance;

        /**
         * Weapon Acquired
         * @type {string}
         */
        this.weaponsAcquired = content.weaponsAcquired;

        /**
         * Weekly kills
         * @type {string}
         */
        this.weeklyKills = content.weeklyKills;

        /**
         * Win points
         * @type {string}
         */
        this.winPoints = content.winPoints;

        /**
         * Win ratio
         * @type {string}
         */
        this.winRatio = content.winRatio;

        /**
         * Wins
         * @type {string}
         */
        this.wins = content.wins;
    }
}

module.exports = GameModeStats;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    Client: __webpack_require__(11),

    Match: __webpack_require__(0),
    Asset: __webpack_require__(4),
    Participant: __webpack_require__(6),
    Roster: __webpack_require__(5),

    GameModeStats: __webpack_require__(9),
    PlayerSeason: __webpack_require__(8),

    Player: __webpack_require__(1),
    Season: __webpack_require__(2),
    Status: __webpack_require__(7),

    version: __webpack_require__(3).version,
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const snekfetch = __webpack_require__(12);
const Package = __webpack_require__(3);

const Util = __webpack_require__(16);
const Player = __webpack_require__(1);
const Match = __webpack_require__(0);
const Status = __webpack_require__(7);
const Season = __webpack_require__(2);
const Tournament = __webpack_require__(18);
const PlayerSeason = __webpack_require__(8);
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
     * Gets a list of all tournaments
     * @returns {Promise<Array<Tournament>>}
     * @memberof Client
     */
    getTournaments() {
        return this._baseRequest({ endpoint: 'tournaments' })
            .then(tournaments => tournaments.data.map(t => new Tournament(t, this)))
            .catch(e => Promise.reject(e));
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
            .catch(e => Promise.reject(e.body.errors));
    }

    /**
     * Gets a list of all past matches from the api
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


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete", function() { return _delete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_js__);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_js___default.a);

const { version } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["version"] = version;

const { METHODS } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["METHODS"] = METHODS;


const { acl } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["acl"] = acl;

const { bind } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["bind"] = bind;

const { checkout } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["checkout"] = checkout;

const { connect } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["connect"] = connect;

const { copy } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;

const { delete: _delete } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;

const { get } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["get"] = get;

const { head } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["head"] = head;

const { link } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["link"] = link;

const { lock } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["lock"] = lock;

const { merge } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["merge"] = merge;

const { mkactivity } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["mkactivity"] = mkactivity;

const { mkcalendar } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["mkcalendar"] = mkcalendar;

const { mkcol } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["mkcol"] = mkcol;

const { move } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["move"] = move;

const { notify } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["notify"] = notify;

const { options } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["options"] = options;

const { patch } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["patch"] = patch;

const { post } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["post"] = post;

const { propfind } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["propfind"] = propfind;

const { proppatch } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["proppatch"] = proppatch;

const { purge } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["purge"] = purge;

const { put } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["put"] = put;

const { rebind } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["rebind"] = rebind;

const { report } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["report"] = report;

const { search } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["search"] = search;

const { source } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["source"] = source;

const { subscribe } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["subscribe"] = subscribe;

const { trace } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["trace"] = trace;

const { unbind } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["unbind"] = unbind;

const { unlink } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["unlink"] = unlink;

const { unlock } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["unlock"] = unlock;

const { unsubscribe } = __WEBPACK_IMPORTED_MODULE_0__index_js___default.a;
/* harmony export (immutable) */ __webpack_exports__["unsubscribe"] = unsubscribe;



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const transport = __webpack_require__(typeof window !== 'undefined' ? 14 : 15);

/**
 * Snekfetch
 * @extends Stream.Readable
 * @extends Promise
 */
class Snekfetch extends transport.Parent {
  /**
   * Options to pass to the Snekfetch constructor
   * @typedef {object} SnekfetchOptions
   * @memberof Snekfetch
   * @property {object} [headers] Headers to initialize the request with
   * @property {object|string|Buffer} [data] Data to initialize the request with
   * @property {string|Object} [query] Query to intialize the request with
   * @property {boolean} [redirect='follow'] If the request should follow redirects
   * @property {object} [qs=querystring] Querystring module to use, any object providing
   * `stringify` and `parse` for querystrings
   * @property {external:Agent|boolean} [agent] Whether to use an http agent
   */

  /**
   * Create a request.
   * Usually you'll want to do `Snekfetch#method(url [, options])` instead of
   * `new Snekfetch(method, url [, options])`
   * @param {string} method HTTP method
   * @param {string} url URL
   * @param {SnekfetchOptions} [opts] Options
   */
  constructor(method, url, opts = {}) {
    super();
    this.options = Object.assign({
      qs: transport.querystring,
      method,
      url,
      redirect: 'follow',
    }, opts, {
      headers: {},
      query: undefined,
      data: undefined,
    });
    if (opts.headers) {
      this.set(opts.headers);
    }
    if (opts.query) {
      this.query(opts.query);
    }
    if (opts.data) {
      this.send(opts.data);
    }
  }

  /**
   * Add a query param to the request
   * @param {string|Object} name Name of query param or object to add to query
   * @param {string} [value] If name is a string value, this will be the value of the query param
   * @returns {Snekfetch} This request
   */
  query(name, value) {
    if (this.options.query === undefined) {
      this.options.query = {};
    }
    if (typeof name === 'object') {
      Object.assign(this.options.query, name);
    } else {
      this.options.query[name] = value;
    }

    return this;
  }

  /**
   * Add a header to the request
   * @param {string|Object} name Name of query param or object to add to headers
   * @param {string} [value] If name is a string value, this will be the value of the header
   * @returns {Snekfetch} This request
   */
  set(name, value) {
    if (typeof name === 'object') {
      for (const [k, v] of Object.entries(name)) {
        this.options.headers[k.toLowerCase()] = v;
      }
    } else {
      this.options.headers[name.toLowerCase()] = value;
    }

    return this;
  }

  /**
   * Attach a form data object
   * @param {string} name Name of the form attachment
   * @param {string|Object|Buffer} data Data for the attachment
   * @param {string} [filename] Optional filename if form attachment name needs to be overridden
   * @returns {Snekfetch} This request
   */
  attach(...args) {
    const form = this.options.data instanceof transport.FormData ?
      this.options.data : this.options.data = new transport.FormData();
    if (typeof args[0] === 'object') {
      for (const [k, v] of Object.entries(args[0])) {
        this.attach(k, v);
      }
    } else {
      form.append(...args);
    }

    return this;
  }

  /**
   * Send data with the request
   * @param {string|Buffer|Object} data Data to send
   * @returns {Snekfetch} This request
   */
  send(data) {
    if (data instanceof transport.FormData || transport.shouldSendRaw(data)) {
      this.options.data = data;
    } else if (data !== null && typeof data === 'object') {
      const header = this.options.headers['content-type'];
      let serialize;
      if (header) {
        if (header.includes('application/json')) {
          serialize = JSON.stringify;
        } else if (header.includes('urlencoded')) {
          serialize = this.options.qs.stringify;
        }
      } else {
        this.set('Content-Type', 'application/json');
        serialize = JSON.stringify;
      }
      this.options.data = serialize(data);
    } else {
      this.options.data = data;
    }
    return this;
  }

  then(resolver, rejector) {
    if (this._response) {
      return this._response.then(resolver, rejector);
    }
    this._finalizeRequest();
    // eslint-disable-next-line no-return-assign
    return this._response = transport.request(this)
      .then(({ raw, headers, statusCode, statusText }) => {
        // forgive me :(
        const self = this; // eslint-disable-line consistent-this
        /**
         * Response from Snekfetch
         * @typedef {Object} SnekfetchResponse
         * @memberof Snekfetch
         * @prop {HTTP.Request} request
         * @prop {?string|object|Buffer} body Processed response body
         * @prop {Buffer} raw Raw response body
         * @prop {boolean} ok If the response code is >= 200 and < 300
         * @prop {number} statusCode HTTP status code
         * @prop {string} statusText Human readable HTTP status
         */
        const res = {
          request: this.request,
          get body() {
            delete res.body;
            const type = res.headers['content-type'];
            if (raw instanceof ArrayBuffer) {
              raw = new window.TextDecoder('utf8').decode(raw); // eslint-disable-line no-undef
            }
            if (/application\/json/.test(type)) {
              try {
                res.body = JSON.parse(raw);
              } catch (err) {
                res.body = String(raw);
              }
            } else if (/application\/x-www-form-urlencoded/.test(type)) {
              res.body = self.options.qs.parse(String(raw));
            } else {
              res.body = raw;
            }
            return res.body;
          },
          raw,
          ok: statusCode >= 200 && statusCode < 400,
          headers,
          statusCode,
          statusText,
        };

        if (res.ok) {
          return res;
        }
        const err = new Error(`${statusCode} ${statusText}`.trim());
        Object.assign(err, res);
        return Promise.reject(err);
      })
      .then(resolver, rejector);
  }

  catch(rejector) {
    return this.then(null, rejector);
  }

  /**
   * End the request
   * @param {Function} [cb] Optional callback to handle the response
   * @returns {Promise} This request
   */
  end(cb) {
    return this.then(
      (res) => (cb ? cb(null, res) : res),
      (err) => (cb ? cb(err, err.statusCode ? err : null) : Promise.reject(err)),
    );
  }

  _finalizeRequest() {
    if (this.options.method !== 'HEAD') {
      this.set('Accept-Encoding', 'gzip, deflate');
    }
    if (this.options.data && this.options.data.getBoundary) {
      this.set('Content-Type', `multipart/form-data; boundary=${this.options.data.getBoundary()}`);
    }

    if (this.options.query) {
      const [url, query] = this.options.url.split('?');
      this.options.url = `${url}?${this.options.qs.stringify(this.options.query)}${query ? `&${query}` : ''}`;
    }
  }

  _read() {
    this.resume();
    if (this._response) {
      return;
    }
    this.catch((err) => this.emit('error', err));
  }
}

/**
 * Create a ((THIS)) request
 * @dynamic this.METHODS
 * @method Snekfetch.((THIS)lowerCase)
 * @param {string} url The url to request
 * @param {Snekfetch.snekfetchOptions} [opts] Options
 * @returns {Snekfetch}
 */
Snekfetch.METHODS = transport.METHODS.filter((m) => m !== 'M-SEARCH');
for (const method of Snekfetch.METHODS) {
  Snekfetch[method.toLowerCase()] = function runMethod(url, opts) {
    const Constructor = this && this.prototype instanceof Snekfetch ? this : Snekfetch;
    return new Constructor(method, url, opts);
  };
}

module.exports = Snekfetch;

/**
 * @external Agent
 * @see {@link https://nodejs.org/api/http.html#http_class_http_agent}
 */


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

function request(snek) {
  snek.options.body = snek.options.data;
  const type = snek.options.responseType === 'arraybuffer' ? 'arrayBuffer' : 'text';
  return window.fetch(snek.options.url, snek.options)
    .then((r) => r[type]().then((raw) => {
      const headers = {};
      for (const [k, v] of r.headers.entries()) {
        headers[k.toLowerCase()] = v;
      }
      return {
        raw,
        headers,
        statusCode: r.status,
        statusText: r.statusText,
      };
    }));
}

module.exports = {
  request,
  shouldSendRaw: () => false,
  METHODS: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'PATCH'],
  Parent: Object,
  FormData: window.FormData,
  querystring: {
    parse: (str) => {
      const parsed = {};
      for (const [k, v] of new window.URLSearchParams(str).entries()) {
        parsed[k] = v;
      }
      return parsed;
    },
    stringify: (obj) => new window.URLSearchParams(obj).toString(),
  },
};



/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const Constants = __webpack_require__(17);

class Util {
    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
    }
    static constructURL(endpoint, shard) {
        return shard ? this.verifyShard(shard) ? `${Constants.BASE_URL}/shards/${shard}/${endpoint}` : undefined : `${Constants.BASE_URL}/${endpoint}`;
    }

    static verifyShard(shard) { // eslint-disable-line no-unused-vars
        return Constants.SHARDS.includes(shard);
    }
}

module.exports = Util;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
    BASE_URL: 'https://api.pubg.com',

    SHARDS: [
        'xbox-as',
        'xbox-eu',
        'xbox-na',
        'xbox-oc',
        'pc-krjp',
        'pc-jp',
        'pc-na',
        'pc-eu',
        'pc-oc',
        'pc-ru',
        'pc-kakao',
        'pc-sea',
        'pc-sa',
        'pc-as',
    ],
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const Match = __webpack_require__(0);

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
            matches: this.full ? content.relationships.matches.data.map(m => new Match(m.id, this.client)) : [],
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


/***/ })
/******/ ]);