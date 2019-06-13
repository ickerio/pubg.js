const pubg = require('../');
const util = require('util');

const client = new pubg.Client(process.env.PUBG_KEY, 'steam');

console.log(`Testing version ${pubg.version} of pubg.js`);

const playerNames = [
  'Zaytt',
  'LEYED',
  'OGSule',
  'Matzito',
  'p4p1rr1n',
  'Sunley5',
  'Lokoprox',
  'EL__FUHRER',
  'MrDiez86',
  'PL4sTiKGirL'
];
const playerNames2 = ['OGSule', 'MrDiez86'];

const playerIds = [
  'account.ce33c4a1f98541068ec656d45b809cfe',
  'account.d6564d57590c4d90b45b0b1d0600df4b',
  'account.3998a66e64414acdb2f2b3c56f7c415f',
  'account.2ddb82d7b5c245248fc97ec0f306c701',
  'account.96224bfae4e947389698ed6e4aa6aba3',
  'account.b33fc6407e114738b312ac87f87c2b40',
  'account.cc15b621c85a45748cfad5f60734726d',
  'account.6d91f48e24b04844a1a6d298ba4c837c',
  'account.0a9e59e1d82a4e38905caf0f682fc090',
  'account.d8adc6b9731d4fe990290c82bae8ac47'
];

const season = 'division.bro.official.pc-2018-03';

// client.getPlayer({ name: 'Zaytt' }).then(res => console.log(res));
// client
//   .getPlayerSeason(
//     'account.ce33c4a1f98541068ec656d45b809cfe',
//     'division.bro.official.pc-2018-03'
//   )
//   .then(res =>
//     console.log(util.inspect(res, false, null, true /* enable colors */))
//   );

// client.getPlayer({ name: 'Zaytt' }).then(res => console.log(res));
// client
//   .getPlayer({ id: playerIds })
//   .then(
//     async p =>
//       await console.log(client.getManyPlayerSeason({ players: p }, season))
//   );

client
  .getManyPlayerSeason({ names: playerNames }, season)
  .then(
    // res => console.log(util.inspect(res, false, null, true /* enable colors */))
    // console.log(res)
  )
  .catch(e => console.log(e));
