class Match {
    constructor(content) {
        this.id = content.id;
        this.updated = content.updated;
        this.updatedJS = content.updatedJS;
        this.season = content.season;
        this.seasonDisplay = content.seasonDisplay;
        this.match = content.match;
        this.matchDisplay = content.matchDisplay;
        this.region = content.region;
        this.regionDisplay = content.regionDisplay;
        this.rounds = content.rounds;
        this.wins = content.wins;
        this.kills = content.kills;
        this.assists = content.assists;
        this.top10 = content.top10;
        this.rating = content.rating;
        this.ratingChange = content.ratingChange;
        this.ratingRank = content.ratingRank;
        this.ratingRankChange = content.ratingRankChange;
        this.headshots = content.headshots;
        this.kd = content.kd;
        this.damage = content.damage;
        this.timeSurvived = content.timeSurvived;
        this.winRating = content.winRating;
        this.winRank = content.winRank;
        this.winRatingChange = content.winRatingChange;
        this.winRatingRankChange = content.winRatingRankChange;
        this.killRating = content.killRating;
        this.killRank = content.killRank;
        this.killRatingChange = content.killRatingChange;
        this.killRatingRankChange = content.killRatingRankChange;
        this.moveDistance = content.moveDistance;
    }
}

module.exports = Match;