const test = require('tape')
const eddsa = require('.')

test('simple', function (assert) {
  const keys = eddsa.keygen()

  eddsa.salt()
  const sig = eddsa.sign(Buffer.from('Hello world'), keys.sk)

  assert.ok(eddsa.verify(sig, Buffer.from('Hello world'), keys.pk))
  assert.end()
})
