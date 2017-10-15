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

###### [API](docs/api.md) | [Changelog](docs/changelog.md) | [Issues](#issues)


# Setup and Installation
1. Signup at [pubgtracker](https://pubgtracker.com/)
2. Navigate to the [api page](https://pubgtracker.com/site-api) and generate a key
3. Install **pubg.js** `npm install pubg.js --save`
4. When using the wrapper, parse your generated key when creating the client


# Example
```js
const pubg = require('pubg.js');

const client = new pubg.Client('yourKey');

client.getProfile('ickerio')
    .then(profile => {
        const myRank = profile.getStats({
            region: 'oc',
            season: '2017-pre4',
            match: 'solo'
        }).getItem('Rating').rank;

        console.log(`My ranking in solo, oceania this season is ${myRank}`);
    })
    .catch(console.error);
```

# Web
> At the moment I'm having a CORS issue with snekfetch, am currently trying to resolve it.

In addition to the Node.js environment, pubg.js also fully supports the web. Useful for interacting with the pubg api with static pages or without the use of a backend. All up, the minified version comes down to as little as 37kb. You can find the latest version in the [webpack](https://github.com/ickerio/pubg.js/tree/webpack) branch. To use it, chose one of the following options and `pubg` will be defined in the window scope. Here's a [jsfiddle](https://jsfiddle.net/mat4qfwn/) to get you started!
 - **Download it**: [normal](https://raw.githubusercontent.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://raw.githubusercontent.com/ickerio/pubg.js/webpack/pubg.min.js)
 - **Production**: [normal](https://cdn.rawgit.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://cdn.rawgit.com/ickerio/pubg.js/webpack/pubg.min.js)
 - **Development**: [normal](https://rawgit.com/ickerio/pubg.js/webpack/pubg.js), [minified](https://rawgit.com/ickerio/pubg.js/webpack/pubg.min.js)

# Issues
If you run into any issues, have any queries or concerns or would just like to make a few suggestions please do not hesitate to open an issue, pull request or message me on Discord at `rabb#7134`