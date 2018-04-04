class Match {
    constructor(content, client) {
        Object.defineProperty(this, 'client', { value: client });

        if (typeof content === 'string') {
            this.id = content;
            this.full = false;
            return;
        }

        this.id = content.id;
        this.attributes = {
            createdAt: new Date(content.attributes.createdAt),
            duration: content.attributes.duration,
            gameMode: content.attributes.gameMode,
            patchVersion: content.attributes.patchVersion,
            shardId: content.attributes.shardId,
            stats: content.attributes.stats,
            tags: content.attributes.tags,
            titleId: content.attributes.titleId,
        };
        this.relationships = {
            assets: content.relationships.assets.data,
            rosters: content.relationships.rosters.data,
            rounds: content.relationships.rounds.data,
            spectators: content.relationships.spectators.data,
        };
        this.links = {
            schema: content.links.schema,
            self: content.links.self,
        };
    }

    get() {
        return this.client.getMatch(this.id)
            .catch(e => Promise.reject(e));
    }
}

module.exports = Match;
