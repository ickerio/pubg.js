const Stats = require('./Stats');

class Profile {
    constructor(content, client) {
        this.pubgTrackerId = content.pubgTrackerId;
        this.accountId = content.accountId;
        this.platform = content.platform;
        this.nickname = content.nickname;
        this.avatar = content.avatar;
        this.avatarFull = content.avatar.replace('.jpg', '_full.jpg');
        this.steamId = content.steamId;
        this.lastUpdated = content.lastUpdated;
        this.timePlayed = content.timePlayed;
        this.stats = content.stats.map(stats => new Stats(stats));

        this.client = client;
    }

    getStats(options = {}) {
        options = Object.assign({
            region: this.selectedRegion,
            season: this.defaultSeason,
            mode: 'solo'
        }, options);
        
        return this.stats.find(s => 
            s.region === options.region && 
            s.season === options.season &&
            s.match === options.match
        ) || {};
    }

    matchHistory() {
        return this.client.getMatchHistory(this.accountId);
    }

    account() {
        return this.client.getAccount(this.steamId);
    }
}

module.exports = Profile;