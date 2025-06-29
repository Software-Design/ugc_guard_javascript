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
import AIUsage from '../model/AIUsage';
import AiModel from '../model/AiModel';
import HTTPValidationError from '../model/HTTPValidationError';

/**
* Ai service.
* @module api/AiApi
* @version 1.0.0
*/
export default class AiApi {

    /**
    * Constructs a new AiApi. 
    * @alias module:api/AiApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllAiModels operation.
     * @callback module:api/AiApi~getAllAiModelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AiModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Ai Models
     * Get a list of all available AI models.
     * @param {module:api/AiApi~getAllAiModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AiModel>}
     */
    getAllAiModels(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = [AiModel];
      return this.apiClient.callApi(
        '/ai/models', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAiUsageForOrganization operation.
     * @callback module:api/AiApi~getAllAiUsageForOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AIUsage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Ai Usage For Organization
     * Get all AI usage for a specific organization.
     * @param {String} organizationId 
     * @param {module:api/AiApi~getAllAiUsageForOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AIUsage>}
     */
    getAllAiUsageForOrganization(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAllAiUsageForOrganization");
      }

      let pathParams = {
        'organization_id': organizationId
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
      let returnType = [AIUsage];
      return this.apiClient.callApi(
        '/ai/usage/{organization_id}/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllMonthlyAiUsageForOrganization operation.
     * @callback module:api/AiApi~getAllMonthlyAiUsageForOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AIUsage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Monthly Ai Usage For Organization
     * Get all monthly AI usage for a specific organization.
     * @param {String} organizationId 
     * @param {Object} opts Optional parameters
     * @param {Date} [month] 
     * @param {module:api/AiApi~getAllMonthlyAiUsageForOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AIUsage>}
     */
    getAllMonthlyAiUsageForOrganization(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAllMonthlyAiUsageForOrganization");
      }

      let pathParams = {
        'organization_id': organizationId
      };
      let queryParams = {
        'month': opts['month']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AIUsage];
      return this.apiClient.callApi(
        '/ai/usage/{organization_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMonthlyAiUsageForOrganizationModel operation.
     * @callback module:api/AiApi~getMonthlyAiUsageForOrganizationModelCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AIUsage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Monthly Ai Usage For Organization And Model
     * Get monthly AI usage for a specific organization and AI model.
     * @param {String} organizationId 
     * @param {String} aiModel 
     * @param {Object} opts Optional parameters
     * @param {Date} [month] 
     * @param {module:api/AiApi~getMonthlyAiUsageForOrganizationModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AIUsage>}
     */
    getMonthlyAiUsageForOrganizationModel(organizationId, aiModel, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getMonthlyAiUsageForOrganizationModel");
      }
      // verify the required parameter 'aiModel' is set
      if (aiModel === undefined || aiModel === null) {
        throw new Error("Missing the required parameter 'aiModel' when calling getMonthlyAiUsageForOrganizationModel");
      }

      let pathParams = {
        'organization_id': organizationId,
        'ai_model': aiModel
      };
      let queryParams = {
        'month': opts['month']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AIUsage];
      return this.apiClient.callApi(
        '/ai/usage/{organization_id}/{ai_model}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
