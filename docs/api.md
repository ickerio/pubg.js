# pubg.js Documentation
**Version 1.0**

**Table Of Contents**
- [Client](#Client)
    * [getProfile()](#pubgclientgetprofileusername)
    * [getAccount()](#pubgclientgetaccountsteamid)
    * [getMatchHistory()](#pubgclientgetmatchhistoryaccountId)
- [Profile](#profile)
    * [getStats()](#profilegetstatsoptions)
    * [matchHistory()](#profilematchhistory)
    * [account()](#profileaccount)
- [Account](#account)
    * [profile()](#accountprofileoptions)
    * [matchHistory()](#accountmatchhistory
- [Stats](#stats)
    * [getItem()](#statsgetitemname)
- [Match](#match)
- [API Definitions](#api-definitions)
    * [Regions](#regions)
    * [Seasons](#seasons)
    * [Modes](#modes)


## Client
| Data    | Description              |
|---------|--------------------------|
| key     | API key parsed to client |

#### Client#getProfile(username)
- `username` <[String]> PUBG unique name
- Returns: <[Profile]>

#### Client#getAccount(steamId)
- `steamId` <[String]> 64 bit Steam Id
- Returns: <[Account]>

#### Client#getMatchHistory(accountId)
- `accountId` <[String]> PUBG account id (`account.accountId`)
- Returns: Array of <[Match]>

## Profile
| Data          | Description                                        |
|---------------|----------------------------------------------------|
| pubgTrackerId | UUID assigned by pubgtracker API                   |
| accountId     | PUBG account ID, used to get matches               |
| platform      | Platform used to play game (currently only pc / 4) |
| nickname      | PUBG in game name                                  |
| avatar        | URL of steam avatar used in game                   |
| avatarFull    | Full resolution of steam avatar used in game       |
| steamId       | 64 bit Steam ID                                    |
| lastUpdated   | Time stats were last updated                       |
| timePlayed    | In game minutes played                             |

#### Profile#getStats(options)
- `options` <[Object]>
    - `region` <[String]> region: [see here](#regions) Defaults to `selectedRegion`
    - `season` <[String]> season: [see here](#seasons) Defaults to `defaultSeason`
    - `mode` <[String]> mode: [see here](#modes) Defaults to 'solo'
- Returns: <[Stats]>

#### Profile#matchHistory()
- Returns: Array of <[Match]>

#### Profile#account()
- Returns: <[Account]>

## Account
| Data      | Description                          |
|-----------|--------------------------------------|
| accountId | PUBG account ID, used to get matches |
| nickname  | PUBG in game name                    |
| steamId   | 64 bit Steam ID                      |

#### Account#profile(options)
- `options` <[Object]>
    - `region` <[String]> region: [see here](#regions)
    - `season` <[String]> season: [see here](#seasons)
    - `mode` <[String]> mode: [see here](#modes)
- Returns: <[Profile]>

#### Account#matchHistory()
- Returns: Array of <[Match]>

## Stats
| Data   | Description                 |
|--------|-----------------------------|
| region | The region of the stats     |
| season | The season of the stats     |
| match  | The match type of the stats |
| stats  | An <[Array]> of the stats   |

#### Stats#getItem(name)
- `name` <[String]> Type of stat to find, either
    - K/D Ratio: `KillDeathRatio`
    - Win %: `WinRatio`
    - Time Survived: `TimeSurvived`
    - Rounds Played: `RoundsPlayed`
    - Wins: `Wins`
    - Win Top 10 Ratio: `WinTop10Ratio`
    - Top 10s: `Top10s`
    - Top 10 Rate: `Top10Ratio`
    - Losses: `Losses`
    - Rating: `Rating`
    - Best Rating: `BestRating`
    - Best Rank: `BestRank`
    - Avg Dmg per Match: `DamagePg`
    - Headshot Kills Pg: `HeadshotKillsPg`
    - Heals Pg: `HealsPg`
    - Kills Pg: `KillsPg`
    - Move Distance Pg: `MoveDistancePg`
    - Revives Pg: `RevivesPg`
    - Road Kills Pg: `RoadKillsPg`
    - Team Kills Pg: `TeamKillsPg`
    - Time Survived Pg: `TimeSurvivedPg`
    - Top 10s Pg: `Top10sPg`
    - Kills: `Kills`
    - Assists: `Assists`
    - Suicides: `Suicides`
    - Team Kills: `TeamKills`
    - Headshot Kills: `HeadshotKills`
    - Headshot Kill Ratio: `HeadshotKillRatio`
    - Vehicle Destroys: `VehicleDestroys`
    - Road Kills: `RoadKills`
    - Daily Kills: `DailyKills`
    - Weekly Kills: `WeeklyKills`
    - Round Most Kills: `RoundMostKills`
    - Max Kill Streaks: `MaxKillStreaks`
    - Weapons Acquired: `WeaponAcquired`
    - Days: `Days`
    - Longest Time Survived: `LongestTimeSurvived`
    - Most Survival Time: `MostSurvivalTime`
    - Avg Survival Time: `AvgSurvivalTime`
    - Win Points: `WinPoints`
    - Walk Distance: `WalkDistance`
    - Ride Distance: `RideDistance`
    - Move Distance: `MoveDistance`
    - Avg Walk Distance: `AvgWalkDistance`
    - Avg Ride Distance: `AvgRideDistance`
    - Longest Kill: `LongestKill`
    - Heals: `Heals`
    - Revives: `Revives`
    - Boosts: `Boosts`
    - Damage Dealt: `DamageDealt`
    - Knock Outs: `DBNOs`
- Returns: <[Object]> of full stats
    - `fullName` <[String]>
    - `name` <[String]>
    - `category` <[String]>
    - `value` <[String]>
    - `rank` <[String]>
    - `percentile` <[number]>
    - `displayValue` <[String]>

## Match
| Data                 | Description |
|----------------------|-------------|
| id                   | TODO        |
| updated              | TODO        |
| updatedJS            | TODO        |
| season               | TODO        |
| seasonDisplay        | TODO        |
| match                | TODO        |
| matchDisplay         | TODO        |
| region               | TODO        |
| regionDisplay        | TODO        |
| rounds               | TODO        |
| wins                 | TODO        |
| kills                | TODO        |
| assists              | TODO        |
| top10                | TODO        |
| rating               | TODO        |
| ratingChange         | TODO        |
| ratingRank           | TODO        |
| ratingRankChange     | TODO        |
| headshots            | TODO        |
| kd                   | TODO        |
| damage               | TODO        |
| timeSurvived         | TODO        |
| winRating            | TODO        |
| winRank              | TODO        |
| winRatingChange      | TODO        |
| winRatingRankChange  | TODO        |
| killRating           | TODO        |
| killRank             | TODO        |
| killRatingChange     | TODO        |
| killRatingRankChange | TODO        |
| moveDistance         | TODO        |

## API Definitions
Definitions and examples of some of the API

#### Regions
- `agg` All regions
- `as` Asia
- `eu` Europe
- `na` North America
- `oc` Oceania
- `sa` South America
- `sea` South East Asia
- `krjp` Korea / Japan

#### Seasons
- `2017-pre1` 2017 Early Access Season 1
- `2017-pre2` 2017 Early Access Season 2
- `2017-pre3` 2017 Early Access Season 3
- `2017-pre4` 2017 Early Access Season 4
- `2017-pre5` 2017 Early Access Season 5
- `2017-pre6` 2017 Early Access Season 6

#### Modes
- `solo` Solo
- `duo` Duo
- `squad` Squad
- `solo-fpp` Solo first person
- `duo-fpp` Duo first person
- `squad-fpp` Squad first person




[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "String"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"

[Profile]: #profile "Profile"
[Account]: #account "Account"
[Stats]: #stats "Stats"
[Match]: #match "Match"