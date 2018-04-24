/**
 * An API returned status object
 * @class Status
 */
class Status {
    constructor(content) {
        /**
         * Name or id of the api service
         * @type {string}
         */
        this.id = content.id;
        /**
         * Attributes of the Status
         * @type {Object}
         * @property {Date} attributes.releasedAt Time of the latest version release
         * @property {string} attributes.version Semantic version
         */
        this.attributes = {
            releasedAt: new Date(content.attributes.releasedAt),
            version: content.attributes.version,
        };
    }
}

module.exports = Status;
