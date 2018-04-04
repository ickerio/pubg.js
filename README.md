# pubg.js [![Travis-ci](https://travis-ci.org/ickerio/pubg.js.svg?branch=master)](https://travis-ci.org/ickerio/pubg.js) [![npm downloads](https://img.shields.io/npm/dt/pubg.js.svg?maxAge=3600)](https://www.npmjs.com/package/pubg.js) [![Dependencies](https://img.shields.io/david/ickerio/pubg.js.svg?maxAge=3600)](https://david-dm.org/ickerio/pubg.js) [![RunKit](https://badge.runkitcdn.com/pubg.js.svg)](https://npm.runkit.com/pubg.js)

<img src="https://user-images.githubusercontent.com/14541442/32552867-3d44fd8e-c4d0-11e7-85d5-5199697582bd.png" width="250" align="right">

###### [API](docs/api.md) | [Changelog](docs/changelog.md) | [Issues](#issues)

A powerful and light PlayerUnknown's Battlegrounds stats API wrapper, for Node.js and for the web.
 
# Setup and Installation
1. Signup at [the pubg dev api site](https://developer.playbattlegrounds.com/)
2. Register an [app](https://developer.playbattlegrounds.com/apps/new?locale=en), giving you a key
3. Install **pubg.js** `npm install pubg.js --save`
4. When using the wrapper, parse your generated key when creating the client


# Examples
```js
const pubg = require('pubg.js');
const client = new pubg.Client('yourKey');

// Get a single player using their name
const player = await client.getPlayer({name: 'yeye155'});

// Get the player's most recent match
const match = await player[0].relationships.matches[0].get()

console.log(`${player.attributes.name} played in a ${match.attributes.duration} second match in ${match.attributes.gameMode} gamemode`)
// => yeye155 played in a 1884 second match in solo gamemode
```

# Web
> Currently untested in v3

In addition to the Node.js environment, pubg.js also fully supports the web. Useful for interacting with the pubg api with static pages or without the use of a backend. All up, the minified version comes down to as little as 37kb. You can find the latest version in the [webpack](https://github.com/ickerio/pubg.js/tree/webpack) branch. To use it, chose one of the following options and `pubg` will be defined in the window scope. Here's a [jsfiddle](https://jsfiddle.net/mat4qfwn/) to get you started!
 - **Download it**: [normal](https://raw.githubusercontent.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://raw.githubusercontent.com/ickerio/pubg.js/webpack/pubg.min.js)
 - **Production**: [normal](https://cdn.rawgit.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://cdn.rawgit.com/ickerio/pubg.js/webpack/pubg.min.js)
 - **Development**: [normal](https://rawgit.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://rawgit.com/ickerio/pubg.js/webpack/pubg.min.js)

# Issues
If you run into any issues, have any queries or concerns or would just like to make a few suggestions please do not hesitate to open an issue, pull request or message me on Discord at `rabb#7134`
