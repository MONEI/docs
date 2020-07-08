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
- `style` (object) - Customize the appearance of this component using CSS properties passed in a [Style](#cardinput-style-object) object.
- `placeholders` (object) - Customize input placeholders
  - `cardNumber` (string) - Card number placeholder. Default: "Card number"
  - `expiryDate` (string)- Expiry date placeholder. Default: "MM/YY"
  - `cvc` (string) - CVC placeholder. Default: "CVC"
- `errorMessages` (object) - Customize error messages
  - `emptyCardNumber` - Default: "Enter a card number"
  - `invalidCardNumber` - Default: "Card number is invalid"
  - `emptyExpiryDate` - Default: "Enter an expiry date"
  - `monthOutOfRange` - Default: "Expiry month must be between 01 and 12"
  - `yearOutOfRange` - Default: "Expiry year cannot be in the past"
  - `dateOutOfRange` - Default: "Expiry date cannot be in the past"
  - `invalidExpiryDate` - Default: "Expiry date is invalid"
  - `emptyCVC` - Default: "Enter a CVC"
  - `invalidCVC` - Default: "CVC is invalid"

### CardInput Style object

UI components are styled using a Style object, which consists of CSS properties nested under objects for any of the following variants:

- `base` - base component style
- `loading` - base component style when component is loading
- `invalid` - applied when the component has invalid input
- `input` - applied to individual inputs
- `cardNumber` - applied to card number input
- `expiryDate` - applied to expiry date input
- `cvc` - applied to cvc input
- `icon` - applied to icon

The following pseudo-classes and pseudo-elements can also be styled using a nested object inside of a variant:

- `:focus`
- `:hover`
- `::placeholder`
- `::selection`
- `:-webkit-autofill`

```js
var style = {
  base: {
    height: '44px',
    padding: '8px 12px'
  },
  loading: {
    backgroundColor: '#F4F4F4'
  },
  input: {
    color: '#8961a5',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#848589'
    },
    '-webkit-autofill': {
      backgroundColor: '#FAFFBD'
    }
  },
  invalid: {
    color: '#fa755a'
  }
};
```
