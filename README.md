# UGC Guard JavaScript SDK

A JavaScript SDK for UGC Guard content moderation.

## Installation

Install the SDK using npm [ugc-guard](https://www.npmjs.com/package/ugc-guard):

```sh
npm install ugc-guard
```

If you need the low-level OpenAPI client [ugc-guard-api](https://www.npmjs.com/package/ugc-guard-api):

```sh
npm install ugc-guard-api
```

## Usage

### Initialize the Client

```js
import { GuardClient } from 'ugc-guard';

const guardClient = new GuardClient({
  organizationId: 'your-org-id',
  baseUrl: 'http://localhost:8099/'
});
```

### Reporting Content

To report content, you need to provide the following:

- `moduleId`: The ID of the module.
- `moduleSecret`: The secret key for the module.
- `typeId`: The type ID of the content.
- `mainContent`: The main content to report.
- `reporter`: The person reporting the content.
- `options`: Additional options such as description, report category, user message, context, and channels.

Example:

```js
import { 
  ReportContent,
  ReportPerson,
  ContentWrapper,
  MultiMediaBody,
  TextBody
} from 'ugc-guard';

const mainContent = new ContentWrapper(
  new ReportContent(
    "3",
    new TextBody({ text: "Example text" })
  ),
  new ReportPerson("1", {
    name: "John Doe",
    email: "john.doe@example.com"
  })
);

const context = [
  new ContentWrapper(
    new ReportContent(
      "4",
      new TextBody({ text: "Context text" })
    ),
    new ReportPerson("2", {
      name: "Jane Doe",
      email: "jane.doe@example.com"
    })
  )
];

const reporter = new ReportPerson("3", {
  name: "Reporter Name",
  email: "reporter@example.com"
});

await guardClient.report(
  "module-id",
  "module-secret",
  "type-id",
  mainContent,
  reporter,
  {
    description: "Report description",
    reportCategory: "other",
    userMessage: "User message",
    context: context,
    channels: []
  }
);
```

### Uploading Files

To upload files, use the `MultiMediaBody` class:

```js
const body = await MultiMediaBody.fromFilePath('./path-to-file.png');
```

### Verifying Signatures

To verify webhook signatures:

```js
import { GuardClient } from 'ugc-guard';

const isValid = GuardClient.verifySignature(payloadBody, secretToken, signatureHeader);
console.log(`Signature valid: ${isValid}`);
```

## API Client

For advanced use cases, you can use the low-level OpenAPI client:

```js
import { ApiClient, ReportsApi } from 'ugc-guard-api';

const apiClient = new ApiClient('http://localhost:8099/');
const reportsApi = new ReportsApi(apiClient);
```


## For development
### Local installation
```bash
git pull git@github.com:Software-Design/ugc_guard_javascript.git
cd packages/ugc_guard_sdk
npm link
```
Then navigate to another javascript project and install `ugc-guard` with
```bash
npm link ugc-guard
``` 
If you make changes to the `ugc_guard_sdk` you need to rebuild the package with
```bash
cd packages/ugc_guard_sdk
npm run build
```

### Update openapi client
```bash
openapi-generator-cli generate -i https://api.ugc-guard.com/openapi.json -g javascript  --additional-properties=projectName=ugc_guard_javascript_api,projectVersion="1.0.0", -o packages/api
```


