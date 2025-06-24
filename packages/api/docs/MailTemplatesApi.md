# UgcGuardJavascriptApi.MailTemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMailTemplate**](MailTemplatesApi.md#createMailTemplate) | **POST** /mail_templates/ | Create Mail Template
[**deleteMailTemplate**](MailTemplatesApi.md#deleteMailTemplate) | **DELETE** /mail_templates/{template_id} | Delete Mail Template
[**getAllMailTemplatesForModuleWithDefaults**](MailTemplatesApi.md#getAllMailTemplatesForModuleWithDefaults) | **GET** /mail_templates/modules/{module_id}/with_defaults | Get All Mail Templates For Module And All Defaults
[**getMailTemplateById**](MailTemplatesApi.md#getMailTemplateById) | **GET** /mail_templates/{template_id} | Get Mail Template By Id
[**getMailTemplateByType**](MailTemplatesApi.md#getMailTemplateByType) | **GET** /mail_templates/type/{template_type} | Get Mail Template By Type
[**getMailTemplatesForModule**](MailTemplatesApi.md#getMailTemplatesForModule) | **GET** /mail_templates/modules/{module_id} | Get Mail Templates For Module
[**updateMailTemplate**](MailTemplatesApi.md#updateMailTemplate) | **PUT** /mail_templates/{template_id} | Update Mail Template



## createMailTemplate

> MailTemplate createMailTemplate(mailTemplate)

Create Mail Template

Create a new mail template.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.MailTemplatesApi();
let mailTemplate = new UgcGuardJavascriptApi.MailTemplate(); // MailTemplate | 
apiInstance.createMailTemplate(mailTemplate, (error, data, response) => {
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
 **mailTemplate** | [**MailTemplate**](MailTemplate.md)|  | 

### Return type

[**MailTemplate**](MailTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMailTemplate

> Boolean deleteMailTemplate(templateId)

Delete Mail Template

Delete a mail template by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.MailTemplatesApi();
let templateId = "templateId_example"; // String | 
apiInstance.deleteMailTemplate(templateId, (error, data, response) => {
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
 **templateId** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllMailTemplatesForModuleWithDefaults

> MailTemplatesWithDefaults getAllMailTemplatesForModuleWithDefaults(moduleId, opts)

Get All Mail Templates For Module And All Defaults

Get all mail templates for a specific module, including default templates.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.MailTemplatesApi();
let moduleId = "moduleId_example"; // String | 
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getAllMailTemplatesForModuleWithDefaults(moduleId, opts, (error, data, response) => {
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

[**MailTemplatesWithDefaults**](MailTemplatesWithDefaults.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailTemplateById

> MailTemplate getMailTemplateById(templateId)

Get Mail Template By Id

Get a mail template by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.MailTemplatesApi();
let templateId = "templateId_example"; // String | 
apiInstance.getMailTemplateById(templateId, (error, data, response) => {
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
 **templateId** | **String**|  | 

### Return type

[**MailTemplate**](MailTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailTemplateByType

> MailTemplate getMailTemplateByType(templateType, moduleId)

Get Mail Template By Type

Get a mail template by its type.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.MailTemplatesApi();
let templateType = new UgcGuardJavascriptApi.MailTemplateType(); // MailTemplateType | 
let moduleId = "moduleId_example"; // String | 
apiInstance.getMailTemplateByType(templateType, moduleId, (error, data, response) => {
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
 **templateType** | [**MailTemplateType**](.md)|  | 
 **moduleId** | **String**|  | 

### Return type

[**MailTemplate**](MailTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMailTemplatesForModule

> PaginatedResultMailTemplate getMailTemplatesForModule(moduleId, opts)

Get Mail Templates For Module

Get all mail templates for a specific module.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.MailTemplatesApi();
let moduleId = "moduleId_example"; // String | 
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getMailTemplatesForModule(moduleId, opts, (error, data, response) => {
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

[**PaginatedResultMailTemplate**](PaginatedResultMailTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMailTemplate

> MailTemplate updateMailTemplate(templateId, mailTemplate)

Update Mail Template

Update an existing mail template.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.MailTemplatesApi();
let templateId = "templateId_example"; // String | 
let mailTemplate = new UgcGuardJavascriptApi.MailTemplate(); // MailTemplate | 
apiInstance.updateMailTemplate(templateId, mailTemplate, (error, data, response) => {
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
 **templateId** | **String**|  | 
 **mailTemplate** | [**MailTemplate**](MailTemplate.md)|  | 

### Return type

[**MailTemplate**](MailTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

