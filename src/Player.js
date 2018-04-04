const Match = require('./Match');

class Player {
    constructor(content, client) {
        Object.defineProperty(this, 'client', { value: client });

        this.id = content.id;
        this.attributes = {
            name: content.attributes.name,
            shardId: content.attributes.shardId,
            createdAt: new Date(content.attributes.createdAt),
            patchVersion: content.attributes.patchVersion,
            titleId: content.attributes.titleId,
        };
        this.relationships = {
            assets: content.relationships.assets.data,
            matches: content.relationships.matches.data.map(m => new Match(m.id, this.client)),
        };
        this.links = {
            schema: content.links.schema,
            self: content.links.self,
        };
    }
}

module.exports = Player;
