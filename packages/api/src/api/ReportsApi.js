/**
 * UGC Guard API
 * API for UGC Guard. A tool to help you manage reports on user generated content.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AIEnrichedAnswer from '../model/AIEnrichedAnswer';
import AIEvaluation from '../model/AIEvaluation';
import AllContentResponse from '../model/AllContentResponse';
import BodyCreateMagicReport from '../model/BodyCreateMagicReport';
import HTTPValidationError from '../model/HTTPValidationError';
import PaginatedResultReportDB from '../model/PaginatedResultReportDB';
import PaginatedResultReportWithReportersAndEvaluations from '../model/PaginatedResultReportWithReportersAndEvaluations';
import Report from '../model/Report';
import ReportCategory from '../model/ReportCategory';
import ReportDB from '../model/ReportDB';
import ReportState from '../model/ReportState';
import ReportersWithPerson from '../model/ReportersWithPerson';

/**
* Reports service.
* @module api/ReportsApi
* @version 1.0.0
*/
export default class ReportsApi {

    /**
    * Constructs a new ReportsApi. 
    * @alias module:api/ReportsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createMagicReport operation.
     * @callback module:api/ReportsApi~createMagicReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportDB} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Magic Report
     * Create a new report using our magic endpoint. This is recommended.
     * @param {module:model/ReportCategory} reportCategory 
     * @param {String} secret 
     * @param {module:model/BodyCreateMagicReport} bodyCreateMagicReport 
     * @param {Object} opts Optional parameters
     * @param {String} [customMessage] 
     * @param {module:api/ReportsApi~createMagicReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportDB}
     */
    createMagicReport(reportCategory, secret, bodyCreateMagicReport, opts, callback) {
      opts = opts || {};
      let postBody = bodyCreateMagicReport;
      // verify the required parameter 'reportCategory' is set
      if (reportCategory === undefined || reportCategory === null) {
        throw new Error("Missing the required parameter 'reportCategory' when calling createMagicReport");
      }
      // verify the required parameter 'secret' is set
      if (secret === undefined || secret === null) {
        throw new Error("Missing the required parameter 'secret' when calling createMagicReport");
      }
      // verify the required parameter 'bodyCreateMagicReport' is set
      if (bodyCreateMagicReport === undefined || bodyCreateMagicReport === null) {
        throw new Error("Missing the required parameter 'bodyCreateMagicReport' when calling createMagicReport");
      }

      let pathParams = {
      };
      let queryParams = {
        'report_category': reportCategory,
        'secret': secret,
        'custom_message': opts['customMessage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ReportDB;
      return this.apiClient.callApi(
        '/reports/magic', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createReport operation.
     * @callback module:api/ReportsApi~createReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportDB} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Report
     * Create a new report manually.
     * @param {String} secret 
     * @param {module:model/ReportDB} reportDB 
     * @param {module:api/ReportsApi~createReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportDB}
     */
    createReport(secret, reportDB, callback) {
      let postBody = reportDB;
      // verify the required parameter 'secret' is set
      if (secret === undefined || secret === null) {
        throw new Error("Missing the required parameter 'secret' when calling createReport");
      }
      // verify the required parameter 'reportDB' is set
      if (reportDB === undefined || reportDB === null) {
        throw new Error("Missing the required parameter 'reportDB' when calling createReport");
      }

      let pathParams = {
      };
      let queryParams = {
        'secret': secret
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ReportDB;
      return this.apiClient.callApi(
        '/reports/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the escalateReport operation.
     * @callback module:api/ReportsApi~escalateReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportDB} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Escalate Report
     * Escalate a report to the escalate state
     * @param {String} reportId 
     * @param {module:api/ReportsApi~escalateReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportDB}
     */
    escalateReport(reportId, callback) {
      let postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling escalateReport");
      }

      let pathParams = {
        'report_id': reportId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReportDB;
      return this.apiClient.callApi(
        '/reports/{report_id}/escalate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllReports operation.
     * @callback module:api/ReportsApi~getAllReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedResultReportDB} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Reports
     * Get all reports in the database.
     * @param {Object} opts Optional parameters
     * @param {Number} [offset = 0)] 
     * @param {Number} [limit = 100)] 
     * @param {module:api/ReportsApi~getAllReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedResultReportDB}
     */
    getAllReports(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedResultReportDB;
      return this.apiClient.callApi(
        '/reports/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContentOfReport operation.
     * @callback module:api/ReportsApi~getContentOfReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AllContentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Content Of Report
     * Get all content of a report.
     * @param {String} reportId 
     * @param {Object} opts Optional parameters
     * @param {String} [secret] 
     * @param {module:api/ReportsApi~getContentOfReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AllContentResponse}
     */
    getContentOfReport(reportId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling getContentOfReport");
      }

      let pathParams = {
        'report_id': reportId
      };
      let queryParams = {
        'secret': opts['secret']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AllContentResponse;
      return this.apiClient.callApi(
        '/reports/{report_id}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnrichedEvaluationsOfReport operation.
     * @callback module:api/ReportsApi~getEnrichedEvaluationsOfReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIEnrichedAnswer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Enriched Evaluations Of Report
     * Get all AI evaluations of a report and all available AI Models.
     * @param {String} reportId 
     * @param {module:api/ReportsApi~getEnrichedEvaluationsOfReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIEnrichedAnswer}
     */
    getEnrichedEvaluationsOfReport(reportId, callback) {
      let postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling getEnrichedEvaluationsOfReport");
      }

      let pathParams = {
        'report_id': reportId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AIEnrichedAnswer;
      return this.apiClient.callApi(
        '/reports/{report_id}/enriched_evaluations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEvaluationsOfReport operation.
     * @callback module:api/ReportsApi~getEvaluationsOfReportCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AIEvaluation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Evaluations Of Report
     * Get all AI evaluations of a report.
     * @param {String} reportId 
     * @param {Object} opts Optional parameters
     * @param {Number} [offset = 0)] 
     * @param {Number} [limit = 100)] 
     * @param {module:api/ReportsApi~getEvaluationsOfReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AIEvaluation>}
     */
    getEvaluationsOfReport(reportId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling getEvaluationsOfReport");
      }

      let pathParams = {
        'report_id': reportId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AIEvaluation];
      return this.apiClient.callApi(
        '/reports/{report_id}/evaluations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMyReports operation.
     * @callback module:api/ReportsApi~getMyReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedResultReportWithReportersAndEvaluations} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get My Reports
     * Get all reports the user has access to.
     * @param {String} moduleId 
     * @param {Object} opts Optional parameters
     * @param {String} [query] 
     * @param {Array.<module:model/ReportState>} [states] Filter by report states
     * @param {String} [sortBy] Sort by field
     * @param {String} [sortOrder = 'desc')] Sort order, either 'asc' or 'desc'
     * @param {Number} [offset = 0)] 
     * @param {Number} [limit = 100)] 
     * @param {module:api/ReportsApi~getMyReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedResultReportWithReportersAndEvaluations}
     */
    getMyReports(moduleId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'moduleId' is set
      if (moduleId === undefined || moduleId === null) {
        throw new Error("Missing the required parameter 'moduleId' when calling getMyReports");
      }

      let pathParams = {
        'module_id': moduleId
      };
      let queryParams = {
        'query': opts['query'],
        'states': this.apiClient.buildCollectionParam(opts['states'], 'multi'),
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedResultReportWithReportersAndEvaluations;
      return this.apiClient.callApi(
        '/reports/my/{module_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReportById operation.
     * @callback module:api/ReportsApi~getReportByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportDB} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Report By Id
     * Get a report by its ID.
     * @param {String} reportId 
     * @param {Object} opts Optional parameters
     * @param {String} [secret] 
     * @param {module:api/ReportsApi~getReportByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportDB}
     */
    getReportById(reportId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling getReportById");
      }

      let pathParams = {
        'report_id': reportId
      };
      let queryParams = {
        'secret': opts['secret']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReportDB;
      return this.apiClient.callApi(
        '/reports/{report_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReportersOfReport operation.
     * @callback module:api/ReportsApi~getReportersOfReportCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReportersWithPerson>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Reporters Of Report
     * Get all reporters of a report.
     * @param {String} reportId 
     * @param {Object} opts Optional parameters
     * @param {String} [secret] 
     * @param {module:api/ReportsApi~getReportersOfReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ReportersWithPerson>}
     */
    getReportersOfReport(reportId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling getReportersOfReport");
      }

      let pathParams = {
        'report_id': reportId
      };
      let queryParams = {
        'secret': opts['secret']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ReportersWithPerson];
      return this.apiClient.callApi(
        '/reports/{report_id}/reporters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the rejectReport operation.
     * @callback module:api/ReportsApi~rejectReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportDB} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reject Report
     * Resolves a report to the rejected state
     * @param {String} reportId 
     * @param {module:api/ReportsApi~rejectReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportDB}
     */
    rejectReport(reportId, callback) {
      let postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling rejectReport");
      }

      let pathParams = {
        'report_id': reportId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReportDB;
      return this.apiClient.callApi(
        '/reports/{report_id}/reject', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateReport operation.
     * @callback module:api/ReportsApi~updateReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportDB} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Report
     * Update an existing report.
     * @param {module:model/ReportDB} reportDB 
     * @param {module:api/ReportsApi~updateReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportDB}
     */
    updateReport(reportDB, callback) {
      let postBody = reportDB;
      // verify the required parameter 'reportDB' is set
      if (reportDB === undefined || reportDB === null) {
        throw new Error("Missing the required parameter 'reportDB' when calling updateReport");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ReportDB;
      return this.apiClient.callApi(
        '/reports/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validateReport operation.
     * @callback module:api/ReportsApi~validateReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Report} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Report
     * Validates a report using the given ai model
     * @param {String} reportId 
     * @param {String} aiModel 
     * @param {module:api/ReportsApi~validateReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Report}
     */
    validateReport(reportId, aiModel, callback) {
      let postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling validateReport");
      }
      // verify the required parameter 'aiModel' is set
      if (aiModel === undefined || aiModel === null) {
        throw new Error("Missing the required parameter 'aiModel' when calling validateReport");
      }

      let pathParams = {
        'report_id': reportId
      };
      let queryParams = {
        'ai_model': aiModel
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Report;
      return this.apiClient.callApi(
        '/reports/{report_id}/validate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
