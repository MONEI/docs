---
id: charges-api
title: Charges API
---

## Create charge

```
POST https://api.monei.net/v1/charges
```

```json
{
  "payment": {
    "token": "7cc38b08ff471ccd313ad62b23b9f362b107560b",
    "save": true
  },
  "transaction_type": "auth",
  "order_id": "aaaa123456",
  "account_id": "c03303a7-8a24-4298-a3a3-545c3205c548",
  "amount": "10.25",
  "currency": "EUR",
  "session": {
    "ip": "181.164.214.150",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"
  }
}
```

```json
{
  "order_id": "aaaa123456",
  "account_id": "c03303a7-8a24-4298-a3a3-545c3205c548",
  "amount": "10.25",
  "currency": "EUR",
  "charges": {
    "data": [],
    "has_more": false,
    "url": "/v1/charges?checkout_id=pi_1Dg58t2eZvKYlo2CgrE1NRFw"
  }
}
```
