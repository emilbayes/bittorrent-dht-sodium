# `bittorrent-dht-sodium`

[![Build Status](https://travis-ci.org/emilbayes/bittorrent-dht-sodium.svg?branch=master)](https://travis-ci.org/emilbayes/bittorrent-dht-sodium)

> Sodium wrapper for working with BEP44 on bittorrent-dht

## Usage

```js
var eddsa = require('bittorrent-dht-sodium')
const DHT = require('bittorrent-dht')
const dht = new DHT({
  verify: eddsa.verify
})

const keys = eddsa.keygen()

dht.put({
  v: Buffer.from('Hello world'),
  k: keys.pk,
  seq: 0,
  sign: (msg) => {
    return eddsa.sign(msg, keys.sk)
  }
}, function (err, hash) {
  // ...
})
```

## API

### ``

## Install

```sh
npm install bittorrent-dht-sodium
```

## License

[ISC](LICENSE)
