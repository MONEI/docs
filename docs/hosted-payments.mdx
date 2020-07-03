---
id: hosted-payments
title: Hosted Payments
sidebar_label: Hosted Payments
---

## What is Hosted Payments?

It is one of the existing ways to implement a Payment Gateway solution (like MONEI) from any website, CMS, or e-commerce platform.

The procedure is quite simple: the website will prepare an order (or request), and delegate the very last step (charge) to the payment gateway (MONEI). The user/consumer will enter the payment details (credit card number and so) in our payment page, and then they will be redirected back to the merchant’s website, along with some details about the result of the operation (whether it was successful or not).

## Process flow

![Hosted Payments flow chart](/img/flow-chart.png)

1. The customer places an order (or a cart checkout) in your platform. They will enter their email, shipping address, delivery method, and any other information you require.

2. On the last step, you will need to do a `POST` request to the Checkout URL, along with the Request Params in the `x-www-form-urlencoded` format. MONEI will verify the signature value and reply with the HTML that should be shown to a customer.

3. The customer pays for the order and validates with the bank through the 3D Secure process.
   Customers that complete the payment flow will be redirected back to url_complete with all the Response Params as query parameters, including signature (see “How to sign requests”). If a visitor cancels the payment flow before successfully completing the same, it will be redirected back to url_cancel.

4. For performance and security reasons, we support asynchronous callbacks. This means that after everything is finished, we will notify you about the result using an HTTP POST request to the `url_callback`, with the same Response Params. This ensures that checkouts can be completed even in cases where the customer's connection is terminated prematurely. Callbacks parameters are in `x-www-form-urlencoded` format.

5. We expect an HTTP 200 response to indicate us the successful receipt of the callback. Otherwise, we will continue with our retrial process, until we reach 10 failed requests.

6. The order is complete, and you can show a "thank-you" page to the customer.

## Transactions

We currently support 5 different types of transactions: `sale`, `auth`, `capture`, `void` and `refund`.

### Sale & Auth

```
https://pay.monei.net/checkout
```

These two operations are quite similar and share all the same Request Params, except for the `transaction_type`.

The main difference is that a `sale` transaction will instantly charge the customer, while an `auth` will only check if the payment information is valid and retain/freeze the amount of money until you decide to `capture` or `void` the payment.

### Capture & Void

```
https://api.monei.net/v1/capture
```

```
https://api.monei.net/v1/void
```

In order to finish an `auth` process, you will need to execute either a `capture` or a `void` operation. The `capture` action will take the previous `auth`, and convert it into a charge. Whereas a `void` transaction will cancel the `auth` and release the retained money in the customer’s credit/debit card.

:::note
An authorized transaction can only be captured once, and that the captured amount can be equal or less than the one previously authorized.
:::

Please refer to the Request Params section to check which values are required in `capture` or `void` request.

### Refunds

```
https://api.monei.net/v1/refund
```

After a successful `sale` or `capture`, a charge is placed. At this point, the only way to “go back” is to do a refund.

Calling the refund endpoint will require you to specify which charge you want to refund. This will take that previous charge, and return to the customer the specified amount.

On the very same charge, it is possible to do either a full refund or many partial refunds, until the whole amount is refunded. Please refer to the Request Params section to check which values are required in a refund request.

## Request Params

| Key                                                                                                                                              | <div style={{width: 140}}>Type</div>                          | Example                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------------ |
| **account_id** `required` <br/>Account identifier you can find in your credentials.                                                              | string                                                        | aaaaaaaa-1111-bbbb-2222-cccccccccccc |
| **amount** `required`                                                                                                                            | string                                                        | 19.99                                |
| **currency** `required`                                                                                                                          | [iso_4217](https://en.wikipedia.org/wiki/ISO_4217)            | EUR                                  |
| **order_id** `required` <br/>Unique reference or identifier of an order assigned by the merchant.                                                | string <br/>(1-32)[a-zA-Z0-9]                                 | X25921                               |
| **checkout_id** `required` for capture, void and refund. <br/>Unique identifier previously provided by MONEI during an auth or sale transaction. | string                                                        | a991c3df2afebbbda26d1d72ff8818a0     |
| **shop_country** `required`                                                                                                                      | [iso-3166-1alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1) | ES                                   |
