# UgcGuardJavascriptApi.ActionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAction**](ActionsApi.md#createAction) | **POST** /actions/ | Create Action
[**deleteAction**](ActionsApi.md#deleteAction) | **DELETE** /actions/{action_id} | Delete Action
[**getActionById**](ActionsApi.md#getActionById) | **GET** /actions/{action_id} | Get Action By Id
[**getAllActionsOfType**](ActionsApi.md#getAllActionsOfType) | **GET** /actions/ | Get All Actions Of Type
[**getUserTypeActionById**](ActionsApi.md#getUserTypeActionById) | **GET** /actions/user_type/{module_id} | Get User Type Action By Id
[**performAction**](ActionsApi.md#performAction) | **GET** /actions/{action_id}/perform | Perform Action
[**updateAction**](ActionsApi.md#updateAction) | **PUT** /actions/ | Update Action



## createAction

> Action createAction(action)

Create Action

Create a new action.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ActionsApi();
let action = new UgcGuardJavascriptApi.Action(); // Action | 
apiInstance.createAction(action, (error, data, response) => {
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
 **action** | [**Action**](Action.md)|  | 

### Return type

[**Action**](Action.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAction

> Action deleteAction(actionId)

Delete Action

Delete an action by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ActionsApi();
let actionId = "actionId_example"; // String | 
apiInstance.deleteAction(actionId, (error, data, response) => {
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
 **actionId** | **String**|  | 

### Return type

[**Action**](Action.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionById

> Action getActionById(actionId)

Get Action By Id

Get an action by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ActionsApi();
let actionId = "actionId_example"; // String | 
apiInstance.getActionById(actionId, (error, data, response) => {
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
 **actionId** | **String**|  | 

### Return type

[**Action**](Action.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllActionsOfType

> [Action] getAllActionsOfType(typeId, opts)

Get All Actions Of Type

Get all actions of a type.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ActionsApi();
let typeId = "typeId_example"; // String | 
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getAllActionsOfType(typeId, opts, (error, data, response) => {
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
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[Action]**](Action.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserTypeActionById

> [Action] getUserTypeActionById(moduleId)

Get User Type Action By Id

Gets all actions that belong to the user type of the module

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ActionsApi();
let moduleId = "moduleId_example"; // String | 
apiInstance.getUserTypeActionById(moduleId, (error, data, response) => {
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

[**[Action]**](Action.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## performAction

> Action performAction(actionId, contentId, opts)

Perform Action

Perform an action.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ActionsApi();
let actionId = "actionId_example"; // String | 
let contentId = "contentId_example"; // String | 
let opts = {
  'onUser': false // Boolean | 
};
apiInstance.performAction(actionId, contentId, opts, (error, data, response) => {
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
 **actionId** | **String**|  | 
 **contentId** | **String**|  | 
 **onUser** | **Boolean**|  | [optional] [default to false]

### Return type

[**Action**](Action.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAction

> Action updateAction(action)

Update Action

Update an action.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ActionsApi();
let action = new UgcGuardJavascriptApi.Action(); // Action | 
apiInstance.updateAction(action, (error, data, response) => {
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
 **action** | [**Action**](Action.md)|  | 

### Return type

[**Action**](Action.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

