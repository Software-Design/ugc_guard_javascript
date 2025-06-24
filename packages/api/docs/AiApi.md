# UgcGuardJavascriptApi.AiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllAiModels**](AiApi.md#getAllAiModels) | **GET** /ai/models | Get All Ai Models
[**getAllAiUsageForOrganization**](AiApi.md#getAllAiUsageForOrganization) | **GET** /ai/usage/{organization_id}/all | Get All Ai Usage For Organization
[**getAllMonthlyAiUsageForOrganization**](AiApi.md#getAllMonthlyAiUsageForOrganization) | **GET** /ai/usage/{organization_id} | Get All Monthly Ai Usage For Organization
[**getMonthlyAiUsageForOrganizationModel**](AiApi.md#getMonthlyAiUsageForOrganizationModel) | **GET** /ai/usage/{organization_id}/{ai_model} | Get Monthly Ai Usage For Organization And Model



## getAllAiModels

> [AiModel] getAllAiModels()

Get All Ai Models

Get a list of all available AI models.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.AiApi();
apiInstance.getAllAiModels((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[AiModel]**](AiModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllAiUsageForOrganization

> [AIUsage] getAllAiUsageForOrganization(organizationId)

Get All Ai Usage For Organization

Get all AI usage for a specific organization.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.AiApi();
let organizationId = "organizationId_example"; // String | 
apiInstance.getAllAiUsageForOrganization(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

[**[AIUsage]**](AIUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllMonthlyAiUsageForOrganization

> [AIUsage] getAllMonthlyAiUsageForOrganization(organizationId, opts)

Get All Monthly Ai Usage For Organization

Get all monthly AI usage for a specific organization.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.AiApi();
let organizationId = "organizationId_example"; // String | 
let opts = {
  'month': new Date("2013-10-20") // Date | 
};
apiInstance.getAllMonthlyAiUsageForOrganization(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **month** | **Date**|  | [optional] 

### Return type

[**[AIUsage]**](AIUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMonthlyAiUsageForOrganizationModel

> [AIUsage] getMonthlyAiUsageForOrganizationModel(organizationId, aiModel, opts)

Get Monthly Ai Usage For Organization And Model

Get monthly AI usage for a specific organization and AI model.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.AiApi();
let organizationId = "organizationId_example"; // String | 
let aiModel = "aiModel_example"; // String | 
let opts = {
  'month': new Date("2013-10-20") // Date | 
};
apiInstance.getMonthlyAiUsageForOrganizationModel(organizationId, aiModel, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **aiModel** | **String**|  | 
 **month** | **Date**|  | [optional] 

### Return type

[**[AIUsage]**](AIUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

