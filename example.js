var eddsa = require('.')
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
  if (err) throw err
  // ...
})
