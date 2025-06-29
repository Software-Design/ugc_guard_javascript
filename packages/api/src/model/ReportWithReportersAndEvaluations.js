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

import ApiClient from '../ApiClient';
import AIEvaluation from './AIEvaluation';
import ReportState from './ReportState';
import ReportersWithPerson from './ReportersWithPerson';

/**
 * The ReportWithReportersAndEvaluations model module.
 * @module model/ReportWithReportersAndEvaluations
 * @version 1.0.0
 */
class ReportWithReportersAndEvaluations {
    /**
     * Constructs a new <code>ReportWithReportersAndEvaluations</code>.
     * Report with reporters information.
     * @alias module:model/ReportWithReportersAndEvaluations
     * @param moduleId {String} 
     * @param typeId {String} 
     * @param mainContentId {String} 
     */
    constructor(moduleId, typeId, mainContentId) { 
        
        ReportWithReportersAndEvaluations.initialize(this, moduleId, typeId, mainContentId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, moduleId, typeId, mainContentId) { 
        obj['module_id'] = moduleId;
        obj['type_id'] = typeId;
        obj['main_content_id'] = mainContentId;
    }

    /**
     * Constructs a <code>ReportWithReportersAndEvaluations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportWithReportersAndEvaluations} obj Optional instance to populate.
     * @return {module:model/ReportWithReportersAndEvaluations} The populated <code>ReportWithReportersAndEvaluations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportWithReportersAndEvaluations();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('module_id')) {
                obj['module_id'] = ApiClient.convertToType(data['module_id'], 'String');
            }
            if (data.hasOwnProperty('type_id')) {
                obj['type_id'] = ApiClient.convertToType(data['type_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('report_state')) {
                obj['report_state'] = ReportState.constructFromObject(data['report_state']);
            }
            if (data.hasOwnProperty('main_content_id')) {
                obj['main_content_id'] = ApiClient.convertToType(data['main_content_id'], 'String');
            }
            if (data.hasOwnProperty('reported_at')) {
                obj['reported_at'] = ApiClient.convertToType(data['reported_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('reporters')) {
                obj['reporters'] = ApiClient.convertToType(data['reporters'], [ReportersWithPerson]);
            }
            if (data.hasOwnProperty('evaluations')) {
                obj['evaluations'] = ApiClient.convertToType(data['evaluations'], [AIEvaluation]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportWithReportersAndEvaluations</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportWithReportersAndEvaluations</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReportWithReportersAndEvaluations.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['module_id'] && !(typeof data['module_id'] === 'string' || data['module_id'] instanceof String)) {
            throw new Error("Expected the field `module_id` to be a primitive type in the JSON string but got " + data['module_id']);
        }
        // ensure the json data is a string
        if (data['type_id'] && !(typeof data['type_id'] === 'string' || data['type_id'] instanceof String)) {
            throw new Error("Expected the field `type_id` to be a primitive type in the JSON string but got " + data['type_id']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['main_content_id'] && !(typeof data['main_content_id'] === 'string' || data['main_content_id'] instanceof String)) {
            throw new Error("Expected the field `main_content_id` to be a primitive type in the JSON string but got " + data['main_content_id']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        if (data['reporters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['reporters'])) {
                throw new Error("Expected the field `reporters` to be an array in the JSON data but got " + data['reporters']);
            }
            // validate the optional field `reporters` (array)
            for (const item of data['reporters']) {
                ReportersWithPerson.validateJSON(item);
            };
        }
        if (data['evaluations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['evaluations'])) {
                throw new Error("Expected the field `evaluations` to be an array in the JSON data but got " + data['evaluations']);
            }
            // validate the optional field `evaluations` (array)
            for (const item of data['evaluations']) {
                AIEvaluation.validateJSON(item);
            };
        }

        return true;
    }


}

ReportWithReportersAndEvaluations.RequiredProperties = ["module_id", "type_id", "main_content_id"];

/**
 * @member {String} description
 */
ReportWithReportersAndEvaluations.prototype['description'] = undefined;

/**
 * @member {String} module_id
 */
ReportWithReportersAndEvaluations.prototype['module_id'] = undefined;

/**
 * @member {String} type_id
 */
ReportWithReportersAndEvaluations.prototype['type_id'] = undefined;

/**
 * @member {String} id
 */
ReportWithReportersAndEvaluations.prototype['id'] = undefined;

/**
 * @member {module:model/ReportState} report_state
 */
ReportWithReportersAndEvaluations.prototype['report_state'] = undefined;

/**
 * @member {String} main_content_id
 */
ReportWithReportersAndEvaluations.prototype['main_content_id'] = undefined;

/**
 * @member {Date} reported_at
 */
ReportWithReportersAndEvaluations.prototype['reported_at'] = undefined;

/**
 * @member {Date} updated_at
 */
ReportWithReportersAndEvaluations.prototype['updated_at'] = undefined;

/**
 * @member {String} secret
 */
ReportWithReportersAndEvaluations.prototype['secret'] = undefined;

/**
 * @member {Array.<module:model/ReportersWithPerson>} reporters
 */
ReportWithReportersAndEvaluations.prototype['reporters'] = undefined;

/**
 * @member {Array.<module:model/AIEvaluation>} evaluations
 */
ReportWithReportersAndEvaluations.prototype['evaluations'] = undefined;






export default ReportWithReportersAndEvaluations;

