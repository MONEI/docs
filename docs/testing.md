---
id: testing
title: Testing
description: This page includes test card numbers and other information to make sure your integration works as planned.
---

## How to test your integrations

To test your integrations you need to switch to a **test mode** using a switch in the header of your [MONEI Dashboard](https://dashboard.monei.com).

![MONEI Test Mode](/img/test-mode.jpg)

- Generate your test API key and get your test Account ID in [MONEI Dashboard → Settings → API Access](https://dashboard.monei.com/settings/api).
- Configure your payment methods using test credentials in [MONEI Dashboard → Settings → Payment Methods](https://dashboard.monei.com/settings/payment-methods)

:::caution Important
**Account ID** and **API key** you generate in test mode are **different from the live (production) mode** and can only be used for testing purposes.
:::

## Test card numbers

Genuine card information cannot be used in test mode. Instead, use any of the following test card numbers.

- For all test card numbers use **12/34** as an expiration date and **123** as CVC code

| CARD NUMBER      | BRAND                      | DESCRIPTION                               |
| ---------------- | -------------------------- |-------------------------------------------|
| 4444444444444406 | Visa                       | 3D Secure v2.1 Challenge                  |
| 4444444444444414 | Visa                       | 3D Secure v2.1 Direct (no challenge)      |
| 4444444444444422 | Visa                       | 3D Secure v2.1 Frictionless               |
| 4444444444444430 | Visa                       | 3D Secure v2.1 Frictionless and Challenge |
| 5555555555555524 | Mastercard                 | 3D Secure v2.1 Direct (no challenge)      |
| 5555555555555532 | Mastercard                 | 3D Secure v2.1 Frictionless               |
| 5555555555555565 | Mastercard                 | 3D Secure v2.1 Challenge                  |
| 5555555555555573 | Mastercard                 | 3D Secure v2.1 Frictionless and Challenge |

## Test Bizum phone numbers

For all Bizum tests, the phone number to be used is +34500000000

| AMOUNT                    | STATUS CODE                                                 | FLOW     |
| ------------------------- | ----------------------------------------------------------- | -------- |
| Below 5 EUR               | E000 (Transaction approved)                                 | RTP      |
| Between 5 EUR and 10 EUR  | E506 (Error during payment authorization. Please try again) | RTP      |
| Between 10 EUR and 15 EUR | E000 (Transaction approved)                                 | REDIRECT |
| Above 15 EUR              | Phone number is not registered in Bizum                     |          |

:::caution
**In test environment Bizum only supports transactions below 5 EUR**
:::

## Test PayPal Accounts

| TYPE     | EMAIL                       | PASSWORD   | DESCRIPTION                                                                                                                                                                                   |
| -------- | --------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Business | paypal-business@monei.net   | monei12345 | You can link this account in MONEI Dashboard to test PayPal payment method                                                                                                                    |
| Personal | paypal-personal@monei.net   | monei12345 | You can do test payments using this account                                                                                                                                                   |
| Personal | CCREJECT-REFUSED@paypal.com | PayPal2016 | Use this account to simulate a payment failure. PayPal credit and the card ending with 1111 in the PayPal wallet will lead to a successful transaction. The other cards will lead to a decline. |

You can register your own PayPal sandbox account [here](https://sandbox.paypal.com/).
