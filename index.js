// Re-export the SDK from the root for GitHub installs
export * from './packages/ugc_guard_sdk/src/index.js';
// Re-export the OpenAPI client from the root for GitHub installs
import * as UGCGuardApi from './packages/api/dist/index.js';
export { UGCGuardApi };
