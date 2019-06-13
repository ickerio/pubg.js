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
     * Attributes of the PlayerSeason
     * @type {Object}
     * @property {Object} attributes.gameModeStats An object full of all game mode types being `duo`, `duoFPP`, `solo`, `soloFPP`, `squad`, `squadFPP`
     */
        this.attributes = {
            gameModeStats: {
                duo: new GameModeStats(content.attributes.gameModeStats.duo),
                duoFPP: new GameModeStats(content.attributes.gameModeStats['duo-fpp']),
                solo: new GameModeStats(content.attributes.gameModeStats.solo),
                soloFPP: new GameModeStats(
                    content.attributes.gameModeStats['solo-fpp']
                ),
                squad: new GameModeStats(content.attributes.gameModeStats.squad),
                squadFPP: new GameModeStats(
                    content.attributes.gameModeStats['squad-fpp']
                ),
            },
        };

        /**
     * Relationships of the PlayerSeason
     * @type {Object}
     * @property {Player} relationships.player Player of the PlayerSeason
     * @property {Array<Match>} relationships.matchesSolo All solo matches played during the season by the player
     * @property {Array<Match>} relationships.matchesSoloFPP All solo-fpp matches played during the season by the player
     * @property {Array<Match>} relationships.matchesDuo All duo matches played during the season by the player
     * @property {Array<Match>} relationships.matchesDuoFPP All duo-fpp matches played during the season by the player
     * @property {Array<Match>} relationships.matchesSquad All squad matches played during the season by the player
     * @property {Array<Match>} relationships.matchesSquadFPP All squad-fpp matches played during the season by the player
     * @property {Season} relationships.season All solo matches played during the season by the player
     */
        this.relationships = {
            player:
        content.relationships.player instanceof Player ?
            content.relationships.player :
            new Player(content.relationships.player.data.id, client),
            matchesSolo: content.relationships.matchesSolo.data.map(
                m => new Match(m.id, this.client)
            ),
            matchesSoloFPP: content.relationships.matchesSoloFPP.data.map(
                m => new Match(m.id, this.client)
            ),
            matchesDuo: content.relationships.matchesDuo.data.map(
                m => new Match(m.id, this.client)
            ),
            matchesDuoFPP: content.relationships.matchesDuoFPP.data.map(
                m => new Match(m.id, this.client)
            ),
            matchesSquad: content.relationships.matchesSquad.data.map(
                m => new Match(m.id, this.client)
            ),
            matchesSquadFPP: content.relationships.matchesSquadFPP.data.map(
                m => new Match(m.id, this.client)
            ),
            season: new Season(content.relationships.season.data.id),
        };
    }
}

module.exports = PlayerSeason;
