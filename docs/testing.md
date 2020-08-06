---
id: testing
title: Testing
description: This page includes test card numbers and other information to make sure your integration works as planned.
---

This page includes test card numbers and other information to make sure your integration works as planned. Use it to trigger different flows in your integration and ensure they are handled accordingly.

- For all test card numbers use **12/20** as an expiration date and **123** as CVC code
- In 3D secure mode, in which buyer authentication is required, the personal identification code is: **123456**

## Test card numbers

Genuine card information cannot be used in test mode. Instead, use any of the following test card numbers.

| CARD NUMBER      | DESCRIPTION   |
| ---------------- | ------------- |
| 4548812049400004 | Non 3D secure |
| 4918019199883839 | 3D Secure     |

## Testing for specific errors

The following test cards can be used to create payments that produce specific responses—useful for testing different scenarios and error codes.

| CARD NUMBER      | STATUS CODE                           | DESCRIPTION                            |
| ---------------- | ------------------------------------- | -------------------------------------- |
| 5576440022788500 | 190 (Refusal with no specific reason) |
| 4907277775205123 | 190 (Refusal with no specific reason) | EMV3DS 2.1 FRICTIONLESS with 3DSMethod |
| 4907271141151707 | 190 (Refusal with no specific reason) | EMV3DS 2.1 CHALLENGE with 3DSMethod    |
| 5410082854557833 | 184 (Authentication error)            | EMV3DS 2.1                             |
| 541008820800685  | 184 (Authentication error)            | EMV3DS 2.1                             |
