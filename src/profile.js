const ProfileStats = require('./ProfileStats.js');
const ProfileMatch = require('./profileMatch.js');

class Profile {
    constructor(content) {
        this.platformId = content.platformId;
        this.accountId = content.AccountId;
        this.avatar = content.Avatar;
        this.selectedRegion = content.selectedRegion;
        this.defaultSeason = content.defaultSeason;
        this.seasonDisplay = content.seasonDisplay;
        this.lastUpdated = content.LastUpdated;
        this.playerName = content.PlayerName;
        this.pubgTrackerId = content.PubgTrackerId;
        this.stats = content.Stats.map(stats => new ProfileStats(stats));
        this.matchHistory = content.MatchHistory.map(match => new ProfileMatch(match));
    }

    getStats(options = {}) {
        Object.assign({
            region: this.selectedRegion,
            season: this.defaultSeason,
            match: 'solo'
        }, options);
        
        return this.stats.find(s => 
            s.region === options.region && 
            s.season === options.season &&
            s.match === options.match
        ) || {};
    }
}

module.exports = Profile;