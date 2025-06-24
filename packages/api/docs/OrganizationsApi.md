# UgcGuardJavascriptApi.OrganizationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptInvitationToOrganization**](OrganizationsApi.md#acceptInvitationToOrganization) | **POST** /organizations/accept/{organization_id} | Accept Invitation To Organization
[**changeMembershipState**](OrganizationsApi.md#changeMembershipState) | **POST** /organizations/membership/{organization_id} | Change Membership State
[**createOrganization**](OrganizationsApi.md#createOrganization) | **POST** /organizations/ | Create Organization
[**deleteOrganization**](OrganizationsApi.md#deleteOrganization) | **DELETE** /organizations/{organization_id} | Delete Organization
[**denyInvitationToOrganization**](OrganizationsApi.md#denyInvitationToOrganization) | **DELETE** /organizations/invite/deny/{organization_id} | Deny Invitation To Organization
[**getMembershipState**](OrganizationsApi.md#getMembershipState) | **GET** /organizations/membership/{organization_id} | Get Membership State
[**getMyOrganizations**](OrganizationsApi.md#getMyOrganizations) | **GET** /organizations/ | Get All Organizations
[**getMyOrganizationsGrouped**](OrganizationsApi.md#getMyOrganizationsGrouped) | **GET** /organizations/grouped | Get All Of Your Organizations Grouped By Membership State
[**getOrganization**](OrganizationsApi.md#getOrganization) | **GET** /organizations/{organization_id} | Get Organization
[**getOrganizationMembers**](OrganizationsApi.md#getOrganizationMembers) | **GET** /organizations/{organization_id}/members | Get Organization Members
[**inviteUserToOrganization**](OrganizationsApi.md#inviteUserToOrganization) | **POST** /organizations/invite/by_id/{user_id} | Invite User To Organization
[**inviteUserToOrganizationByEmail**](OrganizationsApi.md#inviteUserToOrganizationByEmail) | **POST** /organizations/invite/by_email | Invite User To Organization By Email
[**leaveOrganization**](OrganizationsApi.md#leaveOrganization) | **DELETE** /organizations/leave/{organization_id} | Leave Organization
[**revokeUserFromOrganization**](OrganizationsApi.md#revokeUserFromOrganization) | **DELETE** /organizations/revoke/{organization_id}/{user_id} | Revoke User From Organization
[**updateOrganization**](OrganizationsApi.md#updateOrganization) | **PUT** /organizations/{organization_id} | Update Organization



## acceptInvitationToOrganization

> Boolean acceptInvitationToOrganization(organizationId)

Accept Invitation To Organization

Accepts an invitation to the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
apiInstance.acceptInvitationToOrganization(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## changeMembershipState

> UserOrganizationMembershipState changeMembershipState(organizationId, body, opts)

Change Membership State

Changes the membership state of the user in the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
let body = "body_example"; // String | 
let opts = {
  'userId': "userId_example" // String | 
};
apiInstance.changeMembershipState(organizationId, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **body** | **String**|  | 
 **userId** | **String**|  | [optional] 

### Return type

[**UserOrganizationMembershipState**](UserOrganizationMembershipState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrganization

> Organization createOrganization(organization)

Create Organization

Creates a new organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organization = new UgcGuardJavascriptApi.Organization(); // Organization | 
apiInstance.createOrganization(organization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | [**Organization**](Organization.md)|  | 

### Return type

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrganization

> Boolean deleteOrganization(organizationId)

Delete Organization

Deletes the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
apiInstance.deleteOrganization(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## denyInvitationToOrganization

> Boolean denyInvitationToOrganization(organizationId)

Deny Invitation To Organization

Denies an invitation to the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
apiInstance.denyInvitationToOrganization(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembershipState

> UserOrganizationMembershipState getMembershipState(organizationId)

Get Membership State

Returns the membership state of the user in the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
apiInstance.getMembershipState(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

[**UserOrganizationMembershipState**](UserOrganizationMembershipState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMyOrganizations

> [Organization] getMyOrganizations(opts)

Get All Organizations

Returns all organizations the current user is invited, member or admin of

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getMyOrganizations(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[Organization]**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMyOrganizationsGrouped

> OrganizationGroupings getMyOrganizationsGrouped(opts)

Get All Of Your Organizations Grouped By Membership State

Returns all organizations the current user is invited, member or admin of, grouped by membership state

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getMyOrganizationsGrouped(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**OrganizationGroupings**](OrganizationGroupings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganization

> Organization getOrganization(organizationId)

Get Organization

Returns the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
apiInstance.getOrganization(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationMembers

> PaginatedResultUserWithMembershipState getOrganizationMembers(organizationId, opts)

Get Organization Members

Returns all members of the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
let opts = {
  'searchTerm': "searchTerm_example", // String | 
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getOrganizationMembers(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **searchTerm** | **String**|  | [optional] 
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**PaginatedResultUserWithMembershipState**](PaginatedResultUserWithMembershipState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteUserToOrganization

> Organization inviteUserToOrganization(userId, organizationId)

Invite User To Organization

Invites a user to the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let userId = "userId_example"; // String | 
let organizationId = "organizationId_example"; // String | 
apiInstance.inviteUserToOrganization(userId, organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **organizationId** | **String**|  | 

### Return type

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteUserToOrganizationByEmail

> Boolean inviteUserToOrganizationByEmail(email, organizationId)

Invite User To Organization By Email

Invites a user to the organization by email

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let email = "email_example"; // String | 
let organizationId = "organizationId_example"; // String | 
apiInstance.inviteUserToOrganizationByEmail(email, organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 
 **organizationId** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## leaveOrganization

> Boolean leaveOrganization(organizationId)

Leave Organization

Leaves the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
apiInstance.leaveOrganization(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeUserFromOrganization

> Boolean revokeUserFromOrganization(organizationId, userId)

Revoke User From Organization

Revokes a user from the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.revokeUserFromOrganization(organizationId, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrganization

> Organization updateOrganization(organizationId, organization)

Update Organization

Updates the organization

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.OrganizationsApi();
let organizationId = "organizationId_example"; // String | 
let organization = new UgcGuardJavascriptApi.Organization(); // Organization | 
apiInstance.updateOrganization(organizationId, organization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **organization** | [**Organization**](Organization.md)|  | 

### Return type

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

