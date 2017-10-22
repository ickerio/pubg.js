# pubg.js Documentation
**Version 1.0**

**Table Of Contents**
- [Client](#Client)
    * [getProfile()](#pubgclientgetprofileusername)
    * [getAccount()](#pubgclientgetaccountsteamid)
- [Profile](#profile)
    * [getStats()](#profilegetstatsoptions)
- [Account](#account)
- [Stats](#stats)
    * [getItem()](#statsgetitemname)
- [Match](#match)
- [API Definitions](#api-definitions)
    * [Regions](#regions)
    * [Seasons](#seasons)
    * [Matches](#matches)


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

## Profile
| Data           | Description                       |
|----------------|-----------------------------------|
| platformId     | `Unknown`                         |
| accountId      | `Unknown`                         |
| avatar         | URL of steam avatar used in game  |
| selectedRegion | Server region                     |
| defaultSeason  | Current season in PUBG            |
| seasonDisplay  | Display text for season           |
| lastUpdated    | Time of last profile update       |
| playerName     | Unique PUBG name                  |
| pubgTrackerId  | Unique ID of player issued by API |

#### Profile#getStats(options)
- `options` <[Object]>
    - `region` <[String]> region: [see here](#regions) Defaults to `selectedRegion`
    - `season` <[String]> season: [see here](#seasons) Defaults to `defaultSeason`
    - `match` <[String]> match: [see here](#matches) Defaults to 'solo'
- Returns: <[Stats]>

## Account
| Data        | Description                         |
|-------------|-------------------------------------|
| accountId   | API key parsed to client            |
| nickname    | PUBG name tied to the steam account |
| avatarUrl   | Image URL of Steam account          |
| steamName   | Display name for Steam              |
| state       | State of user in PUBG               |
| inviteAllow | Current invite settings in PUBG     |

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
This has been deprecated due to the API, will be removed in later versions.

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

#### Seasons
- `2017-pre1` 2017 Early Access Season 1
- `2017-pre2` 2017 Early Access Season 2
- `2017-pre3` 2017 Early Access Season 3
- `2017-pre4` 2017 Early Access Season 4
- `2017-pre5` 2017 Early Access Season 5 (current)

#### Matches
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
[Match]: mMatch "Match"