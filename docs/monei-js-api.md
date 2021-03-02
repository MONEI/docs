---
id: monei-js-api
title: MONEI JS Reference
sidebar_label: Reference
description: You can use monei.js’ APIs to tokenize customer information, collect sensitive card data using customizable MONEI UI Components
---

This reference documents every object and method available in MONEI’s browser-side JavaScript library, monei.js.

You can use monei.js’ APIs to tokenize customer information, collect sensitive card data using customizable MONEI UI Components

## Including monei.js

Include the **monei.js** script on the checkout page of your site — it should always be loaded directly from `https://js.monei.com`, rather than included in a bundle or hosted yourself.

```html
<script src="https://js.monei.com/v1/monei.js"></script>
```

### Using monei.js as a module

We also provide an npm package, that makes it easier to load and use monei.js as a module.

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
  paymentId: 'af6029f80f5fc73a8ad2753eea0b1be0',
  ...otherOptions
});

// render component on a page
cardInput.render('#card_input_container');
```

### CardInput options

- **paymentId** `string` - A payment ID provided by MONEI in [create payment](/api/#operation/payments_create) request. Generated payment token will be bound to this payment.
- **accountId** `string` - Your MONEI account ID. Required if you're initializing card input with account ID. Instead of passing **paymentId** you can initialize a card input with the **accountId** and **sessionId** (optional). Generate a payment token before you create the payment itself.
- **sessionId** `string` - Unique session ID in your system. Provide a different **sessionId** for each customer. Use this parameter to ensure that the customer who generated the token is the same as the one doing the payment. Only required if you pass a token to your server. If you provide a **sessionId** when initializing MONEI component you will need to provide the same value when you [create a payment](/api/#section/Payment-object) on your server.
- **style** `object` - Customize the appearance of this component using CSS properties passed in a [Style](#cardinput-style-object) object.
- **placeholders** `object` - Customize input placeholders
  - **cardNumber** `string` - Card number placeholder. Default: "Card number"
  - **expiryDate** `string`- Expiry date placeholder. Default: "MM/YY"
  - **cvc** `string` - CVC placeholder. Default: "CVC"
- **errorMessages** `object` - Customize error messages
  - **emptyCardNumber** `string` - Default: "Enter a card number"
  - **invalidCardNumber** `string` - Default: "Card number is invalid"
  - **emptyExpiryDate** `string` - Default: "Enter an expiry date"
  - **monthOutOfRange** `string` - Default: "Expiry month must be between 01 and 12"
  - **yearOutOfRange** `string` - Default: "Expiry year cannot be in the past"
  - **dateOutOfRange** `string` - Default: "Expiry date cannot be in the past"
  - **invalidExpiryDate** `string` - Default: "Expiry date is invalid"
  - **emptyCVC** `string` - Default: "Enter a CVC"
  - **invalidCVC** `string` - Default: "CVC is invalid"
- **onFocus:() => void** `function` - Callback function that is called when card input is focused
- **onBlur:() => void** `function` - Callback function that is called when card input is blurred
- **onLoad:() => void** `function` - Callback function that is called when card input is fully loaded
- **onEnter:() => void** `function` - Callback function that is called when user presses **Enter** key on the keyboard inside card input.
- **onChange:(event: CardInputOnChangeEvent) => void** `function` - Callback function that is called on every user input. Used for real-time validation.
  - **event.isTouched** `boolean` - indicates if card input was touched
  - **event.focused** `string` - indicates what input is focused. Possible values: `cardNumber`, `expiryDate`, `cvc`
  - **cardType** `string` - detected card type
  - **error** `string` - Card input error. Use this attribute to show an error to a user.

### CardInput Style object

UI components are styled using a Style object, which consists of CSS properties nested under objects for any of the following variants:

- **base** `object` - base component style
- **loading** `object` - base component style when component is loading
- **invalid** `object` - applied when the component has invalid input
- **input** `object` - applied to individual inputs
- **cardNumber** `object` - applied to card number input
- **expiryDate** `object` - applied to expiry date input
- **cvc** `object` - applied to cvc input
- **icon** `object` - applied to icon

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

var cardInput = monei.CardInput({
  paymentId: 'af6029f80f5fc73a8ad2753eea0b1be0',
  style: style,
  ...otherOptions
});

// render component on a page
cardInput.render('#card_input_container');
```

## `monei.createToken` function

Use this function to generate payment token.

:::note
Payment tokens generated by monei.js UI Components expire as soon as they are used or in 5 days after creation.
:::

Pass an instance of CardInput component.

```typescript
declare const createToken: (
  component: MoneiComponent
) => Promise<{
  token?: string; // payment token
  error?: string; // validation error
}>;
```

Example:

```js
monei
  .createToken(cardInput) // pass a reference to an instance of your CardInput component
  .then(function (result) {
    console.log(result);
    if (result.error) {
      // Inform the user if there was an error.
    } else {
      // Send the token to your server.
      moneiTokenHandler(result.token);
    }
  })
  .catch(function (error) {
    // Something went wrong while generating token
    console.log(error);
  });
```

## `monei.PayPal` component

PayPal button UI component

### Create an instance of the PayPal component.

```js
var paypal = monei.PayPal({
  paymentId: 'af6029f80f5fc73a8ad2753eea0b1be0',
  ...otherOptions
});

// render component on a page
paypal.render('#paypal_container');
```

### PayPal options

- **paymentId** `string` - A payment ID provided by MONEI in [create payment](/api/#operation/payments_create) request. Generated payment token will be bound to this payment.
- **accountId** `string` - Your MONEI account ID. Required if you're initializing paypal with account ID. Instead of passing **paymentId** you can initialize paypal with the **accountId** and **sessionId** (optional). Generate a payment token before you create the payment itself.
- **sessionId** `string` - Unique session ID in your system. Provide a different **sessionId** for each customer. Use this parameter to ensure that the customer who generated the token is the same as the one doing the payment. Only required if you pass a token to your server. If you provide a **sessionId** when initializing MONEI component you will need to provide the same value when you [create a payment](/api/#section/Payment-object) on your server.
- **amount** `positive integer` - Amount intended to be collected by this payment. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge 1.00 USD). Required if you initialize a component with **accountId**. You'll need to pass the same value when creating the payment.
- **currency** `string` - Three-letter [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217), in uppercase. Must be a supported currency. Required if you initialize a component with **accountId**. You'll need to pass the same value when creating the payment.
- **transactionType** `string` - Controls when the funds will be captured. Required if you initialize a component with **accountId**. You'll need to pass the same value when creating the payment.
  - **SALE** - `default`. MONEI automatically captures funds when the customer authorizes the payment.
  - **AUTH** - Place a hold on the funds when the customer authorizes the payment, but don’t capture the funds until later.
- **language** `string` - The language of the component. By default, MONEI smartly detects the correct language for the buyer based on their geolocation and browser preferences. It is recommended to pass this parameter only if you need the PayPal button to render in the same language as the rest of your site. [List of supported languages](https://developer.paypal.com/docs/checkout/reference/customize-sdk/#locale).
- **style** `object` - Customize the appearance of [PayPal button](https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/#button-styles).
  - **height** `string` - By default, the button adapts to the size of its container element. To customize the button width, alter the width of the container element. To customize the button height, set the style.height option to a value from `25` to `55`.
  - **shape** `string` - Set button shape. Possible values: `rect`, `pill`
  - **color** `string` - Set button color. Possible values: `gold`, `blue`, `silver`, `white`, `black`
  - **layout** `string` - Determine the button layout when multiple buttons are available Possible values: `vertical`, `horizontal`
- **onLoad:(isSupported: boolean) => void** `function` - Callback function that is called when paypal is fully loaded. If this payment method is not supported, the component will not show up, and `onLoad` callback will be triggered with `isSupported: false`
- **onSubmit:(result: {token?: string; error?: string}) => void** `function` - Callback function that is called when customer approves the payment
  - **result.token** `string` - Payment token
  - **result.error** `string` - Payment error. Use this attribute to show an error to a user.

## `monei.GooglePay` component

GooglePay button UI component

### Create an instance of the GooglePay component.

```js
var paypal = monei.GooglePay({
  paymentId: 'af6029f80f5fc73a8ad2753eea0b1be0',
  ...otherOptions
});

// render component on a page
paypal.render('#gpay_container');
```

### GooglePay options

- **paymentId** `string` - A payment ID provided by MONEI in [create payment](/api/#operation/payments_create) request. Generated payment token will be bound to this payment.
- **accountId** `string` - Your MONEI account ID. Required if you're initializing paypal with account ID. Instead of passing **paymentId** you can initialize paypal with the **accountId** and **sessionId** (optional). Generate a payment token before you create the payment itself.
- **sessionId** `string` - Unique session ID in your system. Provide a different **sessionId** for each customer. Use this parameter to ensure that the customer who generated the token is the same as the one doing the payment. Only required if you pass a token to your server. If you provide a **sessionId** when initializing MONEI component you will need to provide the same value when you [create a payment](/api/#section/Payment-object) on your server.
- **amount** `positive integer` - Amount intended to be collected by this payment. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge 1.00 USD). Required if you initialize a component with **accountId**. You'll need to pass the same value when creating the payment.
- **currency** `string` - Three-letter [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217), in uppercase. Must be a supported currency. Required if you initialize a component with **accountId**. You'll need to pass the same value when creating the payment.
- **language** `string` - The [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code represents the desired button language. Supported locales include `en`, `ar`, `bg`, `ca`, `cs`, `da`, `de`, `el`, `es`, `et`, `fi`, `fr`, `hr`, `id`, `it`, `ja`, `ko`, `ms`, `nl`, `no`, `pl`, `pt`, `ru`, `sk`, `sl`, `sr`, `sv`, `th`, `tr`, `uk`, and `zh`.
- **style** `object` - Customize the appearance of Google Pay button.
  - **height** `string` - By default, the button adapts to the size of its container element. To customize the button width, alter the width of the container element. To customize the button height, set the style.height option to a value from `25` to `55`.
  - **type** `string` - Set button type. Possible values:
    - **buy** - "Buy with Google Pay" button (default).
    - **donate** - "Donate with Google Pay" button.
    - **plain** - Google Pay button without additional text.
  - **color** `string` - Set button color. Possible values: `default`, `black`, `white`
- **onLoad:(isSupported: boolean) => void** `function` - Callback function that is called when paypal is fully loaded. If this payment method is not supported, the component will not show up, and `onLoad` callback will be triggered with `isSupported: false`
- **onSubmit:(result: {token?: string; error?: string}) => void** `function` - Callback function that is called when customer approves the payment
  - **result.token** `string` - Payment token
  - **result.error** `string` - Payment error. Use this attribute to show an error to a user.

## `monei.confirmPayment` function

Use this function to confirm a payment. It will automatically show a popup window either with 3d secure confirmation screen or with a payment page to collect payment details.

You can provide additional customer information in parameters.

```typescript
declare const confirmPayment: (params: ConfirmPaymentParams) => Promise<PaymentResult>;
```

### Confirm payment params

- **paymentId** ` string` `required` - A payment ID provided by MONEI in [create payment](/api/#operation/payments_create) request
- **paymentToken** `string` - A payment token generated by monei.js. If **paymentToken** is present the popup window will open directly to 3D secure confirmation screen (if needed)
- **generatePaymentToken** `boolean` - If set to true a permanent token that represents a payment method used in the payment will be generated.
- **fullscreen** `boolean` - Set this parameter to true to open a fullscreen confirmation window
- **language** `string` - Two-letter language code ([ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)). If provided overrides browser detected user language.

Check [confirm payment](/api/#operation/payments_confirm) for the full list of parameters

### Payment result

- **id** `string` - Unique identifier for the payment.
- **accountId** `string` - MONEI account ID.
- **amount** `positive integer` - Amount of this payment. A positive integer in the smallest currency unit (e.g., 100 cents to charge 1.00 USD).
- **currency** `string` - Three-letter [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217), in uppercase.
- **status** `string` - The status of the payment.
- **orderId** `string` - An order ID from your system. A unique identifier that can be used to reconcile the payment with your internal system.
- **statusCode** `string` - Payment status code.
- **statusMessage** `string` - Human readable status message, can be displayed to a user.
- **nextAction** `object` - If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source.
  - **type** `string`
  - **mustRedirect** `boolean`
  - **redirectUrl** `string`

Check [payment object](/api/#section/Payment-object) for the full description of each field

Example:

```js
monei
  .confirmPayment({
    paymentId: 'af6029f80f5fc73a8ad2753eea0b1be0',
    paymentToken: 'fe6786e08ded3191cf2f623e120a0bacda715bf2',
    ...otherOptions
  })
  .then(function (result) {
    // Payment result
    console.log(result);
  })
  .catch(function (error) {
    // Something went wrong while confirming payment
    console.log(error);
  });
```
