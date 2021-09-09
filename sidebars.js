module.exports = {
  docs: [
    'getting-started',
    {
      Integrations: [
        'integrations/use-prebuilt-payment-page',
        'integrations/use-payment-modal',
        'integrations/build-custom-checkout',
        'integrations/use-qr-payments'
      ],
      'E-commerce platforms': [
        'e-commerce/shopify',
        'e-commerce/wix',
        'e-commerce/woocommerce',
        'e-commerce/salesforce'
      ],
      'Payment methods': [
        'payment-methods/card',
        'payment-methods/google-pay',
        'payment-methods/apple-pay',
        'payment-methods/paypal',
        'payment-methods/bizum',
        'payment-methods/cofidis',
        'payment-methods/click-to-pay'
      ],
      Guides: [
        'guides/save-payment-method',
        'guides/verify-signature',
        'guides/send-cardholder-name',
        'guides/setup-cofidis-widget'
      ],
      'MONEI JS': ['monei-js/overview', 'monei-js/payment-request', 'monei-js/reference']
    },
    {
      type: 'link',
      label: 'Payments API',
      href: '/api/#tag/Payments'
    },
    'graphql-api',
    'testing'
  ]
};
