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
    instance = new UgcGuardJavascriptApi.UserWithMembershipState();
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

  describe('UserWithMembershipState', function() {
    it('should create an instance of UserWithMembershipState', function() {
      // uncomment below and update the code to test UserWithMembershipState
      //var instance = new UgcGuardJavascriptApi.UserWithMembershipState();
      //expect(instance).to.be.a(UgcGuardJavascriptApi.UserWithMembershipState);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new UgcGuardJavascriptApi.UserWithMembershipState();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new UgcGuardJavascriptApi.UserWithMembershipState();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new UgcGuardJavascriptApi.UserWithMembershipState();
      //expect(instance).to.be();
    });

    it('should have the property avatarUrl (base name: "avatar_url")', function() {
      // uncomment below and update the code to test the property avatarUrl
      //var instance = new UgcGuardJavascriptApi.UserWithMembershipState();
      //expect(instance).to.be();
    });

    it('should have the property membershipState (base name: "membership_state")', function() {
      // uncomment below and update the code to test the property membershipState
      //var instance = new UgcGuardJavascriptApi.UserWithMembershipState();
      //expect(instance).to.be();
    });

  });

}));
