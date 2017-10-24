const snekfetch = require('snekfetch');
const Package = require('../package.json');

const Profile = require('./profile.js');
const Account = require('./account.js');

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

    getProfile(username) {
        return this._apiRequest(`https://pubgtracker.com/api/profile/pc/${username}`)
            .then(body => new Profile(body))
            .catch(e => Promise.reject(e));
    }

    getAccount(id) {
        return this._apiRequest(`https://pubgtracker.com/api/search?steamId=${id}`)
            .then(body => body instanceof Buffer ? Promise.reject('User does not exist or another error occoured') : new Account(body))
            .catch(e => Promise.reject(e));
    }

    _apiRequest(url) {
        return snekfetch.get(url)
            .set(this._headers)
            .then(r => r.body.error ? Promise.reject(r.body.message || r.body.error) : r.body)
            .catch(e => Promise.reject(`HTTP ${e}`));
    }

}

module.exports = Client;