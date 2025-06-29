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
import HTTPValidationError from '../model/HTTPValidationError';
import Module from '../model/Module';
import ModuleDB from '../model/ModuleDB';
import PaginatedResultChannel from '../model/PaginatedResultChannel';
import PaginatedResultModule from '../model/PaginatedResultModule';
import SendMailSettings from '../model/SendMailSettings';

/**
* Modules service.
* @module api/ModulesApi
* @version 1.0.0
*/
export default class ModulesApi {

    /**
    * Constructs a new ModulesApi. 
    * @alias module:api/ModulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createModule operation.
     * @callback module:api/ModulesApi~createModuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModuleDB} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Module
     * Create a new module.
     * @param {String} organizationId 
     * @param {module:model/ModuleDB} moduleDB 
     * @param {module:api/ModulesApi~createModuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModuleDB}
     */
    createModule(organizationId, moduleDB, callback) {
      let postBody = moduleDB;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createModule");
      }
      // verify the required parameter 'moduleDB' is set
      if (moduleDB === undefined || moduleDB === null) {
        throw new Error("Missing the required parameter 'moduleDB' when calling createModule");
      }

      let pathParams = {
      };
      let queryParams = {
        'organization_id': organizationId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModuleDB;
      return this.apiClient.callApi(
        '/modules/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteModule operation.
     * @callback module:api/ModulesApi~deleteModuleCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Module
     * Delete a module by its ID.
     * @param {String} moduleId 
     * @param {module:api/ModulesApi~deleteModuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    deleteModule(moduleId, callback) {
      let postBody = null;
      // verify the required parameter 'moduleId' is set
      if (moduleId === undefined || moduleId === null) {
        throw new Error("Missing the required parameter 'moduleId' when calling deleteModule");
      }

      let pathParams = {
        'module_id': moduleId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/modules/{module_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllModules operation.
     * @callback module:api/ModulesApi~getAllModulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedResultModule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Modules
     * Get all modules in the database.
     * @param {Object} opts Optional parameters
     * @param {Number} [offset = 0)] 
     * @param {Number} [limit = 100)] 
     * @param {module:api/ModulesApi~getAllModulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedResultModule}
     */
    getAllModules(opts, callback) {
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
      let returnType = PaginatedResultModule;
      return this.apiClient.callApi(
        '/modules/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getChannelsOfModule operation.
     * @callback module:api/ModulesApi~getChannelsOfModuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedResultChannel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Channels Of Module
     * Get all channels of a module by its ID.
     * @param {String} moduleId 
     * @param {Object} opts Optional parameters
     * @param {Number} [offset = 0)] 
     * @param {Number} [limit = 100)] 
     * @param {module:api/ModulesApi~getChannelsOfModuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedResultChannel}
     */
    getChannelsOfModule(moduleId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'moduleId' is set
      if (moduleId === undefined || moduleId === null) {
        throw new Error("Missing the required parameter 'moduleId' when calling getChannelsOfModule");
      }

      let pathParams = {
        'module_id': moduleId
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
      let returnType = PaginatedResultChannel;
      return this.apiClient.callApi(
        '/modules/{module_id}/channels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMailSettingsOfModule operation.
     * @callback module:api/ModulesApi~getMailSettingsOfModuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendMailSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Mail Settings Of Module
     * Get the mail settings of a module by its ID.
     * @param {String} moduleId 
     * @param {module:api/ModulesApi~getMailSettingsOfModuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendMailSettings}
     */
    getMailSettingsOfModule(moduleId, callback) {
      let postBody = null;
      // verify the required parameter 'moduleId' is set
      if (moduleId === undefined || moduleId === null) {
        throw new Error("Missing the required parameter 'moduleId' when calling getMailSettingsOfModule");
      }

      let pathParams = {
        'module_id': moduleId
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
      let returnType = SendMailSettings;
      return this.apiClient.callApi(
        '/modules/{module_id}/mail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getModuleById operation.
     * @callback module:api/ModulesApi~getModuleByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Module} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Module By Id
     * Get a module by its ID.
     * @param {String} moduleId 
     * @param {module:api/ModulesApi~getModuleByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Module}
     */
    getModuleById(moduleId, callback) {
      let postBody = null;
      // verify the required parameter 'moduleId' is set
      if (moduleId === undefined || moduleId === null) {
        throw new Error("Missing the required parameter 'moduleId' when calling getModuleById");
      }

      let pathParams = {
        'module_id': moduleId
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
      let returnType = Module;
      return this.apiClient.callApi(
        '/modules/{module_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getModuleSecret operation.
     * @callback module:api/ModulesApi~getModuleSecretCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Module Secret
     * Get the secret of a module by its ID.
     * @param {String} moduleId 
     * @param {module:api/ModulesApi~getModuleSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getModuleSecret(moduleId, callback) {
      let postBody = null;
      // verify the required parameter 'moduleId' is set
      if (moduleId === undefined || moduleId === null) {
        throw new Error("Missing the required parameter 'moduleId' when calling getModuleSecret");
      }

      let pathParams = {
        'module_id': moduleId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/modules/secret/{module_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMyModules operation.
     * @callback module:api/ModulesApi~getMyModulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedResultModule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get My Modules
     * Get all modules the user has access to.
     * @param {String} organizationId 
     * @param {Object} opts Optional parameters
     * @param {Number} [offset = 0)] 
     * @param {Number} [limit = 100)] 
     * @param {module:api/ModulesApi~getMyModulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedResultModule}
     */
    getMyModules(organizationId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getMyModules");
      }

      let pathParams = {
        'organization_id': organizationId
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
      let returnType = PaginatedResultModule;
      return this.apiClient.callApi(
        '/modules/myModules/{organization_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMailSettingsOfModule operation.
     * @callback module:api/ModulesApi~updateMailSettingsOfModuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendMailSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Mail Settings Of Module
     * Update the mail settings of a module by its ID.
     * @param {String} moduleId 
     * @param {module:model/SendMailSettings} sendMailSettings 
     * @param {module:api/ModulesApi~updateMailSettingsOfModuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendMailSettings}
     */
    updateMailSettingsOfModule(moduleId, sendMailSettings, callback) {
      let postBody = sendMailSettings;
      // verify the required parameter 'moduleId' is set
      if (moduleId === undefined || moduleId === null) {
        throw new Error("Missing the required parameter 'moduleId' when calling updateMailSettingsOfModule");
      }
      // verify the required parameter 'sendMailSettings' is set
      if (sendMailSettings === undefined || sendMailSettings === null) {
        throw new Error("Missing the required parameter 'sendMailSettings' when calling updateMailSettingsOfModule");
      }

      let pathParams = {
        'module_id': moduleId
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
      let returnType = SendMailSettings;
      return this.apiClient.callApi(
        '/modules/{module_id}/mail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateModule operation.
     * @callback module:api/ModulesApi~updateModuleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Module} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Module
     * Update an existing module.
     * @param {String} moduleId 
     * @param {module:model/ModuleDB} moduleDB 
     * @param {module:api/ModulesApi~updateModuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Module}
     */
    updateModule(moduleId, moduleDB, callback) {
      let postBody = moduleDB;
      // verify the required parameter 'moduleId' is set
      if (moduleId === undefined || moduleId === null) {
        throw new Error("Missing the required parameter 'moduleId' when calling updateModule");
      }
      // verify the required parameter 'moduleDB' is set
      if (moduleDB === undefined || moduleDB === null) {
        throw new Error("Missing the required parameter 'moduleDB' when calling updateModule");
      }

      let pathParams = {
        'module_id': moduleId
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
      let returnType = Module;
      return this.apiClient.callApi(
        '/modules/{module_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
