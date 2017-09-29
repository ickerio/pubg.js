<p align="center">
    <img alt="pubg.js" src="https://i.imgur.com/YzaajHA.png" width="250"/>
</p>

# Installation
```
npm install https://github.com/ickerio/pubg.js --save
```

# Example
```js
const { pubgAPI, REGION, SEASON, MATCH } = require('./index.js');

const api = new pubgAPI('yourTokenHere');
api.getProfile('yourNameHere').then(p => {
    p.getStats({
        region: REGION.OCEANIA,
        season: SEASON.EAS4,
        match: MATCH.DUO
    }).performence.killDeathRatio // => 2.97

});
```

# Data Returned

`Profile#getStats()`
```js
{
    Region: 'oc',
    Season: '2017-pre4',
    Match: 'duo',
    Stats: {
        performance: {
            killDeathRatio: '0.84',
            winRatio: '0',
            timeSurvived: '23688.54',
            roundsPlayed: '31',
            wins: '0',
            winTop10Ratio: '0',
            top10s: '6',
            top10Ratio: '19.35',
            losses: '31',
            winPoints: '1087'
        },
        skillRating: {
            rating: '1316',
            bestRating: '1327.5',
            bestRank: '137602'
        },
        perGame: {
            damagePg: '93.41',
            headshotKillsPg: '0.06',
            healsPg: '0.58',
            killsPg: '0.84',
            moveDistancePg: '1854.48',
            revivesPg: '0.13',
            roadKillsPg: '0',
            teamKillsPg: '0',
            timeSurvivedPg: '764.15',
            top10sPg: '0.19'
        },
        combat: {
            kills: '26',
            assists: '5',
            suicides: '0',
            teamKills: '0',
            headshotKills: '2',
            headshotKillRatio: '0.08',
            vehicleDestroys: '0',
            roadKills: '0',
            dailyKills: '3',
            weeklyKills: '18',
            roundMostKills: '4',
            maxKillStreaks: '2',
            weaponAcquired: '0'
        },
        survival: {
            days: '7',
            longestTimeSurvived: '1825.95',
            mostSurvivalTime: '1825.95',
            avgSurvivalTime: '764.15'
        },
        distance: {
            walkDistance: '39639.13',
            rideDistance: '17849.79',
            moveDistance: '57488.91',
            avgWalkDistance: '1278.68',
            avgRideDistance: '575.8',
            longestKill: '54.6'
        },
        support: {
            heals: '18',
            revives: '4',
            boosts: '14',
            damageDealt: '2895.59',
            dBNOs: '15'
        }
    }
}
```

`Profile` class
```js
Profile {
  platformId: 4,
  AccountId: 'account.7ff6779021c4433eb2e31917663c4bdd',
  Avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f9/f98f47aa924724b91aa6732ef9
2fd2c11716f368.jpg',
  selectedRegion: 'agg',
  defaultSeason: '2017-pre4',
  seasonDisplay: 'Early Access Season #4',
  LastUpdated: '2017-09-29T11:02:16.9381693Z',
  PlayerName: 'ickerio',
  PubgTrackerId: 1621457,
  Stats: // Shortened down (use getStats)
   [ { Region: 'as',
       Season: '2017-pre4',
       Match: 'solo',
       Stats: [Object] }
   ]
    MatchHistory: // Shortened down
   [ { Id: 24613525,
       Updated: '2017-09-29T04:16:32.87',
       UpdatedJS: '1506658592870',
       Season: 4,
       SeasonDisplay: 'Early Access Season #4',
       Match: 3,
       MatchDisplay: 'Squad',
       Region: 3,
       RegionDisplay: '[AS] Asia',
       Rounds: 1,
       Wins: 0,
       Kills: 0,
       Assists: 0,
       Top10: 0,
       Rating: 1199.1,
       RatingChange: 1199.1,
       RatingRank: 5406733,
       RatingRankChange: 5406733,
       Headshots: 0,
       Kd: 0,
       Damage: 0,
       TimeSurvived: 138.7,
       WinRating: 999,
       WinRank: 5391210,
       WinRatingChange: 999,
       WinRatingRankChange: 5391210,
       KillRating: 997,
       KillRank: 5311611,
       KillRatingChange: 997,
       KillRatingRankChange: 5311611,
       MoveDistance: 47.05 }
   ]
```