import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'apis/rest/monei-api-v-1'
    },
    {
      type: 'category',
      label: 'Apple Pay Domain',
      items: [
        {
          type: 'doc',
          id: 'apis/rest/apple-pay-domain-register',
          label: 'Register Domain',
          className: 'api-method post'
        }
      ]
    },
    {
      type: 'category',
      label: 'Bizum',
      items: [
        {
          type: 'doc',
          id: 'apis/rest/bizum-validate-phone',
          label: 'Validate Phone',
          className: 'api-method post'
        }
      ]
    },
    {
      type: 'category',
      label: 'Payment Methods',
      items: [
        {
          type: 'doc',
          id: 'apis/rest/payment-methods-get',
          label: 'Get Payment Methods',
          className: 'api-method get'
        }
      ]
    },
    {
      type: 'category',
      label: 'Payments',
      items: [
        {
          type: 'doc',
          id: 'apis/rest/payments-create',
          label: 'Create Payment',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/payments-get',
          label: 'Get Payment',
          className: 'api-method get'
        },
        {
          type: 'doc',
          id: 'apis/rest/payments-confirm',
          label: 'Confirm Payment',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/payments-capture',
          label: 'Capture Payment',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/payments-cancel',
          label: 'Cancel Payment',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/payments-refund',
          label: 'Refund Payment',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/payments-recurring',
          label: 'Recurring Payment',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/payments-send-request',
          label: 'Send Payment Request',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/payments-send-link',
          label: 'Send Payment Link',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/payments-send-receipt',
          label: 'Send Payment Receipt',
          className: 'api-method post'
        }
      ]
    },
    {
      type: 'category',
      label: 'Subscriptions',
      items: [
        {
          type: 'doc',
          id: 'apis/rest/subscriptions-create',
          label: 'Create Subscription',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/subscriptions-get',
          label: 'Get Subscription',
          className: 'api-method get'
        },
        {
          type: 'doc',
          id: 'apis/rest/subscriptions-update',
          label: 'Update Subscription',
          className: 'api-method put'
        },
        {
          type: 'doc',
          id: 'apis/rest/subscriptions-activate',
          label: 'Activate Subscription',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/subscriptions-cancel',
          label: 'Cancel Subscription',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/subscriptions-pause',
          label: 'Pause Subscription',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/subscriptions-resume',
          label: 'Resume Subscription',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/subscriptions-send-link',
          label: 'Send Subscription Link',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/subscriptions-send-status',
          label: 'Send Subscription Status',
          className: 'api-method post'
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
