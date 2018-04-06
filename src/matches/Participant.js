class Participant {
    constructor(content) {
        this.id = content.id;
        this.attributes = {
            actor: content.attributes.actor,
            shardId: content.attributes.shardId,
            stats: {
                DBNOs: content.attributes.stats.DBNOs,
                assists: content.attributes.stats.assists,
                boosts: content.attributes.stats.boosts,
                damageDealt: content.attributes.stats.damageDealt,
                deathType: content.attributes.stats.deathType,
                headshotKills: content.attributes.stats.headshotKills,
                heals: content.attributes.stats.heals,
                killPlace: content.attributes.stats.killPlace,
                killPoints: content.attributes.stats.killPoints,
                killPointsDelta: content.attributes.stats.killPointsDelta,
                killStreaks: content.attributes.stats.killStreaks,
                kills: content.attributes.stats.kills,
                lastKillPoints: content.attributes.stats.lastKillPoints,
                lastWinPoints: content.attributes.stats.lastWinPoints,
                longestKill: content.attributes.stats.longestKill,
                mostDamage: content.attributes.stats.mostDamage,
                name: content.attributes.stats.name,
                playerId: content.attributes.stats.playerId,
                revives: content.attributes.stats.revives,
                rideDistance: content.attributes.stats.rideDistance,
                roadKills: content.attributes.stats.roadKills,
                teamKills: content.attributes.stats.teamKills,
                timeSurvived: content.attributes.stats.timeSurvived,
                vehicleDestroys: content.attributes.stats.vehicleDestroys,
                walkDistance: content.attributes.stats.walkDistance,
                weaponsAcquired: content.attributes.stats.weaponsAcquired,
                winPlace: content.attributes.stats.winPlace,
                winPoints: content.attributes.stats.winPoints,
                winPointsDelta: content.attributes.stats.winPointsDelta,
            },
        };
    }
}

module.exports = Participant;
