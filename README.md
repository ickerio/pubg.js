<p align="center">
    <img alt="pubg.js" src="https://i.imgur.com/YzaajHA.png" width="250"/>
</p>

# Installation
```
npm install https://github.com/ickerio/pubg.js --save
```

# Example
```js
const pubgClient = require('../');

const client = new pubgClient('yourKey');
client.getProfile('ickerio').then(p => {

    const myStat = p.getStats({
        region: 'oc',
        season: '2017-pre4',
        match: 'solo'
    });
    console.log(myStat);
});
```

# Documentation
Coming soon...