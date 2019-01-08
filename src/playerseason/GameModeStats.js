/**
 * An API returned game mode stats
 * @class GameModeStats
 */
class GameModeStats {
    constructor(content) {
        /**
         * Assists
         * @type {Number}
         */
        this.assists = content.assists;

        /**
         * Boosts
         * @type {Number}
         */
        this.boosts = content.boosts;

        /**
         * Downs but not out
         * @type {Number}
         */
        this.dBNOs = content.dBNOs;

        /**
         * Daily kills
         * @type {Number}
         */
        this.dailyKills = content.dailyKills;

        /**
         * Damage dealt
         * @type {Number}
         */
        this.damageDealt = content.damageDealt;

        /**
         * Days
         * @type {string}
         */
        this.days = content.days;

        /**
         * Headshot kills
         * @type {string}
         */
        this.headshotKills = content.headshotKills;

        /**
         * Total HP healed
         * @type {string}
         */
        this.heals = content.heals;

        /**
         * Kills
         * @type {string}
         */
        this.kills = content.kills;

        /**
         * Longest kill
         * @type {string}
         */
        this.longestKill = content.longestKill;

        /**
         * Longest time survived
         * @type {string}
         */
        this.longestTimeSurvived = content.longestTimeSurvived;

        /**
         * Losses
         * @type {string}
         */
        this.losses = content.losses;

        /**
         * Maximum kill streaks
         * @type {string}
         */
        this.maxKillStreaks = content.maxKillStreaks;

        /**
         * Most survival time
         * @type {string}
         */
        this.mostSurvivalTime = content.mostSurvivalTime;

        /**
         * Revives
         * @type {string}
         */
        this.revives = content.revives;

        /**
         * Ride distance
         * @type {string}
         */
        this.rideDistance = content.rideDistance;

        /**
         * Road kills
         * @type {string}
         */
        this.roadKills = content.roadKills;

        /**
         * Round most kills
         * @type {string}
         */
        this.roundMostKills = content.roundMostKills;

        /**
         * Rounds played
         * @type {string}
         */
        this.roundsPlayed = content.roundsPlayed;

        /**
         * Suicides
         * @type {string}
         */
        this.suicides = content.suicides;

        /**
         * Team kills
         * @type {string}
         */
        this.teamKills = content.teamKills;

        /**
         * Time survived
         * @type {string}
         */
        this.timeSurvived = content.timeSurvived;

        /**
         * Top 10s
         * @type {string}
         */
        this.top10s = content.top10s;

        /**
         * Vehicles Destroyed
         * @type {string}
         */
        this.vehicleDestroys = content.vehicleDestroys;

        /**
         * Walk distance
         * @type {string}
         */
        this.walkDistance = content.walkDistance;

        /**
         * Weapon Acquired
         * @type {string}
         */
        this.weaponsAcquired = content.weaponsAcquired;

        /**
         * Weekly kills
         * @type {string}
         */
        this.weeklyKills = content.weeklyKills;

        /**
         * Win ratio
         * @type {string}
         */
        this.winRatio = content.winRatio;

        /**
         * Wins
         * @type {string}
         */
        this.wins = content.wins;

        /**
         * Unknown
         * @type {string}
         */
        this.bestRankPoint = content.bestRankPoint;

        /**
         * Wins gained within the last 24 hours
         * @type {string}
         */
        this.dailyWins = content.dailyWins;

        /**
         * Unknown
         * @type {string}
         */
        this.rankPoints = content.rankPoints;

        /**
         * Distance player has swam
         * @type {string}
         */
        this.swimDistance = content.swimDistance;

        /**
         * Wins gained within the last 7 days
         * @type {string}
         */
        this.weeklyWins = content.weeklyWins;

        // DEPRECATED

        /**
         * Wins gained within the last 7 days
         * @type {string}
         */
        this.weeklyWins = content.weeklyWins;

        /**
         * Points from winning
         * @type {string}
         */
        this.winPoints = content.winPoints;

        /**
         * Points from kills
         * @type {string}
         */
        this.killPoints = content.killPoints;
    }
}

module.exports = GameModeStats;
