const snekfetch = require('snekfetch');
const Package = require('../package.json');

const Profile = require('./Profile');
const Account = require('./Account');
const Match = require('./Match');

class Client {
    constructor(key) {

        if (!key) {
            throw new Error('No API key passed.');
        }

        this.key = key;

        this._headers = {
            'User-Agent': `pubg.js v${Package.version} (${Package.homepage})`,
            'TRN-Api-Key': this.key
        };
    }

    getProfile(username, options = {}) {
        return this._apiRequest(`https://api.pubgtracker.com/v2/profile/pc/${username}`, options)
            .then(body => new Profile(body, this))
            .catch(e => Promise.reject(e));
    }

    getAccount(id) {
        return this._apiRequest(`https://api.pubgtracker.com/v2/search/steam?steamId=${id}`)
            .then(body => new Account(body, this))
            .catch(e => Promise.reject(e));
    }

    getMatchHistory(accountId) {
        return this._apiRequest(`https://api.pubgtracker.com/v2/matches/pc/${accountId}`)
            .then(body => body.map(match => new Match(match)))
            .catch(e => Promise.reject(e));
    }

    _apiRequest(url, options = {}) {
        return snekfetch.get(url)
            .set(this._headers)
            .query(options)
            .then(r => r.body.error ? Promise.reject(`"${r.body.error}" with code ${r.body.code}`) : r.body)
            .catch(e => Promise.reject(`HTTP ${e}`));
    }

}

module.exports = Client;