---
id: monei-js-api-reference
title: MONEI JS Reference
sidebar_label: API Reference
---

This reference documents every object and method available in MONEI’s browser-side JavaScript library, monei.js.

You can use monei.js’ APIs to tokenize customer information, collect sensitive card data using customizable MONEI UI Components

## Including monei.js

Include the `monei.js` script on the checkout page of your site — it should always be loaded directly from `https://js.monei.net`, rather than included in a bundle or hosted yourself.

```html
<script src="https://js.monei.net/v1/monei.js"></script>
```

### Using monei.js as a module

We also provide an npm package that makes it easier to load and use monei.js as a module.

```shell script
npm i @monei-js/components
```

## `monei` object

The monei object is your entrypoint to the rest of the monei.js SDK.

## `monei.CardInput` component

CardInput is a customizable UI component used to collect sensitive information in your payment forms.

### Create an instance of the CardInput component.

```js
var cardInput = monei.CardInput({
  // Your MONEI account ID
  accountId: 'fe6432a7-8a24-4288-a3a3-545c3205b549'
});
```

### CardInput options

- `accountId` (string) - Your MONEI account ID, required if you're initializing card input with account ID and order ID
- `orderId` (string) - Unique order ID in your system. Generated payment token will be bound to this order id and can be only used for the charge with the same `orderId`
- `chargeId` (string) - A charge ID provided by MONEI in create charge request. Instead of passing `accountId` and `orderId` you can initialize a card input with the `chargeId` directly. Generated payment token will be bound to this charge.
