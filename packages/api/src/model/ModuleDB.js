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

/**
 * The ModuleDB model module.
 * @module model/ModuleDB
 * @version 1.0.0
 */
class ModuleDB {
    /**
     * Constructs a new <code>ModuleDB</code>.
     * Extends the Module model to include the database only fields that shall not be reported to the user.
     * @alias module:model/ModuleDB
     * @param name {String} 
     * @param organizationId {String} 
     */
    constructor(name, organizationId) { 
        
        ModuleDB.initialize(this, name, organizationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, organizationId) { 
        obj['send_mail_on_report'] = false;
        obj['send_mail_on_report_to_user'] = false;
        obj['send_mail_on_resolved_report_to_user'] = false;
        obj['name'] = name;
        obj['organization_id'] = organizationId;
        obj['auto_ai_validation'] = false;
    }

    /**
     * Constructs a <code>ModuleDB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModuleDB} obj Optional instance to populate.
     * @return {module:model/ModuleDB} The populated <code>ModuleDB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModuleDB();

            if (data.hasOwnProperty('send_mail_on_report')) {
                obj['send_mail_on_report'] = ApiClient.convertToType(data['send_mail_on_report'], 'Boolean');
            }
            if (data.hasOwnProperty('send_mail_on_report_to_user')) {
                obj['send_mail_on_report_to_user'] = ApiClient.convertToType(data['send_mail_on_report_to_user'], 'Boolean');
            }
            if (data.hasOwnProperty('send_mail_on_resolved_report_to_user')) {
                obj['send_mail_on_resolved_report_to_user'] = ApiClient.convertToType(data['send_mail_on_resolved_report_to_user'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('logo_url')) {
                obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
            }
            if (data.hasOwnProperty('auto_ai_validation')) {
                obj['auto_ai_validation'] = ApiClient.convertToType(data['auto_ai_validation'], 'Boolean');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModuleDB</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModuleDB</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ModuleDB.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['logo_url'] && !(typeof data['logo_url'] === 'string' || data['logo_url'] instanceof String)) {
            throw new Error("Expected the field `logo_url` to be a primitive type in the JSON string but got " + data['logo_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['organization_id'] && !(typeof data['organization_id'] === 'string' || data['organization_id'] instanceof String)) {
            throw new Error("Expected the field `organization_id` to be a primitive type in the JSON string but got " + data['organization_id']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }

        return true;
    }


}

ModuleDB.RequiredProperties = ["name", "organization_id"];

/**
 * @member {Boolean} send_mail_on_report
 * @default false
 */
ModuleDB.prototype['send_mail_on_report'] = false;

/**
 * @member {Boolean} send_mail_on_report_to_user
 * @default false
 */
ModuleDB.prototype['send_mail_on_report_to_user'] = false;

/**
 * @member {Boolean} send_mail_on_resolved_report_to_user
 * @default false
 */
ModuleDB.prototype['send_mail_on_resolved_report_to_user'] = false;

/**
 * @member {String} id
 */
ModuleDB.prototype['id'] = undefined;

/**
 * @member {String} logo_url
 */
ModuleDB.prototype['logo_url'] = undefined;

/**
 * @member {String} name
 */
ModuleDB.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ModuleDB.prototype['description'] = undefined;

/**
 * @member {String} organization_id
 */
ModuleDB.prototype['organization_id'] = undefined;

/**
 * @member {Boolean} auto_ai_validation
 * @default false
 */
ModuleDB.prototype['auto_ai_validation'] = false;

/**
 * @member {String} secret
 */
ModuleDB.prototype['secret'] = undefined;






export default ModuleDB;

