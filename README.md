<p align="center">
    <img alt="pubg.js" src="https://i.imgur.com/YzaajHA.png" width="250"/>
</p>

# Setup and Installation
1. Register and signup at [pubgtracker](https://pubgtracker.com/)
2. Navigate to the [api page](https://pubgtracker.com/site-api) and generate a key
3. Install **pubg.js** `npm install https://github.com/ickerio/pubg.js --save`
4. When using the wrapper, parse your generated key when creating the client


# Example
```js
const pubgClient = require('pubg.js');

const client = new pubgClient('yourKey');
client.getProfile('ickerio').then(p => {

    const myStat = p.getStats({
        region: 'oc',
        season: '2017-pre4',
        match: 'solo'
    });
    console.log(myStat);
});
```

# Documentation
## pubgClient
| Data | Description              |
|------|--------------------------|
| key  | API key parsed to client |

### pubgClient#getProfile(username)
Returns a `profile` from their pubg name
| Parameter | Type   | Optional | Default | Description    |
|-----------|--------|----------|---------|----------------|
| username  | string |          | *none*  | PUBG username  |

### pubgClient#getAccount(steamId)
Returns an `account` with the specified steamId
| Parameter | Type   | Optional | Default | Description                |
|-----------|--------|----------|---------|----------------------------|
| steamId   | string |          | *none*  | 64 bit Steam ID of account |

## profile
| Data           | Description                       |
|----------------|-----------------------------------|
| platformId     | `Unknown`                         |
| accountId      | Steam account ID                  |
| avatar         | URL of steam avatar used in game  |
| selectedRegion | Server region                     |
| defaultSeason  | Default selection of season       |
| seasonDisplay  | Display text for season           |
| lastUpdated    | Time of last profile update       |
| playerName     | Unique PUBG name                  |
| pubgTrackerId  | Unique ID of player issued by API |

### profile#getStats(options)
Returns `profileStats` for a profile
| Parameter      | Type   | Optional | Default        | Description     |
|----------------|--------|----------|----------------|-----------------|
| options        | object | Yes      |                |                 |
| options.region | string |          | selectedRegion | Region of match |
| options.season | string |          | defaultSeason  | Season of match |
| options.match  | string |          | 'solo'         | Match type      |

## account
Coming soon...