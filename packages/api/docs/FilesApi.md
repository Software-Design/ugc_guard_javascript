# UgcGuardJavascriptApi.FilesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFile**](FilesApi.md#deleteFile) | **DELETE** /files/{file_id} | Delete File
[**downloadFile**](FilesApi.md#downloadFile) | **GET** /files/download/{file_id} | Download File
[**getFileById**](FilesApi.md#getFileById) | **GET** /files/{file_id} | Get File By Id
[**updateFile**](FilesApi.md#updateFile) | **PUT** /files/{file_id}/{secret} | Update File
[**uploadFile**](FilesApi.md#uploadFile) | **POST** /files/upload | Upload File



## deleteFile

> File deleteFile(fileId)

Delete File

Delete a file.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.FilesApi();
let fileId = "fileId_example"; // String | 
apiInstance.deleteFile(fileId, (error, data, response) => {
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
 **fileId** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadFile

> downloadFile(fileId, opts)

Download File

Download a file.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.FilesApi();
let fileId = "fileId_example"; // String | 
let opts = {
  'secret': "secret_example" // String | 
};
apiInstance.downloadFile(fileId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**|  | 
 **secret** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileById

> File getFileById(fileId, opts)

Get File By Id

Get a file by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.FilesApi();
let fileId = "fileId_example"; // String | 
let opts = {
  'secret': "secret_example" // String | 
};
apiInstance.getFileById(fileId, opts, (error, data, response) => {
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
 **fileId** | **String**|  | 
 **secret** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFile

> File updateFile(fileId, secret, file)

Update File

Update a file.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.FilesApi();
let fileId = "fileId_example"; // String | 
let secret = "secret_example"; // String | 
let file = null; // File | 
apiInstance.updateFile(fileId, secret, file, (error, data, response) => {
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
 **fileId** | **String**|  | 
 **secret** | **String**|  | 
 **file** | [**File**](File.md)|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadFile

> File uploadFile(moduleId, uploadFile, opts)

Upload File

Upload a file.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.FilesApi();
let moduleId = "moduleId_example"; // String | 
let uploadFile = "/path/to/file"; // File | 
let opts = {
  'secret': "secret_example" // String | 
};
apiInstance.uploadFile(moduleId, uploadFile, opts, (error, data, response) => {
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
 **uploadFile** | **File**|  | 
 **secret** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

