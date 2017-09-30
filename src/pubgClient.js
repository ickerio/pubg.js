const Profile = require('./profile.js');
const Account = require('./account.js');
const snekfetch = require('snekfetch');

class pubgClient {
    constructor(key) {

        if (!key) {
            throw new Error('No API key passed.');
        }

        this.key = key;
    }

    getProfile(username) {
        return new Promise((resolve, reject) => {
            snekfetch.get(`https://pubgtracker.com/api/profile/pc/${username}`)
                .set('TRN-Api-Key', this.key)
                .then(r => resolve(new Profile(r.body)))
                .catch(reject);
        });
    }

    getAccount(id) {
        return new Promise((resolve, reject) => {
            snekfetch.get(`https://pubgtracker.com/api/search?steamId=${id}`)
                .set('TRN-Api-Key', this.key)
                .then(r => resolve(new Account(r.body, this.key)))
                .catch(reject);
        });
    }

}

module.exports = pubgClient;