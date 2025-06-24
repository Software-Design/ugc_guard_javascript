# UgcGuardJavascriptApi.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChannel**](UsersApi.md#createChannel) | **POST** /users/channels | Create Channel
[**deleteChannel**](UsersApi.md#deleteChannel) | **DELETE** /users/channels/{channel_id} | Delete Channel
[**getChannelById**](UsersApi.md#getChannelById) | **GET** /users/channels/by_id/{channel_id} | Get Channel By Id
[**getChannelByIdOrName**](UsersApi.md#getChannelByIdOrName) | **GET** /users/channels/by_id_or_name/{id_or_name} | Get Channel By Id Or Name
[**getChannelsOfCurrentUser**](UsersApi.md#getChannelsOfCurrentUser) | **GET** /users/my/channels | Get Channels Of Current User
[**getChannelsOfUser**](UsersApi.md#getChannelsOfUser) | **GET** /users/{user_id}/channels | Get Channels Of User
[**getChannelsOfUserUsersChannelsOfUserIdGet**](UsersApi.md#getChannelsOfUserUsersChannelsOfUserIdGet) | **GET** /users/channels/of/{user_id} | Get Channels Of User
[**getCurrentUser**](UsersApi.md#getCurrentUser) | **GET** /users/myself | Get Current User
[**getUserById**](UsersApi.md#getUserById) | **GET** /users/{user_id} | Get User By Id
[**getUsersOfChannel**](UsersApi.md#getUsersOfChannel) | **GET** /users/channels/{channel_id}/users | Get Users Of Channel
[**joinChannel**](UsersApi.md#joinChannel) | **POST** /users/channels/{channel_id}/join | Join Channel
[**joinChannelByEmail**](UsersApi.md#joinChannelByEmail) | **POST** /users/channels/{channel_id}/join_by_email | Join Channel By Email
[**leaveChannel**](UsersApi.md#leaveChannel) | **POST** /users/channels/{channel_id}/leave | Leave Channel
[**updateChannel**](UsersApi.md#updateChannel) | **PUT** /users/channels/{channel_id} | Update Channel



## createChannel

> Channel createChannel(channel)

Create Channel

Create a new channel.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let channel = new UgcGuardJavascriptApi.Channel(); // Channel | 
apiInstance.createChannel(channel, (error, data, response) => {
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
 **channel** | [**Channel**](Channel.md)|  | 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteChannel

> Boolean deleteChannel(channelId)

Delete Channel

Delete a channel by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let channelId = "channelId_example"; // String | 
apiInstance.deleteChannel(channelId, (error, data, response) => {
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
 **channelId** | **String**|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelById

> Channel getChannelById(channelId)

Get Channel By Id

Get a channel by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let channelId = "channelId_example"; // String | 
apiInstance.getChannelById(channelId, (error, data, response) => {
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
 **channelId** | **String**|  | 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelByIdOrName

> Channel getChannelByIdOrName(idOrName)

Get Channel By Id Or Name

Get a channel by its ID or name.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let idOrName = "idOrName_example"; // String | 
apiInstance.getChannelByIdOrName(idOrName, (error, data, response) => {
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
 **idOrName** | **String**|  | 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelsOfCurrentUser

> PaginatedResultChannel getChannelsOfCurrentUser(opts)

Get Channels Of Current User

Get the channels of the current user.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let opts = {
  'offset': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.getChannelsOfCurrentUser(opts, (error, data, response) => {
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

[**PaginatedResultChannel**](PaginatedResultChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelsOfUser

> PaginatedResultChannel getChannelsOfUser(userId, opts)

Get Channels Of User

Get the channels of a user.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let userId = "userId_example"; // String | 
let opts = {
  'limit': 100, // Number | 
  'offset': 0 // Number | 
};
apiInstance.getChannelsOfUser(userId, opts, (error, data, response) => {
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
 **limit** | **Number**|  | [optional] [default to 100]
 **offset** | **Number**|  | [optional] [default to 0]

### Return type

[**PaginatedResultChannel**](PaginatedResultChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelsOfUserUsersChannelsOfUserIdGet

> PaginatedResultChannel getChannelsOfUserUsersChannelsOfUserIdGet(userId, opts)

Get Channels Of User

Get the channels of a user. :param user_id: The ID of the user :param session: Database session :param current_user: Current user :param limit: Limit for pagination :param offset: Offset for pagination :return: Dictionary containing the channels of the user

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let userId = "userId_example"; // String | 
let opts = {
  'limit': 100, // Number | 
  'offset': 0 // Number | 
};
apiInstance.getChannelsOfUserUsersChannelsOfUserIdGet(userId, opts, (error, data, response) => {
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
 **limit** | **Number**|  | [optional] [default to 100]
 **offset** | **Number**|  | [optional] [default to 0]

### Return type

[**PaginatedResultChannel**](PaginatedResultChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentUser

> UserBase getCurrentUser()

Get Current User

Get the current user.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
apiInstance.getCurrentUser((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserBase**](UserBase.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserById

> UserBase getUserById(userId)

Get User By Id

Get a user by their ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let userId = "userId_example"; // String | 
apiInstance.getUserById(userId, (error, data, response) => {
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

### Return type

[**UserBase**](UserBase.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersOfChannel

> PaginatedResultUserBase getUsersOfChannel(channelId, opts)

Get Users Of Channel

Get the users of a channel by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let channelId = "channelId_example"; // String | 
let opts = {
  'limit': 100, // Number | 
  'offset': 0 // Number | 
};
apiInstance.getUsersOfChannel(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**|  | 
 **limit** | **Number**|  | [optional] [default to 100]
 **offset** | **Number**|  | [optional] [default to 0]

### Return type

[**PaginatedResultUserBase**](PaginatedResultUserBase.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## joinChannel

> ChannelUser joinChannel(channelId, userId)

Join Channel

Join a channel by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let channelId = "channelId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.joinChannel(channelId, userId, (error, data, response) => {
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
 **channelId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**ChannelUser**](ChannelUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## joinChannelByEmail

> ChannelUser joinChannelByEmail(channelId, email)

Join Channel By Email

Join a channel by its ID using email.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let channelId = "channelId_example"; // String | 
let email = "email_example"; // String | 
apiInstance.joinChannelByEmail(channelId, email, (error, data, response) => {
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
 **channelId** | **String**|  | 
 **email** | **String**|  | 

### Return type

[**ChannelUser**](ChannelUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## leaveChannel

> Boolean leaveChannel(channelId, opts)

Leave Channel

Leave a channel by its ID.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let channelId = "channelId_example"; // String | 
let opts = {
  'userId': "userId_example" // String | 
};
apiInstance.leaveChannel(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**|  | 
 **userId** | **String**|  | [optional] 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateChannel

> Channel updateChannel(channelId, channel)

Update Channel

Update an existing channel.

### Example

```javascript
import UgcGuardJavascriptApi from 'ugc_guard_javascript_api';

let apiInstance = new UgcGuardJavascriptApi.UsersApi();
let channelId = "channelId_example"; // String | 
let channel = new UgcGuardJavascriptApi.Channel(); // Channel | 
apiInstance.updateChannel(channelId, channel, (error, data, response) => {
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
 **channelId** | **String**|  | 
 **channel** | [**Channel**](Channel.md)|  | 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

