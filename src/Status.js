class Status {
    constructor(content) {
        this.id = content.id;
        this.attributes = {
            releasedAt: new Date(content.attributes.releasedAt),
            version: content.attributes.version,
        };
    }
}

module.exports = Status;
