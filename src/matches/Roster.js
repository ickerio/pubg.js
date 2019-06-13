const Participant = require('./Participant');

class Roster {
    constructor(content, included) {
        this.id = content.id;
        this.attributes = {
            shardId: content.attributes.shardId,
            stats: {
                rank: content.attributes.stats.rank,
                teamId: content.attributes.stats.teamId,
            },
            won: Boolean(content.attributes.won),
        };
        this.relationships = {
            participants: content.relationships.participants.data.map(
                p =>
                    new Participant(
                        included.find(
                            i => i.type === 'participant' && i.id === p.id
                        )
                    )
            ),
            team: content.relationships.team.data,
        };
    }
}

module.exports = Roster;
