# UgcGuardJavascriptApi.TypesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createType**](TypesApi.md#createType) | **POST** /types/ | Create Type
[**deleteType**](TypesApi.md#deleteType) | **DELETE** /types/{type_id} | Delete Type
[**getTypeActionSecret**](TypesApi.md#getTypeActionSecret) | **GET** /types/{type_id}/action_secret | Get Type Action Secret
[**getTypeById**](TypesApi.md#getTypeById) | **GET** /types/{type_id} | Get Type By Id
[**getTypesForModule**](TypesApi.md#getTypesForModule) | **GET** /types/ | Get Types For Module
[**updateType**](TypesApi.md#updateType) | **PUT** /types/ | Update Type



## createType

> Type createType(type)

Create Type

Create a new type.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.TypesApi();
let type = new UgcGuardJavascriptApi.Type(); // Type | 
apiInstance.createType(type, (error, data, response) => {
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
 **type** | [**Type**](Type.md)|  | 

### Return type

[**Type**](Type.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteType

> Type deleteType(typeId)

Delete Type

Delete a type by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.TypesApi();
let typeId = "typeId_example"; // String | 
apiInstance.deleteType(typeId, (error, data, response) => {
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
 **typeId** | **String**|  | 

### Return type

[**Type**](Type.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTypeActionSecret

> String getTypeActionSecret(typeId)

Get Type Action Secret

Get the action secret for a type.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.TypesApi();
let typeId = "typeId_example"; // String | 
apiInstance.getTypeActionSecret(typeId, (error, data, response) => {
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
 **typeId** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTypeById

> Type getTypeById(typeId)

Get Type By Id

Get a type by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.TypesApi();
let typeId = "typeId_example"; // String | 
apiInstance.getTypeById(typeId, (error, data, response) => {
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
 **typeId** | **String**|  | 

### Return type

[**Type**](Type.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTypesForModule

> PaginatedResultType getTypesForModule(moduleId, opts)

Get Types For Module

Get all types for a module.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.TypesApi();
let moduleId = "moduleId_example"; // String | 
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getTypesForModule(moduleId, opts, (error, data, response) => {
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
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**PaginatedResultType**](PaginatedResultType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateType

> Type updateType(type)

Update Type

Update an existing type.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.TypesApi();
let type = new UgcGuardJavascriptApi.Type(); // Type | 
apiInstance.updateType(type, (error, data, response) => {
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
 **type** | [**Type**](Type.md)|  | 

### Return type

[**Type**](Type.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

