export default {
    port: 1337,
    dbUri: 'mongodb://localhost:27017/rest-api-tutorial',
    saltWorkFactory: 10,
    accessTokenTtl : "15m",
    refreshTokenTtl : "1y",
    publickey: `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8TAZjO2cCnpkDXbpSI0jZOWv0
    bSGGljamNdhWNqEZqCXMwEy1HMkGbe5zTYgsdUWrYk6QfCTFRPCHzopERZezp0F4
    T4fo/c+XaXzGi8OsvmMz68WvWX77mMT2G8zYiGdBzIs44iUBxwKMvlkuLrQ2zAYr
    8MYh4sb7DDGSwHCHZQIDAQAB
    -----END PUBLIC KEY-----`,
    privatekey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQC8TAZjO2cCnpkDXbpSI0jZOWv0bSGGljamNdhWNqEZqCXMwEy1
    HMkGbe5zTYgsdUWrYk6QfCTFRPCHzopERZezp0F4T4fo/c+XaXzGi8OsvmMz68Wv
    WX77mMT2G8zYiGdBzIs44iUBxwKMvlkuLrQ2zAYr8MYh4sb7DDGSwHCHZQIDAQAB
    AoGAIzx21YsAM9VJ/P9FJqnDsCK2uP7TD0R85Y2d9kQy0YJN0IsLz7ibRcC8pocT
    vH4Vk4TJ/u+8Uc4c1M0pwqzjPkCar6wzlVDS5tH9f4zC1Ie4j0SJk/sUb4uUaLng
    8WGTO9tVPQr4xIxwJpvp4IPX3Qs8aimf/FdTb57/qtiBDAECQQD1G4y9Mb/V/NGF
    lzutlFsZag9wKxzFligROHdKeTY0+SJBJu4cPJrLbfwKLv5fieXYkN1YfxHOux+X
    jbnch3gFAkEAxKosOJfsnLa5w75vGZWomCzucBBKrHLf4vp0KndNcOQ9ohR2L9O0
    hpZWrCOU4zJQN+UUWvJF3Ub+o+nyGkTP4QJBAJZmX0fAfSw7Q/2rPO1X+UZw9CQp
    8C+14cQfV+OU2RRMQx6jWrxs27c0N9Gv4FqTbTwkOA4TesPVwp7mUkPlxFkCQBXh
    BLhrFnS801/WgM+s2avMW951wYj74rKCwIe07BWiHsU4V4msmMncUdomvzqjb084
    mhIgH+ulKVEdBsUrYKECQQCM7p6k1iGwuZ3Gd3p9iR8v1tEOasm/mLlisKmXMFMO
    TQUlGGCO3avabgHwE4mWLuSz8JYO27HJ8gSEMnVkkCPl
    -----END RSA PRIVATE KEY-----`,
}