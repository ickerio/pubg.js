# pubg.js Changelog

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