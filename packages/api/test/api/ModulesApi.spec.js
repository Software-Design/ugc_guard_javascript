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
    instance = new UgcGuardJavascriptApi.ModulesApi();
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

  describe('ModulesApi', function() {
    describe('createModule', function() {
      it('should call createModule successfully', function(done) {
        //uncomment below and update the code to test createModule
        //instance.createModule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteModule', function() {
      it('should call deleteModule successfully', function(done) {
        //uncomment below and update the code to test deleteModule
        //instance.deleteModule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllModules', function() {
      it('should call getAllModules successfully', function(done) {
        //uncomment below and update the code to test getAllModules
        //instance.getAllModules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChannelsOfModule', function() {
      it('should call getChannelsOfModule successfully', function(done) {
        //uncomment below and update the code to test getChannelsOfModule
        //instance.getChannelsOfModule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMailSettingsOfModule', function() {
      it('should call getMailSettingsOfModule successfully', function(done) {
        //uncomment below and update the code to test getMailSettingsOfModule
        //instance.getMailSettingsOfModule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModuleById', function() {
      it('should call getModuleById successfully', function(done) {
        //uncomment below and update the code to test getModuleById
        //instance.getModuleById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getModuleSecret', function() {
      it('should call getModuleSecret successfully', function(done) {
        //uncomment below and update the code to test getModuleSecret
        //instance.getModuleSecret(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMyModules', function() {
      it('should call getMyModules successfully', function(done) {
        //uncomment below and update the code to test getMyModules
        //instance.getMyModules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMailSettingsOfModule', function() {
      it('should call updateMailSettingsOfModule successfully', function(done) {
        //uncomment below and update the code to test updateMailSettingsOfModule
        //instance.updateMailSettingsOfModule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateModule', function() {
      it('should call updateModule successfully', function(done) {
        //uncomment below and update the code to test updateModule
        //instance.updateModule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
