# pubg.js Changelog

## v3.5.3
 - Changed badges
 - Spelling fixes in README
 - Many Travis changes and a complete test suite soon to come thanks VERY much to [jamesc2400](https://github.com/jamesc2400)
 - **Webpack** is now fully tested and confirmed fully functional! Use pubg.js in your browser! Woo :))
 - Added pc-ru and pc-jp sharding regions

### v3.5.2
 - Small bugfix for Season.getPlayerSeason and Player.getPlayerSeason
 - All classes are now exposed in index.js

### v3.5.1
 - *Mainly* DOCUMENTATION UPDATE
 - New docs, better theme
 - Added some stuff that was somehow missing from the docs, to the docs
 - `PlayerSeason`.attributes.gameModeStats updated to without the `-`: `duo-fpp` => `duoFPP`

### v3.5.0
 - Added `GameModeStats` and `PlayerSeason` classes, which are returned from `getPlayerStats`
 - all `getPlayerStats` functions have been renamed to `getPlayerSeason`
 - added Player.fetch(shard) as PlayerSeasons give an unfilled Player


### v3.4.0
 - Updated snekfetch dependancy and all devDependencies
 - Added `NOTE: Resolvable an id, or the class itself, eg can be a player Id or a player class`
    * <Client>.getSeasons(shard)
    * <Client>.getPlayerStats(playerResolvable, seasonResolvable, shard)
    * <Player>.getPlayerStats(seasonResolvable)
    * <Season>.getPlayerStats(playerResolvable, shard)
 - Within <Client>.getPlayer(), if only one player is returned eg `({ id: '123' })` or `({ name: 'bob' })`, only the player is returned an NOT an array (QOL improvement)
 - Tidied up a few internals for incorrect shards preventation and nicer code
 - **VERY SOON:** Will finish off the playerStats to be a full class, as currently it's just a JSON
 - TODO: JSDOC Participant, Asset and Roster :))


### v3.2.2
 - Readme changes, currently working on caching - **stay tuned**

### v3.2.1
 - No changes to code
 - Added almost complete JSdoc
 - Removed example.js (for now) and moved docs/changelog.md to CHANGELOG.md

### v3.2.0
 - Added <Client>.getSamples(Date)
 - Added <Client>.getTelemetry(url)
 - Added Match.getTelemetry()
 - Added mapName in Match
 - Made progress in JSdoc. Still not complete

### v3.1.0
 - Intergrated roster, asset, and participant classes
 - Internal `verifyShard` completed
 - <Match>.get() changed to <Match>.fetch()
 - Added status class
 - Finished example and tests
 - Still TODO:
    - Telemetery data
    - Implement JSdoc

### v3.0.0
 - Complete rehaul! Now uses the [official pubg dev api](https://developer.playbattlegrounds.com/). Still a lot of work to do, and quite a few things to update. 
 - TODO: 
    - Add and integrate roster, participant, asset classes
    - Add a status class
    - REDO: example.js, test/index.js
    - Update api docs *urgent*
    - Cover telemetery data in api
    - Internal `verifyShard`

### v2.0.0
 - **HOORAYYY!!!!** Whole new [API v2](https://pubgtracker.com/site-api), and API signups have been reopened
 - Updated readme for new examples
 - Added
    - Profile#matchHistory to get match history of the profile
    - Profile#account to get an account of the profile
    - Account#profile to get a profile from an account
    - Account#matchHistory to get match history from an account
    - Client#getMatchHistory to return an array of all matches
    - Client#getProfile now takes options of season, mode and region in an object for the stats of it
 - Changes to Profile and Account properties, see the docs
 - Match is no longer deprecated
 - Filter keyword `match` or `matches` has been replaced with `mode` for Profile
 - TIP: When getting a profile, use the `options` parameter when possible instead of Profile#getStats parameters
 

### v1.5.4
 - Added Profile#fullAvatar for a full resolution steam avatar URL
 - Added Account#fullAvatarUrl for a full resolution steam avatar URL (exact same as above)

### v1.5.3
 - API update: A failed account get now returns a JSON error, not http. Updated accordingly

### v1.5.2
 - Reverted 1.5.1 due to issues, if you would like to use it, just install it using `npm install pubg.js@1.5.1 --save`

### v1.5.1
 - Nicer README
 - **IMPORTANT** Due to recent api issues I've added minor support to another api which is considerably more reliable with much less down time. To use it, simply add an object paramater to the initialization of the client with `api` set to `pubgtop` For example `new pubg.Client('yourKey', {api: 'pubgtop'});` The change only affects the getProfile function but shouldn't break anything. I hope once Tracker Network is fixed, we'll be able to remove this temporary fix. (You do not need to a key for the `pubgtop` option)

### v1.5.0
 - Added Season 5 in docs
 - More cleanup, less useless promises <3 snek
 - Under the hood index.js changes (moved directory)
 - Removed stat.valueDec and valueInt - Use stat.value
 - Added changelog (for real this time)