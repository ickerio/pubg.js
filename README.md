<p align="center">
    <a href="#"><img src="https://user-images.githubusercontent.com/14541442/32552867-3d44fd8e-c4d0-11e7-85d5-5199697582bd.png"></a>
</p>

<p align="center">
A powerful and light PlayerUnknown's Battlegrounds stats API wrapper,<br/>for Node.js and for the web.
</p>

<p align="center">
   <a href="https://www.npmjs.com/package/pubg.js">
    <img src="https://img.shields.io/npm/v/pubg.js.svg">
  </a>
  <a href="https://www.npmjs.com/package/pubg.js">
    <img src="https://img.shields.io/npm/dt/pubg.js.svg?maxAge=3600">
  </a>
  <a href="https://travis-ci.org/ickerio/pubg.js">
    <img src="https://travis-ci.org/ickerio/pubg.js.svg?branch=master">
  </a>
</p>

###### [pubg.js docs](https://pubg.js.org) | [api docs](https://documentation.playbattlegrounds.com/en/introduction.html) | [changelog](CHANGELOG.md) | [issues](#issues)


pubg.js makes it easy to interact with [the pubg dev api](https://developer.playbattlegrounds.com/). Written with an intelligent and performant api, making it easy for anyone to access a massive database of pubg data, including players stats, matches, teams, events of matches and much more. Built with customizable caching, for maximum performance, and quicker data retrieval. Includes full documentation and IDE auto completion support.

# Setup and Installation
1. Signup at [the pubg dev api site](https://developer.playbattlegrounds.com/)
2. Register an [app](https://developer.playbattlegrounds.com/apps/new?locale=en), giving you a key
3. Install **pubg.js** `npm install pubg.js --save`
4. When using the wrapper, parse your generated key when creating the client


# Examples
```js
// Require model and initiate client with api key
const pubg = require('pubg.js');
const client = new pubg.Client('yourKey', 'region');

// Get a single player using their name
const player = client.getPlayer({name: 'yeye155'})
    .then(player => /* Use an extensive class of data */)
    .catch(error => /* Catch any errors */)

// Retrieve thousands of recent matches, and get stats for any of them
const player = client.getSamples()
    .then(matches => /* Have access to the PUBG's extensive list of matches */)
    .catch(error => /* Catch any errors */)

// Fetch a match with a heap of data on every participant of the match and their stats
const player = client.getSamples()
    .then(match => {
        // Manipulate the data in any way you like, or even get match telemetry data 
        match.fetchTelemetry()
        // View a heap of data on the teams - best k/d, winning team etc
        match.relationships.rosters

    })
    .catch(error => /* Catch any errors */)

```

# Web

In addition to the Node.js environment, pubg.js also fully supports the web. Useful for interacting with the pubg api with static pages or without the use of a backend. All up, the minified version comes down to as little as 17KB. You can find the latest version in the [webpack](https://github.com/ickerio/pubg.js/tree/webpack) branch. To use it, choose one of the following options and `pubg` will be defined in the window scope. It's as simple as the example above but without the need to `require` the package first.
 - **Download it**: [normal](https://raw.githubusercontent.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://raw.githubusercontent.com/ickerio/pubg.js/webpack/pubg.min.js)
 - **Production**: [normal](https://cdn.rawgit.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://cdn.rawgit.com/ickerio/pubg.js/webpack/pubg.min.js)
 - **Development**: [normal](https://rawgit.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://rawgit.com/ickerio/pubg.js/webpack/pubg.min.js)

# Issues
If you run into any issues, have any queries or concerns or would just like to make a few suggestions please do not hesitate to join our [discord support server](https://discord.gg/yCWj2N2)
