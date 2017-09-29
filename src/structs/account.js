const Profile = require('./profile.js');
const snekfetch = require('snekfetch');

class Account {
    constructor(data, key) {
        this._constants = require('../util/constants.js');
        this.key = key;
        Object.assign(this, data);
    }
    
    getProfile() {
        return new Promise((resolve, reject) => {
            snekfetch.get(`${this._constants.ENDPOINT.STATS}${this.Nickname}`)
                .set('TRN-Api-Key', this.key)
                .then(r => {
                    if (r.body.error) reject(r.body.error);
                    this.profile = new Profile(r);
                    resolve(new Profile(r.body));
                });
        });
    }
}

module.exports = Account;