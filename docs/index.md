# pubg.js Documentation
**Version 1.0**

**Table Of Contents**
- [pubgClient](#pubgclient)
    * [getProfile()](#pubgclientgetprofileusername)
    * [getAccount()](#pubgclientgetaccountsteamid)
- [Profile](#profile)
    * [getStats()](#profilegetstatsoptions)
- [Account](#account)
- [Stats](#stats)
    * [getItem()](#statsgetitemname)
- [Match](#match)


## pubgClient
| Data    | Description              |
|---------|--------------------------|
| key     | API key parsed to client |
| version | The version of pubg.js   |

#### pubgClient#getProfile(username)
- `username` <[String]> PUBG unique name
- Returns: <[Profile]>

#### pubgClient#getAccount(steamId)
- `steamId` <[String]> 64 bit Steam Id
- Returns: <[Account]>

## Profile
| Data           | Description                       |
|----------------|-----------------------------------|
| platformId     | `Unknown`                         |
| accountId      | `Unknown`                         |
| avatar         | URL of steam avatar used in game  |
| selectedRegion | Server region                     |
| defaultSeason  | Default selection of season       |
| seasonDisplay  | Display text for season           |
| lastUpdated    | Time of last profile update       |
| playerName     | Unique PUBG name                  |
| pubgTrackerId  | Unique ID of player issued by API |

#### Profile#getStats(options)
- `options` <[Object]>
    - `region` <[String]> region: 'agg', 'as', 'eu', 'na', 'oc', 'sa', 'sea'. Defaults to `selectedRegion`
    - `season` <[String]> season: '2017-pre1', '2017-pre2', '2017-pre3', '2017-pre4'. Defaults to `defaultSeason`
    - `match` <[String]> 'solo', 'duo', 'squad', 'solo-fpp', 'duo-fpp', 'squad-fpp' Defaults to 'solo'
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
- `name` <[String]> Type of stat to find
- Returns: <[Object]> of full stats
    - `fullName` <[String]>
    - `name` <[String]>
    - `category` <[String]>
    - `valueInt` <[number]>
    - `valueDec` <[String]>
    - `value` <[String]>
    - `rank` <[String]>
    - `percentile` <[number]>
    - `displayValue` <[String]>

## Match
This has been deprecated, will be removed in later versions.


[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "String"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"

[Profile]: #profile "Profile"
[Account]: #account "Account"
[Stats]: #stats "Stats"
[Match]: mMatch "Match"