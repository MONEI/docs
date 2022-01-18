# # Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the payment. | [optional] 
**amount** | **int** | Amount intended to be collected by this payment. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge 1.00 USD). | [optional] 
**currency** | **string** | Three-letter [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217), in uppercase. Must be a supported currency. | [optional] 
**order_id** | **string** | An order ID from your system. A unique identifier that can be used to reconcile the payment with your internal system. | [optional] 
**description** | **string** | An arbitrary string attached to the payment. Often useful for displaying to users. | [optional] 
**account_id** | **string** | MONEI Account identifier. | [optional] 
**authorization_code** | **string** | Unique identifier provided by the bank performing transaction. | [optional] 
**livemode** | **bool** | Has the value &#x60;true&#x60; if the resource exists in live mode or the value &#x60;false&#x60; if the resource exists in test mode. | [optional] 
**status** | [**\OpenAPI\Client\Model\PaymentStatus**](PaymentStatus.md) |  | [optional] 
**status_code** | **string** | Payment status code. | [optional] 
**status_message** | **string** | Human readable status message, can be displayed to a user. | [optional] 
**customer** | [**\OpenAPI\Client\Model\PaymentCustomer**](PaymentCustomer.md) |  | [optional] 
**shop** | [**\OpenAPI\Client\Model\PaymentShop**](PaymentShop.md) |  | [optional] 
**billing_details** | [**\OpenAPI\Client\Model\PaymentBillingDetails**](PaymentBillingDetails.md) |  | [optional] 
**shipping_details** | [**\OpenAPI\Client\Model\PaymentShippingDetails**](PaymentShippingDetails.md) |  | [optional] 
**refunded_amount** | **int** | Amount in cents refunded (can be less than the amount attribute on the payment if a partial refund was issued). | [optional] 
**last_refund_amount** | **int** | Amount in cents refunded in the last transaction. | [optional] 
**last_refund_reason** | [**\OpenAPI\Client\Model\PaymentLastRefundReason**](PaymentLastRefundReason.md) |  | [optional] 
**cancellation_reason** | [**\OpenAPI\Client\Model\PaymentCancellationReason**](PaymentCancellationReason.md) |  | [optional] 
**session_details** | [**\OpenAPI\Client\Model\PaymentSessionDetails**](PaymentSessionDetails.md) |  | [optional] 
**trace_details** | [**\OpenAPI\Client\Model\PaymentTraceDetails**](PaymentTraceDetails.md) |  | [optional] 
**payment_token** | **string** | A permanent token represents a payment method used in the payment. Pass &#x60;generatePaymentToken: true&#x60; when you creating a payment to generate it. You can pass it as &#x60;paymentToken&#x60; parameter to create other payments with the same payment method. This token does not expire, and should only be used server-side. | [optional] 
**payment_method** | [**\OpenAPI\Client\Model\PaymentPaymentMethod**](PaymentPaymentMethod.md) |  | [optional] 
**sequence** | [**\OpenAPI\Client\Model\PaymentSequence**](PaymentSequence.md) |  | [optional] 
**sequence_id** | **string** | A permanent identifier that refers to the initial payment of a sequence of payments. This value needs to be sent in the path for &#x60;RECURRING&#x60; payments. | [optional] 
**point_of_sale_id** | **string** | A unique identifier of the Point of Sale. If specified the payment is attached to this Point of Sale. If there is a QR code attached to the same Point of Sale, this payment will be available by scanning the QR code. | [optional] 
**next_action** | [**\OpenAPI\Client\Model\PaymentNextAction**](PaymentNextAction.md) |  | [optional] 
**created_at** | **int** | Time at which the resource was created. Measured in seconds since the Unix epoch. | [optional] 
**updated_at** | **int** | Time at which the resource updated last time. Measured in seconds since the Unix epoch. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


