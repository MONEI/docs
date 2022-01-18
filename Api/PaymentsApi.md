# OpenAPI\Client\PaymentsApi

All URIs are relative to *https://api.monei.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel**](PaymentsApi.md#cancel) | **POST** /payments/{id}/cancel | Cancel Payment
[**capture**](PaymentsApi.md#capture) | **POST** /payments/{id}/capture | Capture Payment
[**confirm**](PaymentsApi.md#confirm) | **POST** /payments/{id}/confirm | Confirm Payment
[**create**](PaymentsApi.md#create) | **POST** /payments | Create Payment
[**get**](PaymentsApi.md#get) | **GET** /payments/{id} | Get Payment
[**recurring**](PaymentsApi.md#recurring) | **POST** /payments/{sequenceId}/recurring | Recurring Payment
[**refund**](PaymentsApi.md#refund) | **POST** /payments/{id}/refund | Refund Payment



## cancel

> \OpenAPI\Client\Model\Payment cancel($id, $cancel_payment_request)

Cancel Payment

Release customer's funds that were reserved earlier. You can only cancel a payment with the `AUTHORIZED` status.  This is the second half of the two-step payment flow, where first you created a payment with the `transactionType` set to `AUTH`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\PaymentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The payment ID
$cancel_payment_request = new \OpenAPI\Client\Model\CancelPaymentRequest(); // \OpenAPI\Client\Model\CancelPaymentRequest | 

try {
    $result = $apiInstance->cancel($id, $cancel_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentsApi->cancel: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The payment ID |
 **cancel_payment_request** | [**\OpenAPI\Client\Model\CancelPaymentRequest**](../Model/CancelPaymentRequest.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Payment**](../Model/Payment.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## capture

> \OpenAPI\Client\Model\Payment capture($id, $capture_payment_request)

Capture Payment

Capture the payment of an existing, uncaptured, payment. This is the second half of the two-step payment flow, where first you created a payment with the `transactionType` set to `AUTH`.  Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as expired and will no longer be capturable.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\PaymentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The payment ID
$capture_payment_request = new \OpenAPI\Client\Model\CapturePaymentRequest(); // \OpenAPI\Client\Model\CapturePaymentRequest | 

try {
    $result = $apiInstance->capture($id, $capture_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentsApi->capture: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The payment ID |
 **capture_payment_request** | [**\OpenAPI\Client\Model\CapturePaymentRequest**](../Model/CapturePaymentRequest.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Payment**](../Model/Payment.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## confirm

> \OpenAPI\Client\Model\Payment confirm($id, $confirm_payment_request)

Confirm Payment

Confirm a payment that was created without a `paymentToken` or `paymentMethod`. You can only confirm a payment with the `PENDING` status.  You can charge a customer in two steps. First create a payment without payment details and then confirm it after you generate a `paymentToken` on the front-end with monei.js [Components](https://docs.monei.com/docs/monei-js-overview).  You can provide additional customer information, it will override the information passed in **create payment** request.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\PaymentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The payment ID
$confirm_payment_request = new \OpenAPI\Client\Model\ConfirmPaymentRequest(); // \OpenAPI\Client\Model\ConfirmPaymentRequest | 

try {
    $result = $apiInstance->confirm($id, $confirm_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentsApi->confirm: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The payment ID |
 **confirm_payment_request** | [**\OpenAPI\Client\Model\ConfirmPaymentRequest**](../Model/ConfirmPaymentRequest.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Payment**](../Model/Payment.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## create

> \OpenAPI\Client\Model\Payment create($create_payment_request)

Create Payment

To charge a credit card or other payment method, you create a Payment.  Payment can also be created without a payment method to initiate a payment process and redirect a customer to the hosted payment page.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\PaymentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_payment_request = new \OpenAPI\Client\Model\CreatePaymentRequest(); // \OpenAPI\Client\Model\CreatePaymentRequest | 

try {
    $result = $apiInstance->create($create_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentsApi->create: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_payment_request** | [**\OpenAPI\Client\Model\CreatePaymentRequest**](../Model/CreatePaymentRequest.md)|  |

### Return type

[**\OpenAPI\Client\Model\Payment**](../Model/Payment.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## get

> \OpenAPI\Client\Model\Payment get($id)

Get Payment

Get the details of a payment that has previously been created. Supply the unique payment ID that was returned from your previous request.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\PaymentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The payment ID

try {
    $result = $apiInstance->get($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentsApi->get: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The payment ID |

### Return type

[**\OpenAPI\Client\Model\Payment**](../Model/Payment.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## recurring

> \OpenAPI\Client\Model\Payment recurring($sequence_id, $recurring_payment_request)

Recurring Payment

Creates a subsequent operation for a recurring payment, previously created. The specified amount will be charged to the same credit or debit card of the originally payment.  If amount is not specified, it will default to the same amount from the original payment.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\PaymentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$sequence_id = 'sequence_id_example'; // string | The sequence ID
$recurring_payment_request = new \OpenAPI\Client\Model\RecurringPaymentRequest(); // \OpenAPI\Client\Model\RecurringPaymentRequest | 

try {
    $result = $apiInstance->recurring($sequence_id, $recurring_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentsApi->recurring: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sequence_id** | **string**| The sequence ID |
 **recurring_payment_request** | [**\OpenAPI\Client\Model\RecurringPaymentRequest**](../Model/RecurringPaymentRequest.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Payment**](../Model/Payment.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## refund

> \OpenAPI\Client\Model\Payment refund($id, $refund_payment_request)

Refund Payment

Refund a payment that has previously been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged.  You can optionally refund only part of a payment. You can do so multiple times, until the entire payment has been refunded.  Once entirely refunded, a payment can’t be refunded again. This method will throw an error when called on an already-refunded payment, or when trying to refund more money than is left on a payment.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\PaymentsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The payment ID
$refund_payment_request = new \OpenAPI\Client\Model\RefundPaymentRequest(); // \OpenAPI\Client\Model\RefundPaymentRequest | 

try {
    $result = $apiInstance->refund($id, $refund_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentsApi->refund: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The payment ID |
 **refund_payment_request** | [**\OpenAPI\Client\Model\RefundPaymentRequest**](../Model/RefundPaymentRequest.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Payment**](../Model/Payment.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

