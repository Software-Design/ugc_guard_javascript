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
import ReportCategory from './ReportCategory';

/**
 * The AIEvaluation model module.
 * @module model/AIEvaluation
 * @version 1.0.0
 */
class AIEvaluation {
    /**
     * Constructs a new <code>AIEvaluation</code>.
     * Model for AI evaluation. This is used to store the evaluation of AI models.
     * @alias module:model/AIEvaluation
     * @param reportId {String} 
     * @param aiModel {String} The AI model that performed the evaluation
     */
    constructor(reportId, aiModel) { 
        
        AIEvaluation.initialize(this, reportId, aiModel);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reportId, aiModel) { 
        obj['severity'] = 1;
        obj['report_id'] = reportId;
        obj['ai_model'] = aiModel;
        obj['generated_tokens'] = 0;
    }

    /**
     * Constructs a <code>AIEvaluation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AIEvaluation} obj Optional instance to populate.
     * @return {module:model/AIEvaluation} The populated <code>AIEvaluation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AIEvaluation();

            if (data.hasOwnProperty('ai_selected_category')) {
                obj['ai_selected_category'] = ReportCategory.constructFromObject(data['ai_selected_category']);
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'Number');
            }
            if (data.hasOwnProperty('explanation')) {
                obj['explanation'] = ApiClient.convertToType(data['explanation'], 'String');
            }
            if (data.hasOwnProperty('action_recommendation')) {
                obj['action_recommendation'] = ApiClient.convertToType(data['action_recommendation'], 'String');
            }
            if (data.hasOwnProperty('report_id')) {
                obj['report_id'] = ApiClient.convertToType(data['report_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('ai_model')) {
                obj['ai_model'] = ApiClient.convertToType(data['ai_model'], 'String');
            }
            if (data.hasOwnProperty('generated_tokens')) {
                obj['generated_tokens'] = ApiClient.convertToType(data['generated_tokens'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AIEvaluation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AIEvaluation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AIEvaluation.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['explanation'] && !(typeof data['explanation'] === 'string' || data['explanation'] instanceof String)) {
            throw new Error("Expected the field `explanation` to be a primitive type in the JSON string but got " + data['explanation']);
        }
        // ensure the json data is a string
        if (data['action_recommendation'] && !(typeof data['action_recommendation'] === 'string' || data['action_recommendation'] instanceof String)) {
            throw new Error("Expected the field `action_recommendation` to be a primitive type in the JSON string but got " + data['action_recommendation']);
        }
        // ensure the json data is a string
        if (data['report_id'] && !(typeof data['report_id'] === 'string' || data['report_id'] instanceof String)) {
            throw new Error("Expected the field `report_id` to be a primitive type in the JSON string but got " + data['report_id']);
        }
        // ensure the json data is a string
        if (data['ai_model'] && !(typeof data['ai_model'] === 'string' || data['ai_model'] instanceof String)) {
            throw new Error("Expected the field `ai_model` to be a primitive type in the JSON string but got " + data['ai_model']);
        }

        return true;
    }


}

AIEvaluation.RequiredProperties = ["report_id", "ai_model"];

/**
 * @member {module:model/ReportCategory} ai_selected_category
 */
AIEvaluation.prototype['ai_selected_category'] = undefined;

/**
 * Severity of the report, 1-5, 5 being the most severe. 
 * @member {Number} severity
 * @default 1
 */
AIEvaluation.prototype['severity'] = 1;

/**
 * Explanation of the AI's decision
 * @member {String} explanation
 */
AIEvaluation.prototype['explanation'] = undefined;

/**
 * Recommended action to take on the report
 * @member {String} action_recommendation
 */
AIEvaluation.prototype['action_recommendation'] = undefined;

/**
 * @member {String} report_id
 */
AIEvaluation.prototype['report_id'] = undefined;

/**
 * @member {Date} created_at
 */
AIEvaluation.prototype['created_at'] = undefined;

/**
 * The AI model that performed the evaluation
 * @member {String} ai_model
 */
AIEvaluation.prototype['ai_model'] = undefined;

/**
 * The number of tokens generated by the AI model during the evaluation
 * @member {Number} generated_tokens
 * @default 0
 */
AIEvaluation.prototype['generated_tokens'] = 0;






export default AIEvaluation;

