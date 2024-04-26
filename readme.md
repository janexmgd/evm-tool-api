<font size=17><center>evm-tool-api</center></font>

# API

- create evm wallet

  you can import this private key to evm wallet like metamask, example implementation at example folder

```
POST https://evm-tool-api.vercel.app/wallet/create
```

success response

```
{
  "code": 200,
  "status": "success",
  "message": "success create wallet",
  "data": {
    "address": "0x1d68c80D79e16a79F03a994ac6EB5E0CE09aC67b",
    "privateKey": "5a05f5ae5f278b0fcd4ca589c4395c1902c1d0cd7efa057918c645a05d2387f1"
  }
}
```

- get eth balance

  you can get eth balance by address (supported base mainnet,arb mainnet not tested)

```
GET https://evm-tool-api.vercel.app/wallet/balance?address=YOURADDRESS&network=YOURNETWORK

YOUR ADDRESS = 0X98272Y(YOUR CRYPTO ADDRESS)
YOUR NETWORK = base/arb
```
