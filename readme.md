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

- get eth balance / specific token balance

  you can get eth balance by address (supported base mainnet,arb mainnet not tested)

```
GET https://evm-tool-api.vercel.app/wallet/balance/YOURNETWORK?address=YOURADDRESS&ca=0xajaj

YOUR ADDRESS = 0X98272Y(YOUR CRYPTO ADDRESS)
YOUR NETWORK = base/arb
ca = TOKEN CA (OPTIONAL)
```

- get all token balance

  you can get the token with non zero balance at your wallet

```
GET https://evm-tool-api.vercel.app/wallet/balance/token/base?address=YOURADDRESSS
```

example response success

```
{
 "code": 200,
 "status": "success",
 "message": "success get balance all token",
 "data": {
   "network": "base-mainnet",
   "address": "0x449596f13eAB8eEf61Ad6184B0454525dF932E79",
   "balance": [
     {
       "contractAddress": "0x0481552f07cd13ce343e6fb61e5393481d3ea602",
       "balance": "0.00000002"
     },
     {
       "contractAddress": "0x08f94db9a593ed9ce00007da19757f9af48960b2",
       "balance": "0.00000000000010561"
     },
     {
       "contractAddress": "0x0cb6e7d5c7130ab52f0308e8cf9bc3030d49466f",
       "balance": "0.0"
     },
     {
       "contractAddress": "0x148bd7c80b42bf309bc39177159f6628bdf73296",
       "balance": "0.00000000000354631"
     },
     {
       "contractAddress": "0x16a84ecfc84d946b415c97e6466636c8ef01327b",
       "balance": "0.00000000000364517"
     },
     {
       "contractAddress": "0x19225f002b65eefb22950b9739fc8b448d900d44",
       "balance": "0.00000000000025"
     },
     {
       "contractAddress": "0x1b6a569dd61edce3c383f6d565e2f79ec3a12980",
       "balance": "4.2"
     },
     {
       "contractAddress": "0x26694e262b71fed579ff581dea25ed7c9e9ee5c8",
       "balance": "0.000000000017552393"
     },
     {
       "contractAddress": "0x2766bb905ae4727a4e1b7875649be4283b334a4a",
       "balance": "0.0024"
     },
     {
       "contractAddress": "0x3a93a73741a574e6663a4cecba28853554ecd7dc",
       "balance": "0.00000000000364517"
     },
     {
       "contractAddress": "0x4200000000000000000000000000000000000006",
       "balance": "0.0"
     },
     {
       "contractAddress": "0x4229c271c19ca5f319fb67b4bc8a40761a6d6299",
       "balance": "5860.0"
     },
     {
       "contractAddress": "0x4498cd8ba045e00673402353f5a4347562707e7d",
       "balance": "0.0"
     },
     {
       "contractAddress": "0x4ed4e862860bed51a9570b96d89af5e1b0efefed",
       "balance": "10998.999999999999475712"
     },
     {
       "contractAddress": "0x53b3129d421f104264503489182c54c87b440b4a",
       "balance": "0.0"
     },
     {
       "contractAddress": "0x5409ed5f0f59f1065e979f88eb9fd41162c98ebc",
       "balance": "97000.0"
     },
     {
       "contractAddress": "0x5b5dee44552546ecea05edea01dcd7be7aa6144a",
       "balance": "2000.071430777110289245"
     },
     {
       "contractAddress": "0x6103c2b654b70c3379f750b629808da0b03a599e",
       "balance": "0.000000000001752393"
     },
     {
       "contractAddress": "0x6e259376bac4ab281c9d1c89a6c0149d7e8a0d42",
       "balance": "0.0"
     },
     {
       "contractAddress": "0x6f37006b85b8440b8e59d3e38d14d85123346fb5",
       "balance": "35000.0"
     },
     {
       "contractAddress": "0x70737489dfdf1a29b7584d40500d3561bd4fe196",
       "balance": "0.0"
     },
     {
       "contractAddress": "0x734e5a87f4cc553ee80855f30ab09e4b5acdb14d",
       "balance": "0.00000000021"
     },
     {
       "contractAddress": "0x7588e6d98acb60bd4fd436bd94a557a2cfb1f3ad",
       "balance": "0.0"
     },
     {
       "contractAddress": "0x7d89e05c0b93b24b5cb23a073e60d008fed1acf9",
       "balance": "0.0"
     },
     {
       "contractAddress": "0x83e7e958f6e637f203de1080a4256ded55e0fc77",
       "balance": "0.00000000000364517"
     },
     {
       "contractAddress": "0x90d1fd864c1d0607f39be43202cf35216e70578e",
       "balance": "0.0000000000025"
     },
     {
       "contractAddress": "0x91fab2d5a448fb44e3db836f4edeaa2310fa5715",
       "balance": "10.0"
     },
     {
       "contractAddress": "0x9723e15361892242262ac7c3762316e131f2011b",
       "balance": "7250.0"
     },
     {
       "contractAddress": "0x9a6fd5a42f4b4b5d9064441e9ad9e3c983b36cc4",
       "balance": "1.0"
     },
     {
       "contractAddress": "0x9bc1a3e002268f9a90042c40076cb1ff77f23f9e",
       "balance": "0.000000000000273108"
     },
     {
       "contractAddress": "0x9de16c805a3227b9b92e39a446f9d56cf59fe640",
       "balance": "0.0"
     },
     {
       "contractAddress": "0xa0c05e2eed05912d9eb76d466167628e8024a708",
       "balance": "0.0"
     },
     {
       "contractAddress": "0xa772b1624be633487edf6f166ad8622d6e2dd867",
       "balance": "1.0"
     },
     {
       "contractAddress": "0xa7ea9d5d4d4c7cf7dbde5871e6d108603c6942a5",
       "balance": "60.0"
     },
     {
       "contractAddress": "0xcb2861a1ec1d0392afb9e342d5aa539e4f75b633",
       "balance": "0.0"
     },
     {
       "contractAddress": "0xcde172dc5ffc46d228838446c57c1227e0b82049",
       "balance": "6.9"
     },
     {
       "contractAddress": "0xd49bd9397ebcc75333993ba42b8a004df8b405f6",
       "balance": "7472.809394432825750307"
     },
     {
       "contractAddress": "0xd5e842aaeaeab0e0b1999a311a35a689c7409788",
       "balance": "0.0"
     },
     {
       "contractAddress": "0xda9d200a1626a991e810d4a71f60ee970fe3933c",
       "balance": "0.0000000001"
     },
     {
       "contractAddress": "0xdc91170e9627d9ebedd777a267032e94143a9466",
       "balance": "0.000000000000273108"
     },
     {
       "contractAddress": "0xdd7a13b576531d785ee5601546abfd61d817ea9d",
       "balance": "0.000000000976848216"
     },
     {
       "contractAddress": "0xe8613a4f6215641feef15af8e66d17b62bc3828d",
       "balance": "100000.0"
     },
     {
       "contractAddress": "0xe906bd44a9364c5b88a1a60fc35c24c10312ee5e",
       "balance": "0.000000000001522225"
     },
     {
       "contractAddress": "0xf34e1d2451667efa7d7c36af279fde102d29ea68",
       "balance": "0.000000000000354291"
     },
     {
       "contractAddress": "0xfc73b6b8de5a86311e6bb1fa5628dbd152849d90",
       "balance": "0.000000000000537463"
     }
   ]
 }
}
```
