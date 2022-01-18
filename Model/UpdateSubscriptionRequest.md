# # UpdateSubscriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | Amount intended to be collected by this payment. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge 1.00 USD). | [optional] 
**interval** | [**\OpenAPI\Client\Model\SubscriptionInterval**](SubscriptionInterval.md) |  | [optional] 
**interval_count** | **int** | Number of intervals between subscription payments. | [optional] 
**description** | **string** | An arbitrary string attached to the subscription. Often useful for displaying to users. | [optional] 
**customer** | [**\OpenAPI\Client\Model\PaymentCustomer**](PaymentCustomer.md) |  | [optional] 
**billing_details** | [**\OpenAPI\Client\Model\PaymentBillingDetails**](PaymentBillingDetails.md) |  | [optional] 
**shipping_details** | [**\OpenAPI\Client\Model\PaymentShippingDetails**](PaymentShippingDetails.md) |  | [optional] 
**trial_period_end** | **float** | The end date of the trial period. Measured in seconds since the Unix epoch. | [optional] 
**callback_url** | **string** | The URL will be called each time subscription status changes. | [optional] 
**payment_callback_url** | **string** | The URL will be called each time subscription creates a new payments. | [optional] 
**pause_at_period_end** | **bool** | If true, the subscription will be paused at the end of the current period. | [optional] 
**cancel_at_period_end** | **bool** | If true, the subscription will be canceled at the end of the current period. | [optional] 
**pause_interval_count** | **int** | Number of intervals when subscription will be paused before it activates again. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


