# pubg.js [![Travis-ci](https://travis-ci.org/ickerio/pubg.js.svg?branch=master)](https://travis-ci.org/ickerio/pubg.js) [![npm downloads](https://img.shields.io/npm/dt/pubg.js.svg?maxAge=3600)](https://www.npmjs.com/package/pubg.js) [![Dependencies](https://img.shields.io/david/ickerio/pubg.js.svg?maxAge=3600)](https://david-dm.org/ickerio/pubg.js) [![RunKit](https://badge.runkitcdn.com/pubg.js.svg)](https://npm.runkit.com/pubg.js)

<img src="https://user-images.githubusercontent.com/14541442/32552867-3d44fd8e-c4d0-11e7-85d5-5199697582bd.png" width="250" align="right">

###### [API](docs/api.md) | [Changelog](docs/changelog.md) | [Issues](#issues)

A powerful and light PlayerUnknown's Battlegrounds stats API wrapper, for Node.js and for the web.
 
# Setup and Installation
1. Signup at [pubgtracker](https://pubgtracker.com/)
2. Navigate to the [api page](https://pubgtracker.com/site-api) and generate a key
3. Install **pubg.js** `npm install pubg.js --save`
4. When using the wrapper, parse your generated key when creating the client


# Examples
```js
const pubg = require('pubg.js');

const client = new pubg.Client('yourKey');

// Get a user profile by a name and print the users ranking
client.getProfile('ickerio')
    .then(profile => {
        const myRank = profile.getStats({
            region: 'oc',
            season: '2017-pre6',
            match: 'solo'
        }).getItem('Rating').rank;

        console.log(`My ranking in solo, oceania this season is ${myRank}`);
    })
    .catch(console.error);

client.getAccount('76561198114629752')
    .then(a => a.matchHistory())
    .then(matches => {
        console.log(`I dealt ${m[0].damage} in my recent match`)
    });
```

# Web
> API does not accept CORS request, so it currently will not work on Web

In addition to the Node.js environment, pubg.js also fully supports the web. Useful for interacting with the pubg api with static pages or without the use of a backend. All up, the minified version comes down to as little as 37kb. You can find the latest version in the [webpack](https://github.com/ickerio/pubg.js/tree/webpack) branch. To use it, chose one of the following options and `pubg` will be defined in the window scope. Here's a [jsfiddle](https://jsfiddle.net/mat4qfwn/) to get you started!
 - **Download it**: [normal](https://raw.githubusercontent.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://raw.githubusercontent.com/ickerio/pubg.js/webpack/pubg.min.js)
 - **Production**: [normal](https://cdn.rawgit.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://cdn.rawgit.com/ickerio/pubg.js/webpack/pubg.min.js)
 - **Development**: [normal](https://rawgit.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://rawgit.com/ickerio/pubg.js/webpack/pubg.min.js)

# Issues
If you run into any issues, have any queries or concerns or would just like to make a few suggestions please do not hesitate to open an issue, pull request or message me on Discord at `rabb#7134`