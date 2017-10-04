<div align="center">
    <p>
        <img alt="pubg.js" src="https://i.imgur.com/YzaajHA.png" width="250"/>
    </p>
    <p>
        <a href="https://travis-ci.org/ickerio/pubg.js"><img src="https://travis-ci.org/ickerio/pubg.js.svg?branch=master" alt="Travis-ci"></a>
        <a href="https://www.npmjs.com/package/pubg.js"><img src="https://img.shields.io/npm/dt/pubg.js.svg?maxAge=3600" alt="NPM Downloads" /></a>
        <a href="https://david-dm.org/ickerio/pubg.js"><img src="https://img.shields.io/david/ickerio/pubg.js.svg?maxAge=3600" alt="Dependencies" /></a>
        <a href="https://npm.runkit.com/pubg.js"><img src="https://badge.runkitcdn.com/pubg.js.svg" alt="Try pubg.js on RunKit"/></a>
    </p>
    <a href="https://nodei.co/npm/pubg.js/"><img src="https://nodei.co/npm/pubg.js.png?downloads=true&stars=true" alt="NPM info"/></a>
</div>

> Not working? The API is currently experiencing a major issue, [read more!](https://pubgtracker.com/article/14/status-on-our-discord-bot-twitch-bot-and-api) Stay up to date on the issue [here](https://pubgtracker.com/).

### Documentation
The full documenation of everything covered in the wrapper can be found [**here**](https://github.com/ickerio/pubg.js/blob/master/docs/index.md)

# Setup and Installation
1. Register and signup at [pubgtracker](https://pubgtracker.com/)
2. Navigate to the [api page](https://pubgtracker.com/site-api) and generate a key
3. Install **pubg.js** `npm install pubg.js --save`
4. When using the wrapper, parse your generated key when creating the client


# Example
```js
const pubgClient = require('pubg.js');

const client = new pubgClient('yourKey');

client.getProfile('ickerio')
    .then(profile => {
        const myRoundsPlayed = profile.getStats({
            region: 'oc',
            season: '2017-pre4',
            match: 'solo'
        }).getItem('RoundsPlayed');

        console.log(myRoundsPlayed);
    })
    .catch(console.error);
```

# Issues
If you run into any issues, problems or have any queries or concerns please do not hesitate to open an issue, pull request or message me on Discord at `rabb#7134`