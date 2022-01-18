# # PaymentPaymentMethodCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **string** | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). | [optional] 
**brand** | **string** | Card brand. | [optional] 
**type** | **string** | Card type &#x60;debit&#x60; or &#x60;credit&#x60;. | [optional] 
**three_d_secure** | **bool** | Wether this transaction used 3D Secure authentication. | [optional] 
**three_d_secure_version** | **string** | The protocol version of the 3DS challenge. | [optional] 
**expiration** | **int** | Time at which the card will expire. Measured in seconds since the Unix epoch. | [optional] 
**last4** | **string** | The last four digits of the card. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


