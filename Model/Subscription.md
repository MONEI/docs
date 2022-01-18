# # Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the subscription. | [optional] 
**amount** | **int** | Amount intended to be collected by this payment. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge 1.00 USD). | [optional] 
**currency** | **string** | Three-letter [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217), in uppercase. Must be a supported currency. | [optional] 
**description** | **string** | An arbitrary string attached to the subscription. Often useful for displaying to users. | [optional] 
**account_id** | **string** | MONEI Account identifier. | [optional] 
**livemode** | **bool** | Has the value &#x60;true&#x60; if the resource exists in live mode or the value &#x60;false&#x60; if the resource exists in test mode. | [optional] 
**status** | [**\OpenAPI\Client\Model\SubscriptionStatus**](SubscriptionStatus.md) |  | [optional] 
**customer** | [**\OpenAPI\Client\Model\PaymentCustomer**](PaymentCustomer.md) |  | [optional] 
**billing_details** | [**\OpenAPI\Client\Model\PaymentBillingDetails**](PaymentBillingDetails.md) |  | [optional] 
**shipping_details** | [**\OpenAPI\Client\Model\PaymentShippingDetails**](PaymentShippingDetails.md) |  | [optional] 
**interval** | [**\OpenAPI\Client\Model\SubscriptionInterval**](SubscriptionInterval.md) |  | [optional] 
**interval_count** | **int** | Number of intervals between subscription payments. | [optional] 
**pause_interval_count** | **int** | Number of intervals when subscription will be paused before it activates again. | [optional] 
**last_order_id** | **string** | An order ID from your system. A unique identifier that can be used to reconcile the payment with your internal system. | [optional] 
**last_payment** | [**\OpenAPI\Client\Model\SubscriptionLastPayment**](SubscriptionLastPayment.md) |  | [optional] 
**payment_method** | [**\OpenAPI\Client\Model\SubscriptionPaymentMethod**](SubscriptionPaymentMethod.md) |  | [optional] 
**current_period_start** | **float** | The start date of the current subscription period. Measured in seconds since the Unix epoch. | [optional] 
**current_period_end** | **float** | The end date of the current subscription period. Measured in seconds since the Unix epoch. | [optional] 
**trial_period_end** | **float** | The end date of the trial period. Measured in seconds since the Unix epoch. | [optional] 
**next_payment_at** | **int** | The date when the next payment will be made. | [optional] 
**retry_count** | **int** | Number of retries left for the subscription. | [optional] 
**cancel_at_period_end** | **bool** | If true, the subscription will be canceled at the end of the current period. | [optional] 
**pause_at_period_end** | **bool** | If true, the subscription will be paused at the end of the current period. | [optional] 
**trace_details** | [**\OpenAPI\Client\Model\PaymentTraceDetails**](PaymentTraceDetails.md) |  | [optional] 
**sequence_id** | **string** | A permanent identifier that refers to the initial payment of a sequence of payments. This value needs to be sent in the path for &#x60;RECURRING&#x60; payments. | [optional] 
**callback_url** | **string** | The URL will be called each time subscription status changes. | [optional] 
**payment_callback_url** | **string** | The URL will be called each time subscription creates a new payments. | [optional] 
**created_at** | **int** | Time at which the resource was created. Measured in seconds since the Unix epoch. | [optional] 
**updated_at** | **int** | Time at which the resource updated last time. Measured in seconds since the Unix epoch. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


