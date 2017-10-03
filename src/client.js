const snekfetch = require('snekfetch');
const Package = require('../package.json');

const Profile = require('./profile.js');
const Account = require('./account.js');

class pubgClient {
    constructor(key) {

        if (!key) {
            throw new Error('No API key passed.');
        }

        this.key = key;
        this.version = Package.version;
    }

    getProfile(username) {
        return new Promise((resolve, reject) => {
            this._apiRequest(`https://pubgtracker.com/api/profile/pc/${username}`)
                .then(body => resolve(new Profile(body)))
                .catch(reject);
        });
    }

    getAccount(id) {
        return new Promise((resolve, reject) => {
            this._apiRequest(`https://pubgtracker.com/api/search?steamId=${id}`)
                .then(body => resolve(new Account(body)))
                .catch(reject);
        });
    }

    _apiRequest(url) {
        return new Promise((resolve, reject) => {
            snekfetch.get(url)
                .set('TRN-Api-Key', this.key)
                .then(r => {
                    if (r.body.error) reject(new Error(r.body.error));
                    resolve(r.body);
                })
                .catch(reject);
        });
    }

}

module.exports = pubgClient;