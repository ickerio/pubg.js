# pubg.js Changelog

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