# # RecurringPaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** | An order ID from your system. A unique identifier that can be used to reconcile the payment with your internal system. | 
**amount** | **int** | The amount to collected by this subsequent payment. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge 1.00 USD). | [optional] 
**transaction_type** | [**PaymentTransactionType**](PaymentTransactionType.md) | Same as the &#x60;transactionType&#x60; parameter from [create payment](https://docs.monei.com/api/#operation/payments_create). If not sent, it will default in the same transaction type used in the initial payment. | [optional] 
**description** | **string** | An arbitrary string attached to the payment. Often useful for displaying to users. | [optional] 
**customer** | [**\OpenAPI\Client\Model\PaymentCustomer**](PaymentCustomer.md) |  | [optional] 
**billing_details** | [**\OpenAPI\Client\Model\PaymentBillingDetails**](PaymentBillingDetails.md) |  | [optional] 
**shipping_details** | [**\OpenAPI\Client\Model\PaymentShippingDetails**](PaymentShippingDetails.md) |  | [optional] 
**callback_url** | **string** | The URL to which a payment result should be sent asynchronously. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


