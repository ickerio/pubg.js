class Stats {
    constructor(content) {
        this.region = content.region;
        this.season = content.season;
        this.mode = content.mode;
        this.stats = this._structureStats(content.stats);
    }

    getItem(name) {
        if (!name || !typeof name === 'string') return;
        return this.stats.find(s => s.name === name);
    }

    _structureStats(Stats) {
        const stats = [];
        for (const stat of Object.keys(Stats)) {
            const data = Stats[stat];
            const statObj = {
                fullName: data.label,
                name: data.field,
                category: data.category,
                value: data.value,
                rank: data.rank,
                percentile: data.percentile,
                displayValue: data.displayValue
            };
            stats.push(statObj);
        }
        return stats;
    }
}

module.exports = Stats;