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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UgcGuardJavascriptApi);
  }
}(this, function(expect, UgcGuardJavascriptApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UgcGuardJavascriptApi.ReportCreate();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ReportCreate', function() {
    it('should create an instance of ReportCreate', function() {
      // uncomment below and update the code to test ReportCreate
      //var instance = new UgcGuardJavascriptApi.ReportCreate();
      //expect(instance).to.be.a(UgcGuardJavascriptApi.ReportCreate);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new UgcGuardJavascriptApi.ReportCreate();
      //expect(instance).to.be();
    });

    it('should have the property moduleId (base name: "module_id")', function() {
      // uncomment below and update the code to test the property moduleId
      //var instance = new UgcGuardJavascriptApi.ReportCreate();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instance = new UgcGuardJavascriptApi.ReportCreate();
      //expect(instance).to.be();
    });

  });

}));
