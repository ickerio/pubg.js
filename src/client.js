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
        return new Promise((resolve, reject) => {
            this._apiRequest(`https://pubgtracker.com/api/profile/pc/${username}`)
                .then(body => resolve(new Profile(body)))
                .catch(reject);
        });
    }

    getAccount(id) {
        return new Promise((resolve, reject) => {
            this._apiRequest(`https://pubgtracker.com/api/search?steamId=${id}`)
                .then(body => body instanceof Buffer ? reject('User does not exist or another error occoured') : resolve(new Account(body)))
                .catch(reject);
        });
    }

    _apiRequest(url) {
        return snekfetch.get(url)
            .set(this._headers)
            .then(r => r.body.error ? Promise.reject(r.body.message || r.body.error) : r.body);
    }

}

module.exports = Client;