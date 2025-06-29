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
    instance = new UgcGuardJavascriptApi.UsersApi();
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

  describe('UsersApi', function() {
    describe('createChannel', function() {
      it('should call createChannel successfully', function(done) {
        //uncomment below and update the code to test createChannel
        //instance.createChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteChannel', function() {
      it('should call deleteChannel successfully', function(done) {
        //uncomment below and update the code to test deleteChannel
        //instance.deleteChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChannelById', function() {
      it('should call getChannelById successfully', function(done) {
        //uncomment below and update the code to test getChannelById
        //instance.getChannelById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChannelByIdOrName', function() {
      it('should call getChannelByIdOrName successfully', function(done) {
        //uncomment below and update the code to test getChannelByIdOrName
        //instance.getChannelByIdOrName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChannelsOfCurrentUser', function() {
      it('should call getChannelsOfCurrentUser successfully', function(done) {
        //uncomment below and update the code to test getChannelsOfCurrentUser
        //instance.getChannelsOfCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChannelsOfUser', function() {
      it('should call getChannelsOfUser successfully', function(done) {
        //uncomment below and update the code to test getChannelsOfUser
        //instance.getChannelsOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChannelsOfUserUsersChannelsOfUserIdGet', function() {
      it('should call getChannelsOfUserUsersChannelsOfUserIdGet successfully', function(done) {
        //uncomment below and update the code to test getChannelsOfUserUsersChannelsOfUserIdGet
        //instance.getChannelsOfUserUsersChannelsOfUserIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUser', function() {
      it('should call getCurrentUser successfully', function(done) {
        //uncomment below and update the code to test getCurrentUser
        //instance.getCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserById', function() {
      it('should call getUserById successfully', function(done) {
        //uncomment below and update the code to test getUserById
        //instance.getUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersOfChannel', function() {
      it('should call getUsersOfChannel successfully', function(done) {
        //uncomment below and update the code to test getUsersOfChannel
        //instance.getUsersOfChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('joinChannel', function() {
      it('should call joinChannel successfully', function(done) {
        //uncomment below and update the code to test joinChannel
        //instance.joinChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('joinChannelByEmail', function() {
      it('should call joinChannelByEmail successfully', function(done) {
        //uncomment below and update the code to test joinChannelByEmail
        //instance.joinChannelByEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leaveChannel', function() {
      it('should call leaveChannel successfully', function(done) {
        //uncomment below and update the code to test leaveChannel
        //instance.leaveChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChannel', function() {
      it('should call updateChannel successfully', function(done) {
        //uncomment below and update the code to test updateChannel
        //instance.updateChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
