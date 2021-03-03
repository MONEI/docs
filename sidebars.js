module.exports = {
  docs: [
    'getting-started',
    {
      Integrations: ['use-prebuilt-payment-page', 'use-payment-modal', 'accept-card-payment'],
      'E-commerce platforms': ['e-commerce/shopify', 'e-commerce/woocommerce'],
      'Payment methods': [
        'payment-methods/card',
        'payment-methods/google-pay',
        'payment-methods/paypal',
        'payment-methods/bizum'
      ],
      Guides: ['guides/save-payment-method', 'guides/verify-signature'],
      'MONEI JS': ['monei-js-overview', 'monei-js-api']
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
