# UGC Guard JavaScript SDK

A JavaScript SDK for UGC Guard content moderation.

## Installation

```sh
npm install ugc-guard
```

## Usage

```js
import { GuardClient, test } from 'ugc-guard';

test();
const client = new GuardClient({ organizationId: 'your-org-id' });
// ...
```

## API Client

If you need the low-level OpenAPI client:

```sh
npm install ugc-guard-api
```

```js
import { ApiClient, ReportsApi } from 'ugc-guard-api';
```



