import SidebarsConfig from './docs/apis/rest/sidebar';

module.exports = {
  docs: [
    'getting-started',
    'monei-connect',
    'eurm-stablecoin',
    {
      Integrations: [
        'integrations/use-prebuilt-payment-page',
        'integrations/use-payment-modal',
        'integrations/build-custom-checkout',
        'integrations/pay-by-link',
        'integrations/use-qr-payments'
      ],
      'E-commerce platforms': [
        {
          Shopify: [
            'e-commerce/shopify/monei-payments',
            'e-commerce/shopify/monei-onsite',
            'e-commerce/shopify/monei-bizum',
            'e-commerce/shopify/monei-multibanco',
            'e-commerce/shopify/monei-mbway'
          ]
        },
        'e-commerce/wix',
        'e-commerce/woocommerce',
        'e-commerce/salesforce',
        'e-commerce/adobe-commerce',
        'e-commerce/prestashop'
      ],
      'Accounting platforms': ['accounting/odoo']
    },
    'channel-tokenization',
    {
      'Payment methods': [
        'payment-methods/card',
        'payment-methods/google-pay',
        'payment-methods/apple-pay',
        'payment-methods/paypal',
        'payment-methods/bizum',
        'payment-methods/cofidis',
        'payment-methods/cofidis-pay',
        'payment-methods/click-to-pay',
        'payment-methods/sepa-request-to-pay'
      ],
      Subscriptions: ['subscriptions/integration'],
      Guides: [
        'guides/ethoca-verify',
        'guides/managing-stores',
        'guides/migrate-tokens',
        'guides/payouts',
        'guides/save-payment-method',
        'guides/send-cardholder-name',
        'guides/setup-cofidis-widget',
        'guides/verify-signature'
      ],
      'MONEI JS': ['monei-js/overview', 'monei-js/payment-request', 'monei-js/reference']
    },
    {
      type: 'link',
      label: 'Payments API',
      href: '/docs/apis/rest/payments-create'
    },
    {
      type: 'link',
      label: 'Subscriptions API',
      href: '/docs/apis/rest/subscriptions-create'
    },
    'graphql-api',
    'testing'
  ],
  rest: [
    {
      type: 'category',
      label: 'MONEI REST API',
      link: {
        type: 'generated-index',
        title: 'MONEI REST API',
        description:
          'Complete reference documentation for the MONEI API. Includes representative code snippets and examples for our PHP and Node.js client libraries.',
        slug: 'apis/rest'
      },
      items: SidebarsConfig
    }
  ]
};
