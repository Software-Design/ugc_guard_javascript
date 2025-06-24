# UgcGuardJavascriptApi.StatsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getComparedModuleStats**](StatsApi.md#getComparedModuleStats) | **GET** /stats/module/{module_id}/compared | Get Module Stats Compared To Prior Date
[**getModuleStats**](StatsApi.md#getModuleStats) | **GET** /stats/module/{module_id} | Get Module Stats
[**getOrganizationStats**](StatsApi.md#getOrganizationStats) | **GET** /stats/org/{org_id} | Get Organization Stats



## getComparedModuleStats

> ComparedModuleState getComparedModuleStats(moduleId, opts)

Get Module Stats Compared To Prior Date

Get statistics for a module compared to a prior date.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.StatsApi();
let moduleId = "moduleId_example"; // String | 
let opts = {
  'priorDate': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.getComparedModuleStats(moduleId, opts, (error, data, response) => {
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
 **moduleId** | **String**|  | 
 **priorDate** | **Date**|  | [optional] 

### Return type

[**ComparedModuleState**](ComparedModuleState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModuleStats

> ModuleStats getModuleStats(moduleId, opts)

Get Module Stats

Get statistics for a module.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.StatsApi();
let moduleId = "moduleId_example"; // String | 
let opts = {
  'until': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.getModuleStats(moduleId, opts, (error, data, response) => {
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
 **moduleId** | **String**|  | 
 **until** | **Date**|  | [optional] 

### Return type

[**ModuleStats**](ModuleStats.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationStats

> Object getOrganizationStats(orgId)

Get Organization Stats

Get statistics for an organization.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.StatsApi();
let orgId = "orgId_example"; // String | 
apiInstance.getOrganizationStats(orgId, (error, data, response) => {
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
 **orgId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

