const GameModeStats = require('./GameModeStats');
const Player = require('../Player');
const Match = require('../matches/Match');
const Season = require('../Season');

/**
 * An API returned player season object
 * @class PlayerSeason
 */
class PlayerSeason {
    constructor(content, client) {
        /**
         * Attributes of the Player
         * @type {Object}
         * @property {Object} attributes.gameModeStats An object full of all game mode types being `duo`, `duo-fpp`, `solo`, `solo-fpp`, `squad`, `squad-fpp`
         */
        this.attributes = {
            gameModeStats: {
                duo: new GameModeStats(content.attributes.gameModeStats.duo),
                'duo-fpp': new GameModeStats(content.attributes.gameModeStats['duo-fpp']),
                solo: new GameModeStats(content.attributes.gameModeStats.solo),
                'solo-fpp': new GameModeStats(content.attributes.gameModeStats['solo-fpp']),
                squad: new GameModeStats(content.attributes.gameModeStats.squad),
                'squad-fpp': new GameModeStats(content.attributes.gameModeStats['squad-fpp']),
            },
        };

        this.relationships = {
            player: new Player(content.relationships.player.data.id, client),
            matchesSolo: content.relationships.matchesSolo.data.map(m => new Match(m.id, this.client)),
            matchesSoloFPP: content.relationships.matchesSoloFPP.data.map(m => new Match(m.id, this.client)),
            matchesDuo: content.relationships.matchesDuo.data.map(m => new Match(m.id, this.client)),
            matchesDuoFPP: content.relationships.matchesDuoFPP.data.map(m => new Match(m.id, this.client)),
            matchesSquad: content.relationships.matchesSquad.data.map(m => new Match(m.id, this.client)),
            matchesSquadFPP: content.relationships.matchesSquadFPP.data.map(m => new Match(m.id, this.client)),
            season: new Season(content.relationships.season.data.id),
        };
    }
}

module.exports = PlayerSeason;
