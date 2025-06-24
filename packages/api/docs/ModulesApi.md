# UgcGuardJavascriptApi.ModulesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModule**](ModulesApi.md#createModule) | **POST** /modules/ | Create Module
[**deleteModule**](ModulesApi.md#deleteModule) | **DELETE** /modules/{module_id} | Delete Module
[**getAllModules**](ModulesApi.md#getAllModules) | **GET** /modules/all | Get All Modules
[**getChannelsOfModule**](ModulesApi.md#getChannelsOfModule) | **GET** /modules/{module_id}/channels | Get Channels Of Module
[**getMailSettingsOfModule**](ModulesApi.md#getMailSettingsOfModule) | **GET** /modules/{module_id}/mail | Get Mail Settings Of Module
[**getModuleById**](ModulesApi.md#getModuleById) | **GET** /modules/{module_id} | Get Module By Id
[**getModuleSecret**](ModulesApi.md#getModuleSecret) | **GET** /modules/secret/{module_id} | Get Module Secret
[**getMyModules**](ModulesApi.md#getMyModules) | **GET** /modules/myModules/{organization_id} | Get My Modules
[**updateMailSettingsOfModule**](ModulesApi.md#updateMailSettingsOfModule) | **POST** /modules/{module_id}/mail | Update Mail Settings Of Module
[**updateModule**](ModulesApi.md#updateModule) | **PUT** /modules/{module_id} | Update Module



## createModule

> ModuleDB createModule(organizationId, moduleDB)

Create Module

Create a new module.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let organizationId = "organizationId_example"; // String | 
let moduleDB = new UgcGuardJavascriptApi.ModuleDB(); // ModuleDB | 
apiInstance.createModule(organizationId, moduleDB, (error, data, response) => {
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
 **moduleDB** | [**ModuleDB**](ModuleDB.md)|  | 

### Return type

[**ModuleDB**](ModuleDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteModule

> Object deleteModule(moduleId)

Delete Module

Delete a module by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let moduleId = "moduleId_example"; // String | 
apiInstance.deleteModule(moduleId, (error, data, response) => {
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

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllModules

> PaginatedResultModule getAllModules(opts)

Get All Modules

Get all modules in the database.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getAllModules(opts, (error, data, response) => {
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
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**PaginatedResultModule**](PaginatedResultModule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelsOfModule

> PaginatedResultChannel getChannelsOfModule(moduleId, opts)

Get Channels Of Module

Get all channels of a module by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let moduleId = "moduleId_example"; // String | 
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getChannelsOfModule(moduleId, opts, (error, data, response) => {
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

[**PaginatedResultChannel**](PaginatedResultChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailSettingsOfModule

> SendMailSettings getMailSettingsOfModule(moduleId)

Get Mail Settings Of Module

Get the mail settings of a module by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let moduleId = "moduleId_example"; // String | 
apiInstance.getMailSettingsOfModule(moduleId, (error, data, response) => {
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

### Return type

[**SendMailSettings**](SendMailSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModuleById

> Module getModuleById(moduleId)

Get Module By Id

Get a module by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let moduleId = "moduleId_example"; // String | 
apiInstance.getModuleById(moduleId, (error, data, response) => {
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

### Return type

[**Module**](Module.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModuleSecret

> String getModuleSecret(moduleId)

Get Module Secret

Get the secret of a module by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let moduleId = "moduleId_example"; // String | 
apiInstance.getModuleSecret(moduleId, (error, data, response) => {
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

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMyModules

> PaginatedResultModule getMyModules(organizationId, opts)

Get My Modules

Get all modules the user has access to.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let organizationId = "organizationId_example"; // String | 
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getMyModules(organizationId, opts, (error, data, response) => {
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
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**PaginatedResultModule**](PaginatedResultModule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMailSettingsOfModule

> SendMailSettings updateMailSettingsOfModule(moduleId, sendMailSettings)

Update Mail Settings Of Module

Update the mail settings of a module by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let moduleId = "moduleId_example"; // String | 
let sendMailSettings = new UgcGuardJavascriptApi.SendMailSettings(); // SendMailSettings | 
apiInstance.updateMailSettingsOfModule(moduleId, sendMailSettings, (error, data, response) => {
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
 **sendMailSettings** | [**SendMailSettings**](SendMailSettings.md)|  | 

### Return type

[**SendMailSettings**](SendMailSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateModule

> Module updateModule(moduleId, moduleDB)

Update Module

Update an existing module.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ModulesApi();
let moduleId = "moduleId_example"; // String | 
let moduleDB = new UgcGuardJavascriptApi.ModuleDB(); // ModuleDB | 
apiInstance.updateModule(moduleId, moduleDB, (error, data, response) => {
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
 **moduleDB** | [**ModuleDB**](ModuleDB.md)|  | 

### Return type

[**Module**](Module.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

