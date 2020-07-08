---
id: hosted-payment-page
title: Hosted payment page
---

Use the hosted payment page to securely collect payments from your customers.

![Hosted payments preview](/img/payment-page-preview.png)

[Live preview](https://js.monei.net/v1/payment-page/#eyJzaG9wTG9nb1VybCI6Imh0dHBzOi8vbW9uZWktcHJvZC1zZXJ2aWNlLWJ1Y2tldC5zMy5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9wcm90ZWN0ZWQvZXUtd2VzdC0xJTNBNTI5M2JmZDItYTliYi00ZmQ1LTgwYjctYmJmNzY2YjhlMGJlL3JjLXVwbG9hZC0xNTg2NDI1MzQ2NDM0LTMuc3ZnIiwiYWNjZW50Q29sb3IiOiIjRDkyMjJBIiwiYmdDb2xvciI6IiNmMGY0ZjUiLCJ0ZXN0IjpmYWxzZSwicGF5bWVudE1ldGhvZHMiOlsiQ1JFRElUQ0FSRCIsIkJJWlVNIl0sInNob3BOYW1lIjoiTWVkaWFNYXJrdCIsImxhbmd1YWdlIjoiZW4ifQ==)

MONEI hosted payment page makes it easy to build a first-class payments experience:

- **Designed to remove friction** — Real-time card validation with built-in error messaging
- **Mobile-ready** — Fully responsive design
- **International** — Supports 13 languages
- **Multiple payment methods** — Supports multiple payments methods
- **Customization and branding** — Customizable buttons and background color
- **3D Secure** — Supports 3D Secure verification process
- **Fraud and compliance** — Simplified PCI compliance and SCA-ready

## Process overview

![Hosted payments process overview](/img/hosted-payments-flow.png)

1. Merchant does a `POST` request to `https://pay.monei.net/checkout`, providing order details and signature.

2. Custom is redirected to the MONEI payment page.

3. Customer pays for the order and goes through 3D secure verification process (is redirected to his bank for confirmation of the transaction).

4. Customers that complete the payment flow will be redirected back to `url_complete`. If payment is canceled, a customer will be redirected back to `url_cancel`.

5. MONEI supports asynchronous callbacks. This means that after a checkout is finished, MONEI will notify merchant about the result using an HTTP `POST` request to the `url_callback`.

6. The checkout is complete, and merchant can show a "thank-you" page to the customer.
