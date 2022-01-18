# OpenAPI\Client\SubscriptionsApi

All URIs are relative to *https://api.monei.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate**](SubscriptionsApi.md#activate) | **POST** /subscriptions/{id}/activate | Activate Subscription
[**cancel**](SubscriptionsApi.md#cancel) | **POST** /subscriptions/{id}/cancel | Cancel Subscription
[**create**](SubscriptionsApi.md#create) | **POST** /subscriptions | Create Subscription
[**get**](SubscriptionsApi.md#get) | **GET** /subscriptions/{id} | Get Subscription
[**pause**](SubscriptionsApi.md#pause) | **POST** /subscriptions/{id}/pause | Pause Subscription
[**resume**](SubscriptionsApi.md#resume) | **POST** /subscriptions/{id}/resume | Resume Subscription
[**update**](SubscriptionsApi.md#update) | **PUT** /subscriptions/{id} | Update Subscription



## activate

> \OpenAPI\Client\Model\Payment activate($id, $activate_subscription_request)

Activate Subscription

Activates the subscription that was previously created. Activation of the subscription will create an initial payment. If the subscription has trial period, the initial payment will have zero amount. The subscription is automatically activated when initial payment is confirmed.  If the subscription is already activated, this endpoint can be used to update payment method. This will also generate zero amount payment.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The subscription ID
$activate_subscription_request = new \OpenAPI\Client\Model\ActivateSubscriptionRequest(); // \OpenAPI\Client\Model\ActivateSubscriptionRequest | 

try {
    $result = $apiInstance->activate($id, $activate_subscription_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->activate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The subscription ID |
 **activate_subscription_request** | [**\OpenAPI\Client\Model\ActivateSubscriptionRequest**](../Model/ActivateSubscriptionRequest.md)|  | [optional]

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


## cancel

> \OpenAPI\Client\Model\Subscription cancel($id, $cancel_subscription_request)

Cancel Subscription

Cancels the activate subscription.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The subscription ID
$cancel_subscription_request = new \OpenAPI\Client\Model\CancelSubscriptionRequest(); // \OpenAPI\Client\Model\CancelSubscriptionRequest | 

try {
    $result = $apiInstance->cancel($id, $cancel_subscription_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->cancel: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The subscription ID |
 **cancel_subscription_request** | [**\OpenAPI\Client\Model\CancelSubscriptionRequest**](../Model/CancelSubscriptionRequest.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Subscription**](../Model/Subscription.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## create

> \OpenAPI\Client\Model\Subscription create($create_subscription_request)

Create Subscription

Creates a new subscription. Subscription is created with status: `PENDING`. In order to activate it you need to call [activate endpoint](#operation/subscriptions_activate).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_subscription_request = new \OpenAPI\Client\Model\CreateSubscriptionRequest(); // \OpenAPI\Client\Model\CreateSubscriptionRequest | 

try {
    $result = $apiInstance->create($create_subscription_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->create: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_subscription_request** | [**\OpenAPI\Client\Model\CreateSubscriptionRequest**](../Model/CreateSubscriptionRequest.md)|  |

### Return type

[**\OpenAPI\Client\Model\Subscription**](../Model/Subscription.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## get

> \OpenAPI\Client\Model\Subscription get($id)

Get Subscription

Get the details of a subscription that has previously been created. Supply the unique subscription ID that was returned from your previous request.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The subscription ID

try {
    $result = $apiInstance->get($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->get: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The subscription ID |

### Return type

[**\OpenAPI\Client\Model\Subscription**](../Model/Subscription.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## pause

> \OpenAPI\Client\Model\Subscription pause($id, $pause_subscription_request)

Pause Subscription

Pauses the active subscription.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The subscription ID
$pause_subscription_request = new \OpenAPI\Client\Model\PauseSubscriptionRequest(); // \OpenAPI\Client\Model\PauseSubscriptionRequest | 

try {
    $result = $apiInstance->pause($id, $pause_subscription_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->pause: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The subscription ID |
 **pause_subscription_request** | [**\OpenAPI\Client\Model\PauseSubscriptionRequest**](../Model/PauseSubscriptionRequest.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Subscription**](../Model/Subscription.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## resume

> \OpenAPI\Client\Model\Subscription resume($id)

Resume Subscription

Resumes the paused subscription.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The subscription ID

try {
    $result = $apiInstance->resume($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->resume: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The subscription ID |

### Return type

[**\OpenAPI\Client\Model\Subscription**](../Model/Subscription.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## update

> \OpenAPI\Client\Model\Subscription update($id, $update_subscription_request)

Update Subscription

Updates an existing subscription. Supply the unique subscription ID that was returned from your previous request.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | The subscription ID
$update_subscription_request = new \OpenAPI\Client\Model\UpdateSubscriptionRequest(); // \OpenAPI\Client\Model\UpdateSubscriptionRequest | 

try {
    $result = $apiInstance->update($id, $update_subscription_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->update: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The subscription ID |
 **update_subscription_request** | [**\OpenAPI\Client\Model\UpdateSubscriptionRequest**](../Model/UpdateSubscriptionRequest.md)|  |

### Return type

[**\OpenAPI\Client\Model\Subscription**](../Model/Subscription.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

