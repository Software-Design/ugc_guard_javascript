How to set this up:

To install this package you can run:
```
npm install ugc-guard 
```

[ugc-guard](www.npmjs.com/package/ugc-guard)
[ugc-guard-api](www.npmjs.com/package/ugc-guard-api)


# Install locally for development

```
cd ugc_guard_javascript/packages/ugc_guard_sdk
npm link
```

Then in another project run
```
npm link ugc-guard
```

Import the package like this:
```
import { test } from 'ugc-guard';
test();
```



