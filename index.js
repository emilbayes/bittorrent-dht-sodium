const sodium = require('sodium-native')

module.exports = {
  verify: sodium.crypto_sign_verify_detached,
  sign (msg, sk) {
    const sig = Buffer.alloc(sodium.crypto_sign_BYTES)
    sodium.crypto_sign_detached(sig, msg, sk)
    return sig
  },
  keygen (sk) {
    const pk = Buffer.alloc(sodium.crypto_sign_PUBLICKEYBYTES)
    if (sk == null) {
      sk = sodium.sodium_malloc(sodium.crypto_sign_SECRETKEYBYTES)
      sodium.crypto_sign_keypair(pk, sk)
    } else {
      sodium.crypto_sign_ed25519_sk_to_pk(pk, sk)
    }

    return { pk, sk }
  },
  salt () {
    const s = Buffer.alloc(64)
    sodium.randombytes_buf(s)
    return s
  }
}
