class Profile {
    constructor(data) {
        Object.assign(this, refactorData(data));
    }

    getStats(options = {}) {
        Object.assign({
            region: this.selectedRegion,
            season: this.defaultSeason,
            match: 'solo'
        }, options);
        
        return this.Stats.find(s => 
            s.Region === options.region && 
            s.Season === options.season &&
            s.Match === options.match) || {};
    }
}

// Loops through all stats profile
function refactorData (data) {
    data.Stats.forEach(refacatorStat);
    return data;
}

// Refactors stats in a nicer and more readable order
function refacatorStat(stat) {
    let newStats = {};
    stat.Stats.forEach(s => {
        if (!newStats[clear(s.category)]) newStats[clear(s.category)] = {};
        newStats[clear(s.category)][clear(s.field)] = s.value;
    });
    stat.Stats = newStats;

    return stat;
}

// Camel case and removes spaces
function clear(string) {
    return (string.charAt(0).toLowerCase() + string.slice(1)).replace(/ /g, '');
}

module.exports = Profile;