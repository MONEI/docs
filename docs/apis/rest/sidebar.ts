import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'apis/rest/monei-api-v-1'
    },
    {
      type: 'category',
      label: 'Apple Pay Certificate',
      link: {
        type: 'doc',
        id: 'apis/rest/apple-pay-certificate'
      },
      items: [
        {
          type: 'doc',
          id: 'apis/rest/apple-pay-certificate-create',
          label: 'Create Certificate',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/apple-pay-certificate-list',
          label: 'List Certificates',
          className: 'api-method get'
        },
        {
          type: 'doc',
          id: 'apis/rest/apple-pay-certificate-get',
          label: 'Get Certificate',
          className: 'api-method get'
        },
        {
          type: 'doc',
          id: 'apis/rest/apple-pay-certificate-update',
          label: 'Update Certificate',
          className: 'api-method post'
        },
        {
          type: 'doc',
          id: 'apis/rest/apple-pay-certificate-delete',
          label: 'Delete Certificate',
          className: 'api-method delete'
        },
        {
          type: 'doc',
          id: 'apis/rest/apple-pay-certificate-activate',
          label: 'Activate Certificate',
          className: 'api-method post'
        }
      ]
    },
    {
      type: 'category',
      label: 'Apple Pay Domain',
      link: {
        type: 'doc',
        id: 'apis/rest/apple-pay-domain'
      },
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
      link: {
        type: 'doc',
        id: 'apis/rest/bizum'
      },
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
      link: {
        type: 'doc',
        id: 'apis/rest/payment-methods'
      },
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
      link: {
        type: 'doc',
        id: 'apis/rest/payments'
      },
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
      link: {
        type: 'doc',
        id: 'apis/rest/subscriptions'
      },
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
    },
    {
      type: 'category',
      label: 'Schemas',
      items: [
        {
          type: 'doc',
          id: 'apis/rest/schemas/apiexception',
          label: 'ApiException',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/badrequesterror',
          label: 'BadRequestError',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/unauthorizederror',
          label: 'UnauthorizedError',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/notfounderror',
          label: 'NotFoundError',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/internalservererror',
          label: 'InternalServerError',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/serviceunavailableerror',
          label: 'ServiceUnavailableError',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/unprocessableentityerror',
          label: 'UnprocessableEntityError',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/country',
          label: 'Country',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/ip',
          label: 'IP',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/lang',
          label: 'Lang',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/devicetype',
          label: 'DeviceType',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/devicemodel',
          label: 'DeviceModel',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/browser',
          label: 'Browser',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/browserversion',
          label: 'BrowserVersion',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/os',
          label: 'Os',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/osversion',
          label: 'OsVersion',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/source',
          label: 'Source',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/sourceversion',
          label: 'SourceVersion',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/useragent',
          label: 'UserAgent',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/browseraccept',
          label: 'BrowserAccept',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/browsercolordepth',
          label: 'BrowserColorDepth',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/browserscreenheight',
          label: 'BrowserScreenHeight',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/browserscreenwidth',
          label: 'BrowserScreenWidth',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/browsertimezoneoffset',
          label: 'BrowserTimezoneOffset',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/createdat',
          label: 'CreatedAt',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/updatedat',
          label: 'UpdatedAt',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/address',
          label: 'Address',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/cardholdername',
          label: 'CardholderName',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/cardholderemail',
          label: 'CardholderEmail',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/accountid',
          label: 'AccountId',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/livemode',
          label: 'Livemode',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/metadata',
          label: 'Metadata',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/applepaycertificate',
          label: 'ApplePayCertificate',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/updateapplepaycertificaterequest',
          label: 'UpdateApplePayCertificateRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/activateapplepaycertificaterequest',
          label: 'ActivateApplePayCertificateRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/registerapplepaydomainrequest',
          label: 'RegisterApplePayDomainRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/domainname',
          label: 'DomainName',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/validatebizumphonerequest',
          label: 'ValidateBizumPhoneRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/paymentmethods',
          label: 'PaymentMethods',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/paymentmethods-methods',
          label: 'PaymentMethods-Methods',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/paymentmethods-metadata',
          label: 'PaymentMethods-Metadata',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/paymentmethods-merchantname',
          label: 'PaymentMethods-MerchantName',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/paymentmethods-merchanturl',
          label: 'PaymentMethods-MerchantUrl',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/paymentmethods-amount',
          label: 'PaymentMethods-Amount',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/paymentmethods-currency',
          label: 'PaymentMethods-Currency',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment',
          label: 'Payment',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/createpaymentrequest',
          label: 'CreatePaymentRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/confirmpaymentrequest',
          label: 'ConfirmPaymentRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/capturepaymentrequest',
          label: 'CapturePaymentRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/cancelpaymentrequest',
          label: 'CancelPaymentRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/refundpaymentrequest',
          label: 'RefundPaymentRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/recurringpaymentrequest',
          label: 'RecurringPaymentRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/sendpaymentrequestrequest',
          label: 'SendPaymentRequestRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/sendpaymentlinkrequest',
          label: 'SendPaymentLinkRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/sendpaymentreceiptrequest',
          label: 'SendPaymentReceiptRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-id',
          label: 'Payment-Id',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-amount',
          label: 'Payment-Amount',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-currency',
          label: 'Payment-Currency',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-orderid',
          label: 'Payment-OrderId',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-description',
          label: 'Payment-Description',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-authorizationcode',
          label: 'Payment-AuthorizationCode',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-status',
          label: 'Payment-Status',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-statuscode',
          label: 'Payment-StatusCode',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-statusmessage',
          label: 'Payment-StatusMessage',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-refundedamount',
          label: 'Payment-RefundedAmount',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-lastrefundamount',
          label: 'Payment-LastRefundAmount',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-lastrefundreason',
          label: 'Payment-LastRefundReason',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-cancellationreason',
          label: 'Payment-CancellationReason',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-customer',
          label: 'Payment-Customer',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-sessionid',
          label: 'Payment-SessionId',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-sequenceid',
          label: 'Payment-SequenceId',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-sequence',
          label: 'Payment-Sequence',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-sequencerecurring',
          label: 'Payment-SequenceRecurring',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymenttoken',
          label: 'Payment-PaymentToken',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-generatepaymenttoken',
          label: 'Payment-GeneratePaymentToken',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethod',
          label: 'Payment-PaymentMethod',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodcard',
          label: 'Payment-PaymentMethodCard',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodbizum',
          label: 'Payment-PaymentMethodBizum',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodpaypal',
          label: 'Payment-PaymentMethodPaypal',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodmbway',
          label: 'Payment-PaymentMethodMbway',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodsepa',
          label: 'Payment-PaymentMethodSepa',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodtrustly',
          label: 'Payment-PaymentMethodTrustly',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodklarna',
          label: 'Payment-PaymentMethodKlarna',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodcardinput',
          label: 'Payment-PaymentMethodCardInput',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodbizuminput',
          label: 'Payment-PaymentMethodBizumInput',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethodinput',
          label: 'Payment-PaymentMethodInput',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-paymentmethods',
          label: 'Payment-PaymentMethods',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-transactiontype',
          label: 'Payment-TransactionType',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-messagechannel',
          label: 'Payment-MessageChannel',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-messagelanguage',
          label: 'Payment-MessageLanguage',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-shop',
          label: 'Payment-Shop',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-billingdetails',
          label: 'Payment-BillingDetails',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-shippingdetails',
          label: 'Payment-ShippingDetails',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-sessiondetails',
          label: 'Payment-SessionDetails',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-tracedetails',
          label: 'Payment-TraceDetails',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-nextaction',
          label: 'Payment-NextAction',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-callbackurl',
          label: 'Payment-CallbackUrl',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-completeurl',
          label: 'Payment-CompleteUrl',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-failurl',
          label: 'Payment-FailUrl',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-cancelurl',
          label: 'Payment-CancelUrl',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-refundreason',
          label: 'Payment-RefundReason',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-storeid',
          label: 'Payment-StoreId',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-pointofsaleid',
          label: 'Payment-PointOfSaleId',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-subscriptionid',
          label: 'Payment-SubscriptionId',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-autorecover',
          label: 'Payment-AutoRecover',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/payment-expireat',
          label: 'Payment-ExpireAt',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription',
          label: 'Subscription',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/createsubscriptionrequest',
          label: 'CreateSubscriptionRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/updatesubscriptionrequest',
          label: 'UpdateSubscriptionRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/activatesubscriptionrequest',
          label: 'ActivateSubscriptionRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/cancelsubscriptionrequest',
          label: 'CancelSubscriptionRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/pausesubscriptionrequest',
          label: 'PauseSubscriptionRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/sendsubscriptionlinkrequest',
          label: 'SendSubscriptionLinkRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/sendsubscriptionstatusrequest',
          label: 'SendSubscriptionStatusRequest',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-id',
          label: 'Subscription-Id',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-description',
          label: 'Subscription-Description',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-status',
          label: 'Subscription-Status',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-paymentmethod',
          label: 'Subscription-PaymentMethod',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-paymentmethodcard',
          label: 'Subscription-PaymentMethodCard',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-callbackurl',
          label: 'Subscription-CallbackUrl',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-paymentcallbackurl',
          label: 'Subscription-PaymentCallbackUrl',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-interval',
          label: 'Subscription-Interval',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-intervalcount',
          label: 'Subscription-IntervalCount',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-pauseintervalcount',
          label: 'Subscription-PauseIntervalCount',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-skipintervalcount',
          label: 'Subscription-SkipIntervalCount',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-lastpayment',
          label: 'Subscription-LastPayment',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-nextpaymentat',
          label: 'Subscription-NextPaymentAt',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-currentperiodstart',
          label: 'Subscription-CurrentPeriodStart',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-currentperiodend',
          label: 'Subscription-CurrentPeriodEnd',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-trialperiodend',
          label: 'Subscription-TrialPeriodEnd',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-retrycount',
          label: 'Subscription-RetryCount',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-cancelatperiodend',
          label: 'Subscription-CancelAtPeriodEnd',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-pauseatperiodend',
          label: 'Subscription-PauseAtPeriodEnd',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-trialperioddays',
          label: 'Subscription-TrialPeriodDays',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-retryschedule',
          label: 'Subscription-RetrySchedule',
          className: 'schema'
        },
        {
          type: 'doc',
          id: 'apis/rest/schemas/subscription-paymentmethods',
          label: 'Subscription-PaymentMethods',
          className: 'schema'
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
