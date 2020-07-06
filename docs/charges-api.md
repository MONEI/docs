---
id: charges-api
title: Charges API
---

## Create charge (without payment)

```
POST https://api.monei.net/v1/charge
```

#### Request
```json
{
  "amount": 10.25,
  "order_id": "aaaa123456",
  "transaction_type": "sale",
  "url_callback": "https://your-shop.com/callback?order_id=aaaa123456",
  "url_complete": "https://your-shop.com/complete?order_id=aaaa123456"
}
```
We will use the default currency.

#### Response
```json
{
  "id": "ch_059a01f07ff1949f1fb5ab",
  "amount": 10.25,
  "currency": "EUR",
  "order_id": "aaaa123456",
  "next_action": {
    "type": "redirect_payment",
    "url": "https://pay.monei.net/charge/ch_059a01f07ff1949f1fb5ab"
  },
  "status": "PENDING_PAYMENT"
}
```
You can either redirect to the next action or use the id to initialize the payment widget.

## Create charge (with payment)

```
POST https://api.monei.net/v1/charge
```

#### Request
```json
{
  "amount": 10.25,
  "order_id": "aaaa123456",
  "payment": {
    "token": "7cc38b08ff471ccd313ad62b23b9f362b107560b",
    "save": true
  },
  "session": {
    "ip": "181.164.214.150",
    "user_agent": "Mozilla/5.0 (Win...Chrome/71.0.3578.98 Safari/537.36"
  },
  "transaction_type": "auth",
  "url_callback": "https://your-shop.com/callback?order_id=aaaa123456",
  "url_complete": "https://your-shop.com/complete?order_id=aaaa123456"
}
```

#### Response
```json
{
  "id": "ch_059a01f07ff1949f1fb5ab",
  "amount": 10.25,
  "currency": "EUR",
  "order_id": "aaaa123456",
  "next_action": {
    "type": "redirect_challenge",
    "url": "https://api.monei.net/v1/charge/ch_059a01f07ff1949f1fb5ab/challenge"
  },
  "status": "PENDING_CHALLENGE"
}
```



## Capture charge

```
POST https://api.monei.net/v1/charge/{id}/capture
```

#### Request
```json
{}
```
By default, we will capture the whole amount.

#### Response
```json
{
  "id": "ch_059a01f07ff1949f1fb5ac",
  "amount": 10.25,
  "currency": "EUR",
  "order_id": "aaaa123456",
  "status": "SUCCEEDED"
}
```



## Void charge

```
POST https://api.monei.net/v1/charge/{id}/void
```

#### Request
```json
{}
```

#### Response
```json
{
  "id": "ch_059a01f07ff1949f1fb5ac",
  "amount": 10.25,
  "currency": "EUR",
  "order_id": "aaaa123456",
  "status": "CANCELED"
```


## Refund charge

```
POST https://api.monei.net/v1/charge/{id}/refund
```

#### Request
```json
{}
```
By default, we will refund the whole amount.

#### Response
```json
{
  "id": "ch_059a01f07ff1949f1fb5ac",
  "amount": 10.25,
  "currency": "EUR",
  "order_id": "aaaa123456",
  "refunded_amount": 10.25,
  "status": "REFUNDED"
}
```
