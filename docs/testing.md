---
id: testing
title: Testing
description: This page includes test card numbers and other information to make sure your integration works as planned.
---

This page includes test card numbers and other information to make sure your integration works as planned. Use it to trigger different flows in your integration and ensure they are handled accordingly.

- For all test card numbers use **12/34** as an expiration date and **123** as CVC code
- In 3D secure mode, in which buyer authentication is required, the personal identification code is: **123456**

## Test card numbers

Genuine card information cannot be used in test mode. Instead, use any of the following test card numbers.

| CARD NUMBER      | BRAND      | DESCRIPTION   |
| ---------------- | ---------- | ------------- |
| 4444444444444414 | Visa       | Non 3D secure |
| 4444444444444406 | Visa       | 3D Secure     |
| 5555555555555508 | Mastercard | 3D Secure     |

## Testing for specific errors

The following test cards can be used to create payments that produce specific responses—useful for testing different scenarios and error codes.

| CARD NUMBER      | BRAND      | STATUS CODE                           |
| ---------------- | ---------- | ------------------------------------- |
| 4444444444444505 | Visa       | 190 (Refusal with no specific reason) |
| 5555555555555607 | Mastercard | 190 (Refusal with no specific reason) |
