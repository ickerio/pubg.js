class Asset {
    constructor(content) {
        this.id = content.id;
        this.attributes = {
            URL: content.attributes.URL,
            createdAt: content.attributes.createdAt,
            description: content.attributes.description,
            name: content.attributes.name,
        };
    }
}

module.exports = Asset;
