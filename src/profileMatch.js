class ProfileMatch {
    constructor(content) {
        this.id = content.Id;
        this.updated = content.Updated;
        this.updatedJS = content.UpdatedJS;
        this.season = content.Season;
        this.seasonDisplay = content.SeasonDisplay;
        this.match = content.Match;
        this.matchDisplay = content.MatchDisplay;
        this.region = content.Region;
        this.regionDisplay = content.RegionDisplay;
        this.rounds = content.Rounds;
        this.wins = content.Wins;
        this.kills = content.Kills;
        this.assists = content.Assists;
        this.top10 = content.Top10;
        this.rating = content.Rating;
        this.ratingChange = content.RatingChange;
        this.ratingRank = content.RatingRank;
        this.ratingRankChange = content.RatingRankChange;
        this.headshots = content.Headshots;
        this.kd = content.Kd;
        this.damage = content.Damage;
        this.timeSurvived = content.TimeSurvived;
        this.winRating = content.WinRating;
        this.winRank = content.WinRank;
        this.winRatingChange = content.WinRatingChange;
        this.winRatingRankChange = content.WinRatingRankChange;
        this.killRating = content.KillRating;
        this.killRank = content.KillRank;
        this.killRatingChange = content.KillRatingChange;
        this.killRatingRankChange = content.KillRatingRankChange;
        this.moveDistance = content.MoveDistance;
    }
}

module.exports = ProfileMatch;