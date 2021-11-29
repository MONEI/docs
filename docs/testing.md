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
- In 3D secure mode, in which buyer authentication is required, the personal identification code is: **123456**

| CARD NUMBER      | BRAND                      | DESCRIPTION                 |
| ---------------- | -------------------------- | --------------------------- |
| 4444444444444414 | Visa                       | Non 3D secure               |
| 4444444444444406 | Visa                       | 3D Secure v1                |
| 4444444444444422 | Visa                       | 3D Secure v2.1 Challenge    |
| 4444444444444430 | Visa                       | 3D Secure v2.1 Frictionless |
| 4444444444444448 | Visa                       | 3D Secure v2.2 Challenge    |
| 4444444444444455 | Visa                       | 3D Secure v2.2 Frictionless |
| 5555555555555508 | Mastercard                 | 3D Secure                   |
| 3680000000000001 | Diners Club International  | Non 3D Secure               |
| 3680000000000001 | JCB                        | Non 3D Secure               |

## Testing for specific errors

The following test cards can be used to create payments that produce specific responses—useful for testing different scenarios and error codes.

| CARD NUMBER      | BRAND                      | STATUS CODE                               |
| ---------------- | -------------------------- | ----------------------------------------- |
| 4444444444444505 | Visa                       | E201 (Transaction declined by processor)  |
| 5555555555555607 | Mastercard                 | E501 (Card rejected: invalid card number) |
| 3680000000000118 | Diners Club International  | E501 (Card rejected: invalid card number) |
| 3500000000000108 | JCB                        | E501 (Card rejected: invalid card number) |

## Test Bizum phone numbers

| PHONE NUMBER | STATUS CODE                                                 |
| ------------ | ----------------------------------------------------------- |
| +34500000000 | E000 (Transaction approved)                                 |
| +34700000000 | E506 (Error during payment authorization. Please try again) |

:::caution
**In test environment Bizum only supports transactions below 10 EUR**
:::

## Test PayPal Accounts

| TYPE     | EMAIL                       | PASSWORD   | DESCRIPTION                                                                                                                                                                                   |
| -------- | --------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Business | paypal-business@monei.net   | monei12345 | You can link this account in MONEI Dashboard to test PayPal payment method                                                                                                                    |
| Personal | paypal-personal@monei.net   | monei12345 | You can do test payments using this account                                                                                                                                                   |
| Personal | CCREJECT-REFUSED@paypal.com | PayPal2016 | Use this account to simulate payment failure. PayPal credit and the card ending with 1111 in the PayPal wallet will lead to a successful transaction. The other cards will lead to a decline. |

You can register your own PayPal sandbox account [here](https://sandbox.paypal.com/).
