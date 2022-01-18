# OpenAPI\Client\ApplePayDomainApi

All URIs are relative to *https://api.monei.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**register**](ApplePayDomainApi.md#register) | **POST** /apple-pay/domains | Register



## register

> \OpenAPI\Client\Model\InlineResponse200 register($register_domain_request)

Register

<p>Registers custom domain for Apple Pay.</p> <p>Download this <a href=\"https://assets.monei.com/apple-pay/apple-developer-merchantid-domain-association/\">domain association file</a> and host it at <code>/well-known/apple-developer-merchantid-domain-association</code> on your site.</p> <p>For example, if you’re registering <code>example.com</code>, make that file available at <code>https://example.com/.well-known/apple-developer-merchantid-domain-association</code>.</p>

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: APIKey
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ApplePayDomainApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$register_domain_request = new \OpenAPI\Client\Model\RegisterDomainRequest(); // \OpenAPI\Client\Model\RegisterDomainRequest | 

try {
    $result = $apiInstance->register($register_domain_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApplePayDomainApi->register: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_domain_request** | [**\OpenAPI\Client\Model\RegisterDomainRequest**](../Model/RegisterDomainRequest.md)|  |

### Return type

[**\OpenAPI\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

[APIKey](../../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

