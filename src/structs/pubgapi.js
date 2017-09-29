const Profile = require('./profile.js');
const Account = require('./account.js');
const snekfetch = require('snekfetch');

class pubgAPI {
    constructor(key) {
        this._constants = require('../util/constants.js');

        if (!key) {
            throw new Error('No API key passed.');
        }

        this.key = key;
    }

    getProfile(username) {
        return new Promise((resolve, reject) => {
            snekfetch.get(`${this._constants.ENDPOINT.STATS}${username}`)
                .set('TRN-Api-Key', this.key)
                .then(r => {
                    if (r.body.error) reject(r.body.error);
                    resolve(new Profile(r.body));
                });
        });
    }

    getAccount(id) {
        return new Promise((resolve, reject) => {
            snekfetch.get(`${this._constants.ENDPOINT.STEAM}${id}`)
                .set('TRN-Api-Key', this.key)
                .then(r => {
                    if (JSON.stringify(r.body).startsWith('<')) reject('User does not exist');
                    resolve(new Account(r.body, this.key));
                });
        });
    }

}

module.exports = pubgAPI;