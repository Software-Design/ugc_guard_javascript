# UgcGuardJavascriptApi.PersonsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPerson**](PersonsApi.md#createPerson) | **POST** /persons/ | Create Person
[**deletePerson**](PersonsApi.md#deletePerson) | **DELETE** /persons/{person_id} | Delete Person
[**getPersonById**](PersonsApi.md#getPersonById) | **GET** /persons/{person_id} | Get Person By Id
[**getPersonByUpiId**](PersonsApi.md#getPersonByUpiId) | **GET** /persons/by_upid/{upi_id} | Get Person By Upi Id
[**updatePerson**](PersonsApi.md#updatePerson) | **PUT** /persons/ | Update Person



## createPerson

> AnonymousPerson createPerson(personDB, opts)

Create Person

Create a new person.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.PersonsApi();
let personDB = new UgcGuardJavascriptApi.PersonDB(); // PersonDB | 
let opts = {
  'secret': "secret_example" // String | 
};
apiInstance.createPerson(personDB, opts, (error, data, response) => {
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
 **personDB** | [**PersonDB**](PersonDB.md)|  | 
 **secret** | **String**|  | [optional] 

### Return type

[**AnonymousPerson**](AnonymousPerson.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePerson

> PersonDB deletePerson(personId)

Delete Person

Delete a person by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.PersonsApi();
let personId = "personId_example"; // String | 
apiInstance.deletePerson(personId, (error, data, response) => {
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
 **personId** | **String**|  | 

### Return type

[**PersonDB**](PersonDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonById

> PersonDB getPersonById(personId)

Get Person By Id

Get a person by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.PersonsApi();
let personId = "personId_example"; // String | 
apiInstance.getPersonById(personId, (error, data, response) => {
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
 **personId** | **String**|  | 

### Return type

[**PersonDB**](PersonDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonByUpiId

> AnonymousPerson getPersonByUpiId(upiId, moduleId, opts)

Get Person By Upi Id

Get a person by its Unique Partner ID

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.PersonsApi();
let upiId = "upiId_example"; // String | 
let moduleId = "moduleId_example"; // String | 
let opts = {
  'secret': "secret_example" // String | 
};
apiInstance.getPersonByUpiId(upiId, moduleId, opts, (error, data, response) => {
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
 **upiId** | **String**|  | 
 **moduleId** | **String**|  | 
 **secret** | **String**|  | [optional] 

### Return type

[**AnonymousPerson**](AnonymousPerson.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePerson

> PersonDB updatePerson(personDB)

Update Person

Update a person.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.PersonsApi();
let personDB = new UgcGuardJavascriptApi.PersonDB(); // PersonDB | 
apiInstance.updatePerson(personDB, (error, data, response) => {
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
 **personDB** | [**PersonDB**](PersonDB.md)|  | 

### Return type

[**PersonDB**](PersonDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

