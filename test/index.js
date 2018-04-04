const pubg = require('../');

const client = new pubg.Client(process.env.PUBG_KEY);

console.log(`Testing version ${pubg.version} of pubg.js`);

// TODO for v3