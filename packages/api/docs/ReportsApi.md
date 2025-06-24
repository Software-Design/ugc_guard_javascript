# UgcGuardJavascriptApi.ReportsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMagicReport**](ReportsApi.md#createMagicReport) | **POST** /reports/magic | Create Magic Report
[**createReport**](ReportsApi.md#createReport) | **POST** /reports/ | Create Report
[**escalateReport**](ReportsApi.md#escalateReport) | **GET** /reports/{report_id}/escalate | Escalate Report
[**getAllReports**](ReportsApi.md#getAllReports) | **GET** /reports/all | Get All Reports
[**getContentOfReport**](ReportsApi.md#getContentOfReport) | **GET** /reports/{report_id}/content | Get Content Of Report
[**getEnrichedEvaluationsOfReport**](ReportsApi.md#getEnrichedEvaluationsOfReport) | **GET** /reports/{report_id}/enriched_evaluations | Get Enriched Evaluations Of Report
[**getEvaluationsOfReport**](ReportsApi.md#getEvaluationsOfReport) | **GET** /reports/{report_id}/evaluations | Get Evaluations Of Report
[**getMyReports**](ReportsApi.md#getMyReports) | **GET** /reports/my/{module_id} | Get My Reports
[**getReportById**](ReportsApi.md#getReportById) | **GET** /reports/{report_id} | Get Report By Id
[**getReportersOfReport**](ReportsApi.md#getReportersOfReport) | **GET** /reports/{report_id}/reporters | Get Reporters Of Report
[**rejectReport**](ReportsApi.md#rejectReport) | **GET** /reports/{report_id}/reject | Reject Report
[**updateReport**](ReportsApi.md#updateReport) | **PUT** /reports/ | Update Report
[**validateReport**](ReportsApi.md#validateReport) | **GET** /reports/{report_id}/validate | Validate Report



## createMagicReport

> ReportDB createMagicReport(reportCategory, secret, bodyCreateMagicReport, opts)

Create Magic Report

Create a new report using our magic endpoint. This is recommended.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportCategory = new UgcGuardJavascriptApi.ReportCategory(); // ReportCategory | 
let secret = "secret_example"; // String | 
let bodyCreateMagicReport = new UgcGuardJavascriptApi.BodyCreateMagicReport(); // BodyCreateMagicReport | 
let opts = {
  'customMessage': "customMessage_example" // String | 
};
apiInstance.createMagicReport(reportCategory, secret, bodyCreateMagicReport, opts, (error, data, response) => {
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
 **reportCategory** | [**ReportCategory**](.md)|  | 
 **secret** | **String**|  | 
 **bodyCreateMagicReport** | [**BodyCreateMagicReport**](BodyCreateMagicReport.md)|  | 
 **customMessage** | **String**|  | [optional] 

### Return type

[**ReportDB**](ReportDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createReport

> ReportDB createReport(secret, reportDB)

Create Report

Create a new report manually.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let secret = "secret_example"; // String | 
let reportDB = new UgcGuardJavascriptApi.ReportDB(); // ReportDB | 
apiInstance.createReport(secret, reportDB, (error, data, response) => {
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
 **secret** | **String**|  | 
 **reportDB** | [**ReportDB**](ReportDB.md)|  | 

### Return type

[**ReportDB**](ReportDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## escalateReport

> ReportDB escalateReport(reportId)

Escalate Report

Escalate a report to the escalate state

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportId = "reportId_example"; // String | 
apiInstance.escalateReport(reportId, (error, data, response) => {
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

[**ReportDB**](ReportDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllReports

> PaginatedResultReportDB getAllReports(opts)

Get All Reports

Get all reports in the database.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getAllReports(opts, (error, data, response) => {
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

[**PaginatedResultReportDB**](PaginatedResultReportDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContentOfReport

> AllContentResponse getContentOfReport(reportId, opts)

Get Content Of Report

Get all content of a report.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportId = "reportId_example"; // String | 
let opts = {
  'secret': "secret_example" // String | 
};
apiInstance.getContentOfReport(reportId, opts, (error, data, response) => {
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
 **secret** | **String**|  | [optional] 

### Return type

[**AllContentResponse**](AllContentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnrichedEvaluationsOfReport

> AIEnrichedAnswer getEnrichedEvaluationsOfReport(reportId)

Get Enriched Evaluations Of Report

Get all AI evaluations of a report and all available AI Models.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportId = "reportId_example"; // String | 
apiInstance.getEnrichedEvaluationsOfReport(reportId, (error, data, response) => {
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

[**AIEnrichedAnswer**](AIEnrichedAnswer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEvaluationsOfReport

> [AIEvaluation] getEvaluationsOfReport(reportId, opts)

Get Evaluations Of Report

Get all AI evaluations of a report.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportId = "reportId_example"; // String | 
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getEvaluationsOfReport(reportId, opts, (error, data, response) => {
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
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[AIEvaluation]**](AIEvaluation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMyReports

> PaginatedResultReportWithReportersAndEvaluations getMyReports(moduleId, opts)

Get My Reports

Get all reports the user has access to.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let moduleId = "moduleId_example"; // String | 
let opts = {
  'query': "query_example", // String | 
  'states': [new UgcGuardJavascriptApi.ReportState()], // [ReportState] | Filter by report states
  'sortBy': "sortBy_example", // String | Sort by field
  'sortOrder': "'desc'", // String | Sort order, either 'asc' or 'desc'
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getMyReports(moduleId, opts, (error, data, response) => {
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
 **query** | **String**|  | [optional] 
 **states** | [**[ReportState]**](ReportState.md)| Filter by report states | [optional] 
 **sortBy** | **String**| Sort by field | [optional] 
 **sortOrder** | **String**| Sort order, either &#39;asc&#39; or &#39;desc&#39; | [optional] [default to &#39;desc&#39;]
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**PaginatedResultReportWithReportersAndEvaluations**](PaginatedResultReportWithReportersAndEvaluations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportById

> ReportDB getReportById(reportId, opts)

Get Report By Id

Get a report by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportId = "reportId_example"; // String | 
let opts = {
  'secret': "secret_example" // String | 
};
apiInstance.getReportById(reportId, opts, (error, data, response) => {
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
 **secret** | **String**|  | [optional] 

### Return type

[**ReportDB**](ReportDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportersOfReport

> [ReportersWithPerson] getReportersOfReport(reportId, opts)

Get Reporters Of Report

Get all reporters of a report.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportId = "reportId_example"; // String | 
let opts = {
  'secret': "secret_example" // String | 
};
apiInstance.getReportersOfReport(reportId, opts, (error, data, response) => {
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
 **secret** | **String**|  | [optional] 

### Return type

[**[ReportersWithPerson]**](ReportersWithPerson.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rejectReport

> ReportDB rejectReport(reportId)

Reject Report

Resolves a report to the rejected state

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportId = "reportId_example"; // String | 
apiInstance.rejectReport(reportId, (error, data, response) => {
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

[**ReportDB**](ReportDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateReport

> ReportDB updateReport(reportDB)

Update Report

Update an existing report.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportDB = new UgcGuardJavascriptApi.ReportDB(); // ReportDB | 
apiInstance.updateReport(reportDB, (error, data, response) => {
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
 **reportDB** | [**ReportDB**](ReportDB.md)|  | 

### Return type

[**ReportDB**](ReportDB.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateReport

> Report validateReport(reportId, aiModel)

Validate Report

Validates a report using the given ai model

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.ReportsApi();
let reportId = "reportId_example"; // String | 
let aiModel = "aiModel_example"; // String | 
apiInstance.validateReport(reportId, aiModel, (error, data, response) => {
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
 **aiModel** | **String**|  | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

