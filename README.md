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

### `const { pk, sk } = eddsa.keygen([sk])`

Derive a Ed25519 keypair, optionally deriving the `pk` from an exisiting `sk`.
Returns `pk` as Public Key, `sk` as Secret Key. The `sk` here is not compatible
with `ed25519-supercop`, as the encoding is different, but signatures will be
the same.

### `const sig = eddsa.sign(msg, sk)`

Sign `Buffer` `msg` with `sk` returning the signature as a `Buffer`

### `const valid = eddsa.verify(sig, msg, pk)`

Verify `Buffer` `sig` against `Buffer` `msg` with `pk` returning boolean whether
valid or not.

### `const salt = eddsa.salt()`

Generate a 20 byte random salt.

## Install

```sh
npm install bittorrent-dht-sodium
```

## License

[ISC](LICENSE)
