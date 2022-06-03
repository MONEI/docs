module.exports = {
  docs: [
    'getting-started',
    {
      Integrations: [
        'integrations/use-prebuilt-payment-page',
        'integrations/use-payment-modal',
        'integrations/build-custom-checkout',
        'integrations/pay-by-link',
        'integrations/use-qr-payments'
      ],
      'E-commerce platforms': [
        'e-commerce/shopify',
        'e-commerce/wix',
        'e-commerce/woocommerce',
        'e-commerce/salesforce',
        'e-commerce/adobe-commerce',
        'e-commerce/prestashop'
      ],
      'Payment methods': [
        'payment-methods/card',
        'payment-methods/google-pay',
        'payment-methods/apple-pay',
        'payment-methods/paypal',
        'payment-methods/bizum',
        'payment-methods/cofidis',
        'payment-methods/cofidis-pay',
        'payment-methods/click-to-pay'
      ],
      Subscriptions: ['subscriptions/integration'],
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
    {
      type: 'link',
      label: 'Subscriptions API',
      href: '/api/#tag/Subscriptions'
    },
    'graphql-api',
    'testing'
  ]
};
