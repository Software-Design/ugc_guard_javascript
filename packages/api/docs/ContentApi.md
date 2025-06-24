# UgcGuardJavascriptApi.ContentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContent**](ContentApi.md#createContent) | **POST** /content/ | Create Content
[**deleteContent**](ContentApi.md#deleteContent) | **DELETE** /content/{content_id} | Delete Content
[**getAllContentOfReport**](ContentApi.md#getAllContentOfReport) | **GET** /content/{report_id} | Get All Content Of Report
[**getContentById**](ContentApi.md#getContentById) | **GET** /content/content/{content_id} | Get Content By Id



## createContent

> Content createContent(content)

Create Content

Create a new content.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ContentApi();
let content = new UgcGuardJavascriptApi.Content(); // Content | 
apiInstance.createContent(content, (error, data, response) => {
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
 **content** | [**Content**](Content.md)|  | 

### Return type

[**Content**](Content.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContent

> Content deleteContent(contentId)

Delete Content

Delete a content.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ContentApi();
let contentId = "contentId_example"; // String | 
apiInstance.deleteContent(contentId, (error, data, response) => {
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
 **contentId** | **String**|  | 

### Return type

[**Content**](Content.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllContentOfReport

> AllContentResponse getAllContentOfReport(reportId)

Get All Content Of Report

Get all content of a report.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ContentApi();
let reportId = "reportId_example"; // String | 
apiInstance.getAllContentOfReport(reportId, (error, data, response) => {
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
 **reportId** | **String**|  | 

### Return type

[**AllContentResponse**](AllContentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContentById

> Content getContentById(contentId, opts)

Get Content By Id

Get a content by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ContentApi();
let contentId = "contentId_example"; // String | 
let opts = {
  'secret': "secret_example" // String | 
};
apiInstance.getContentById(contentId, opts, (error, data, response) => {
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
 **contentId** | **String**|  | 
 **secret** | **String**|  | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

