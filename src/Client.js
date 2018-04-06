const snekfetch = require('snekfetch');
const Package = require('../package.json');

const Util = require('./util/Util');
const Player = require('./Player');
const Match = require('./matches/Match');
const Status = require('./Status');

class Client {
    constructor(key, defaultShard = 'pc-oc') {
        if (!key) {
            throw new Error('No API key passed.');
        }

        this.key = key;
        this.defaultShard = defaultShard;
    }

    getPlayer(args, shard = this.defaultShard) {
        if (typeof args !== 'object' || typeof shard !== 'string') throw new Error('Requires (object, !string)');

        if (args.id) {
            const url = Util.constructURL(Array.isArray(args.id) ? 'players' : `players/${args.id}`, shard);
            return this._baseRequest(url, Array.isArray(args.id) ? { 'filter[playerIds]': args.id.join(',') } : {})
                .then(players => Array.isArray(players.data) ? players.data.map(p => new Player(p, this)) : new Player(players.data, this))
                .catch(e => Promise.reject(e));
        }
        if (args.name) {
            const names = Array.isArray(args.name) ? args.name.join(',') : args.name;
            return this._baseRequest(Util.constructURL('players', shard), { 'filter[playerNames]': names })
                .then(players => players.data.map(p => new Player(p, this)))
                .catch(e => Promise.reject(e));
        }
        return Promise.reject(new Error('Invalid use of <Client>.getPlayer()'));
    }

    getMatch(id, shard = this.defaultShard) {
        if (typeof id !== 'string' || typeof shard !== 'string') throw new Error('Requires (string, !string)');
        return this._baseRequest(Util.constructURL(`matches/${id}`, shard))
            .then(match => new Match(match.data, this, match.included))
            .catch(e => Promise.reject(e.body.errors));
    }

    getStatus() {
        return this._baseRequest(Util.constructURL('status'))
            .then(status => new Status(status.data))
            .catch(e => Promise.reject(e.body.errors));
    }

    _baseRequest(url, options = {}) {
        return snekfetch.get(url)
            .set(this._headers)
            .query(options)
            .then(r => r.body)
            .catch(e => Promise.reject(e));
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
