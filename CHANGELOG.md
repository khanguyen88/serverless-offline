# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [9.2.2](https://github.com/dherault/serverless-offline/compare/v9.2.1...v9.2.2) (2022-08-16)

### Bug Fixes

- published package content ([#1542](https://github.com/dherault/serverless-offline/issues/1542)) ([79c7ffd](https://github.com/dherault/serverless-offline/commit/79c7ffd99207d6d60bf7ed9606a63ac8a55bc45f))

### [9.2.1](https://github.com/dherault/serverless-offline/compare/v9.2.0...v9.2.1) (2022-08-15)

### Bug Fixes

- region + stage startup log ([#1539](https://github.com/dherault/serverless-offline/issues/1539)) ([62f1e3b](https://github.com/dherault/serverless-offline/commit/62f1e3bbe3291fa354f58b064e7b60a0dc98fa96))

### Maintenance Improvements

- make handler process private ([df0c474](https://github.com/dherault/serverless-offline/commit/df0c4743b32cca58def9a0d6f52b658908d25652))
- pass function options ([c1f3c1b](https://github.com/dherault/serverless-offline/commit/c1f3c1b941a34324e25253794e80876123a11313))

## [9.2.0](https://github.com/dherault/serverless-offline/compare/v9.1.7...v9.2.0) (2022-08-11)

### Features

- use aws-lambda-ric UserFunction.js ([#1534](https://github.com/dherault/serverless-offline/issues/1534)) ([de92b9e](https://github.com/dherault/serverless-offline/commit/de92b9ee1a1ef04502b782ca3758d6d2c20b1dd9))

### Maintenance Improvements

- in-process constructor ([12ab4c9](https://github.com/dherault/serverless-offline/commit/12ab4c9512256627eef3f65ebbfbfc7d2c9d174f))
- move splitHandlerPathAndName call to runners ([690325b](https://github.com/dherault/serverless-offline/commit/690325bb5c68b3813eb9697e4552fd712b291687))
- use named import ([77f71cc](https://github.com/dherault/serverless-offline/commit/77f71ccaac3a87c905440a1b51a6c75f1b8bf934))

### [9.1.7](https://github.com/dherault/serverless-offline/compare/v9.1.5...v9.1.7) (2022-08-08)

### Bug Fixes

- https protocol option default value ([57f7d87](https://github.com/dherault/serverless-offline/commit/57f7d8742f21997514b502e60cedd62536f4e22a))

### Maintenance Improvements

- declare fields, remove from constructor ([0e82819](https://github.com/dherault/serverless-offline/commit/0e82819d30a5d101fb9fbe00458bdcc45205983a))
- declare fields, remove from constructor, part 2 ([364ef2c](https://github.com/dherault/serverless-offline/commit/364ef2c23a9849ff3a01b9e026333bd0f0f86367))
- https protocol ternary consistency ([2b2a8fa](https://github.com/dherault/serverless-offline/commit/2b2a8fa8659b7fc728e12f0e634c2771ac7b851c))
- load certs private method ([33e4e01](https://github.com/dherault/serverless-offline/commit/33e4e01b38e6cefcdd7b1050561012f1ef815714))
- use conditional spread ([5dfe577](https://github.com/dherault/serverless-offline/commit/5dfe57783c5dbd78050abdf49a009caf9fd1fe00))

### [9.1.6](https://github.com/dherault/serverless-offline/compare/v9.1.5...v9.1.6) (2022-08-05)

### Bug Fixes

- event.resource in catch-all route gets + changed to \* ([#1524](https://github.com/dherault/serverless-offline/issues/1524)) ([0494fdb](https://github.com/dherault/serverless-offline/commit/0494fdb27427c96a05313d1f9fc3bdcbeba30e0a))
- tls options ([#1529](https://github.com/dherault/serverless-offline/issues/1529)) ([c76939d](https://github.com/dherault/serverless-offline/commit/c76939d58b8cec40a6ae876076faaac8eb817344))

### [9.1.5](https://github.com/dherault/serverless-offline/compare/v9.1.4...v9.1.5) (2022-08-04)

### Bug Fixes

- child processes run mode ([#1527](https://github.com/dherault/serverless-offline/issues/1527)) ([05e5e3a](https://github.com/dherault/serverless-offline/commit/05e5e3aa8dd97d0516a6cdc143dcaea465c4a892))

### [9.1.4](https://github.com/dherault/serverless-offline/compare/v9.1.3...v9.1.4) (2022-08-03)

### Bug Fixes

- make @serverless/utils a direct dependency ([83a4885](https://github.com/dherault/serverless-offline/commit/83a4885187a8358c29a04c976373c81b7137f488))

### [9.1.3](https://github.com/dherault/serverless-offline/compare/v9.1.2...v9.1.3) (2022-08-02)

### Bug Fixes

- change protectedRoutes type from array to string ([38debc6](https://github.com/dherault/serverless-offline/commit/38debc6cc8344f816f7c404cbcb503c8f0cd35cf))
- remove unused parameter ([7cd4a5a](https://github.com/dherault/serverless-offline/commit/7cd4a5acecf2887eaaf6fc398f40a0a20997059f))

### Maintenance Improvements

- move create hapi handler into separate function ([45454af](https://github.com/dherault/serverless-offline/commit/45454aff01b3bc6f51db25c77c454a0fe6f688a6))
- move http server setup to separate function ([6f03251](https://github.com/dherault/serverless-offline/commit/6f03251105d5c2a4d91ce1abf2b796e609752851))
- move register plugins to create server ([5e101a6](https://github.com/dherault/serverless-offline/commit/5e101a6c6f2003c754bda81ac700a62231da3806))
- nit ([739273d](https://github.com/dherault/serverless-offline/commit/739273de7be49f94915762ecf3ba58aae3b2488c))
- remove corsAllowCredentials from default options ([26a9567](https://github.com/dherault/serverless-offline/commit/26a95679074fcecd9c123decbe949264b47088c3))
- replace arrow functions ([5e3e3d8](https://github.com/dherault/serverless-offline/commit/5e3e3d83154f1ebf35a0e93e5570dfda135ac964))
- use fs/promises ([7019d28](https://github.com/dherault/serverless-offline/commit/7019d285034883ca2df8eb7c3327bc15fa0f1119))

### [9.1.2](https://github.com/dherault/serverless-offline/compare/v9.1.1...v9.1.2) (2022-07-31)

### Bug Fixes

- Prevent logging `undefined` for event schedule ([#1520](https://github.com/dherault/serverless-offline/issues/1520)) ([3042bc2](https://github.com/dherault/serverless-offline/commit/3042bc2e8d92387800dedef0e491d737dd64c82a))
- remove unsupported stageVariables ([4648d39](https://github.com/dherault/serverless-offline/commit/4648d39837ee76b81cf5adedce0bb05c1e97f9c4))

### Maintenance Improvements

- make more payload identifier private static ([07ec960](https://github.com/dherault/serverless-offline/commit/07ec960d63a513fa1836c70b48624559735b9a40))
- make payload identifier private static ([7d4bf76](https://github.com/dherault/serverless-offline/commit/7d4bf76039237e4fd9d22a1271dc94c13ad175f2))
- simplify, remove else condition ([df77e14](https://github.com/dherault/serverless-offline/commit/df77e14bb761e8a12af1ac11f19f6b0cf823e37b))
- use Object.hasOwn ([ec1210a](https://github.com/dherault/serverless-offline/commit/ec1210a327aaaee61a9ca11b9604e411136b29b5))
- use PAYLOAD_IDENTIFIER ([d6eb227](https://github.com/dherault/serverless-offline/commit/d6eb227f932ea6b511fd2b9c249bd9351c84feca))
- use prototype.includes ([50679e1](https://github.com/dherault/serverless-offline/commit/50679e1e55200b63096245a7d5319106a08fda77))

### [9.1.1](https://github.com/dherault/serverless-offline/compare/v9.1.0...v9.1.1) (2022-07-30)

### Bug Fixes

- default lambda timeout ([ad217e2](https://github.com/dherault/serverless-offline/commit/ad217e268315062d338a9cefdc2a584728f5025b))
- round getRemainingTimeInMillis to nearest integer ([2106504](https://github.com/dherault/serverless-offline/commit/21065040f722898e96806d9c4d80eaae7245e938))
- use Math.floor() ([f6145d9](https://github.com/dherault/serverless-offline/commit/f6145d92aa2c55829269861b0b3e40b5d1c52e16))
- worker-runner timout option ([#1515](https://github.com/dherault/serverless-offline/issues/1515)) ([3437822](https://github.com/dherault/serverless-offline/commit/343782270df8f4a6c50236d68581553d81554d97))

### Maintenance Improvements

- nit ([6d82e3e](https://github.com/dherault/serverless-offline/commit/6d82e3e016420552ce4ff48701d4fdbdefa7035e))
- replace execaSync with execa (promise) ([#1518](https://github.com/dherault/serverless-offline/issues/1518)) ([7fe54c5](https://github.com/dherault/serverless-offline/commit/7fe54c5d403ab76a15d58a8ba0200a7dddddab45))
- use object shorthand for getRemainingTimeInMillis ([a9078df](https://github.com/dherault/serverless-offline/commit/a9078df619bbfd79dd325afb38e012ea8001fc5a))
- use try/finally ([58698fa](https://github.com/dherault/serverless-offline/commit/58698fab154f108d913744574745db2706382f2f))

## [9.1.0](https://github.com/dherault/serverless-offline/compare/v9.0.0...v9.1.0) (2022-07-27)

### Features

- add local environment variables flag ([#1513](https://github.com/dherault/serverless-offline/issues/1513)) ([4de5620](https://github.com/dherault/serverless-offline/commit/4de56207114d1133fb7ca05483af6625c858bc7d))
- copy all AWS_xxx environment variables from local ([c6d5546](https://github.com/dherault/serverless-offline/commit/c6d554662625637532bc941ffcaf7e84d30a9f7d))
- rename localEnvironmentVariables flag to localEnvironment ([b041577](https://github.com/dherault/serverless-offline/commit/b041577947bd519dadfa69c32e3deeb3f28e79e9))

### Bug Fixes

- change default lambda runtime to nodejs14.x ([1ad9fbd](https://github.com/dherault/serverless-offline/commit/1ad9fbd90447947578f4fa5b6ae4e5627d75acf1))
- Cleanly exit node process ([#1508](https://github.com/dherault/serverless-offline/issues/1508)) ([ff9d0b5](https://github.com/dherault/serverless-offline/commit/ff9d0b58b3b6866ccd54c4c54a457b74c051d603))
- env property is always a string ([a226d63](https://github.com/dherault/serverless-offline/commit/a226d6330dacd8f212f53c7aeea0ebf1d69c5e99))
- remove duplicate env.IS_OFFLINE variable ([b7f7072](https://github.com/dherault/serverless-offline/commit/b7f70729a4bf085bcec715d72975d79f53aad2e4))
- remove replay ([d325837](https://github.com/dherault/serverless-offline/commit/d325837c2e1193c175dae2b3a5958bc4b4a7fa91))

### Maintenance Improvements

- make handler private field ([fbdb162](https://github.com/dherault/serverless-offline/commit/fbdb1628c4777ee130e52e5ccddc88c391a29bfb))
- move \_HANDLER to aws env vars ([3c92cd4](https://github.com/dherault/serverless-offline/commit/3c92cd4bb2dc7460e45d3fb73cea883b3f3c2acd))
- remove #getEnv ([f6f40fd](https://github.com/dherault/serverless-offline/commit/f6f40fdf7afecf1cd3e5abe99bd54cc3fa9a1eb3))
- remove resolve joins in provider envs ([e459110](https://github.com/dherault/serverless-offline/commit/e459110b1aa327ea8ac5b7e5d9a47bab708445ca))

## [9.0.0](https://github.com/dherault/serverless-offline/compare/v8.8.0...v9.0.0) (2022-07-18)

### ⚠ BREAKING CHANGES

- use node: protocol imports (#1435)
- use fs/promises (#1432)
- remove serverless v1 support
- remove node.js v12 support, add v18 (#1424)

### Features

- add 'configValidationMode: error' option ([8de4008](https://github.com/dherault/serverless-offline/commit/8de400858de54ff9ac64b2eed855094541a2ddf6))
- add 'configValidationMode: error' option, Part 2 ([3610786](https://github.com/dherault/serverless-offline/commit/361078698c03f79602d1e1687c263c970bed6c04))
- add 'configValidationMode: error' option, Part 3 ([6f3e66b](https://github.com/dherault/serverless-offline/commit/6f3e66b7e4d12dc1b38dc2a504f133e50f2bd60b))
- add 'configValidationMode: error' option, Part 4 ([b7e73f2](https://github.com/dherault/serverless-offline/commit/b7e73f26eff6a69037fa68b91dedfac02ea94ed3))
- add 'configValidationMode: error' option, Part 5 ([39d37cb](https://github.com/dherault/serverless-offline/commit/39d37cb92599cf57f121d31f79fc4b8d73dce6c4))
- add new runtimes ([#1464](https://github.com/dherault/serverless-offline/issues/1464)) ([3ae08c4](https://github.com/dherault/serverless-offline/commit/3ae08c4c83d3455deac7d4946fef250b770fd97b))
- add object.hasown shim ([ea0aebf](https://github.com/dherault/serverless-offline/commit/ea0aebf25548f2e357dd2ae90cdc40e1077b2ac0))
- add package.json exports field ([2c263d0](https://github.com/dherault/serverless-offline/commit/2c263d004dcb6e34338a5130c68bbbb48620e99a))
- add reload handler flag ([f662dc5](https://github.com/dherault/serverless-offline/commit/f662dc56f3473cd1816c89331bfae96e8e5da715))
- bump esm-only deps ([#1456](https://github.com/dherault/serverless-offline/issues/1456)) ([5faa4d1](https://github.com/dherault/serverless-offline/commit/5faa4d1117d6bcb883d879b1ebbac176621ec890))
- display memory leak warning for in-process handlers ([2192a5f](https://github.com/dherault/serverless-offline/commit/2192a5ff7d856f5354c73160816fadd753ed65d9))
- remove babel, use esm ([#1455](https://github.com/dherault/serverless-offline/issues/1455)) ([1f4d836](https://github.com/dherault/serverless-offline/commit/1f4d83644f7aed5ed8572595ff7a511c7552c166))
- remove even more serverless v2 logging ([677d1b1](https://github.com/dherault/serverless-offline/commit/677d1b19a8c9c4f17df65ca39ae2197e0621b0b7))
- remove more serverless v2 logging ([6b101aa](https://github.com/dherault/serverless-offline/commit/6b101aa9c001a75708757beb5796234527ec1a5f))
- remove serverless v2 logging ([404093c](https://github.com/dherault/serverless-offline/commit/404093c8230ce572b8106ecef16ad52dd43a60b6))
- support serverless v3 ([#1444](https://github.com/dherault/serverless-offline/issues/1444)) ([1e9445e](https://github.com/dherault/serverless-offline/commit/1e9445efd7d925ebba7c03f43b3a81c28d5fd44c))

### Bug Fixes

- \_\_dirname in esm ([0cdf1b9](https://github.com/dherault/serverless-offline/commit/0cdf1b9096228334af633c4d0772fba3714f2135))
- add strict directive ([5d88bc4](https://github.com/dherault/serverless-offline/commit/5d88bc4e9c5773142a40cb948152ed19a1751875))
- await promise ([d01d3e3](https://github.com/dherault/serverless-offline/commit/d01d3e3714ddb0eb712af950be17ef1be329f7cc))
- aws-sdk import ([43ed77e](https://github.com/dherault/serverless-offline/commit/43ed77e4e62dae013b4a089aa138623cde86ffca))
- cleanup ([#1457](https://github.com/dherault/serverless-offline/issues/1457)) ([4e29466](https://github.com/dherault/serverless-offline/commit/4e294668f34dfce3d7a2fb5f275fde4a2d7d63ed))
- cli option message ([9e31eb3](https://github.com/dherault/serverless-offline/commit/9e31eb3d408c2ae3e985152b05a8f885a5a26e75))
- console.log ([d85bb15](https://github.com/dherault/serverless-offline/commit/d85bb15a212c8febcb1c6ae066864dda21021dcd))
- don't require context ([#1471](https://github.com/dherault/serverless-offline/issues/1471)) ([#1472](https://github.com/dherault/serverless-offline/issues/1472)) ([aaccf96](https://github.com/dherault/serverless-offline/commit/aaccf96a5905eaa60f5938b06e7b1d60b517269e))
- example plugin path ([da60c98](https://github.com/dherault/serverless-offline/commit/da60c98a1458357f4de0229d02634a01505afd03))
- execa import ([a2c599a](https://github.com/dherault/serverless-offline/commit/a2c599a3aee508e278bdbeba071475e5599bb18c))
- getter/setter map ([e56b190](https://github.com/dherault/serverless-offline/commit/e56b1906d89ce14e065ed65b06be8904b7c46e9b))
- Increase invocation payload limit to 6 mb ([0e13c8b](https://github.com/dherault/serverless-offline/commit/0e13c8bec06ad6213ac7450d1feb52f8263cc3b8))
- package.json files ([79ffb5e](https://github.com/dherault/serverless-offline/commit/79ffb5e67259acd6f9a2cec03a73b1c1aca3cbeb))
- remove allow cache option ([78fec17](https://github.com/dherault/serverless-offline/commit/78fec17b787639476f8ddfbdd436a4b6737e3a43))
- remove catch binding ([#1459](https://github.com/dherault/serverless-offline/issues/1459)) ([653aa5c](https://github.com/dherault/serverless-offline/commit/653aa5c23fca318891020937f4aeecde9d7c8963))
- remove NODE_ENV=test condition ([#1499](https://github.com/dherault/serverless-offline/issues/1499)) ([2eec40a](https://github.com/dherault/serverless-offline/commit/2eec40a7bba78ec0c1d7de603fbc711437481376))
- remove ruby v2.5 support ([ca85e7e](https://github.com/dherault/serverless-offline/commit/ca85e7e812eaecbd51da5c90a88410300d176196))
- serverless-offline v8.6 and later unloads all modules when running on Windows, breaking plugins ([#1461](https://github.com/dherault/serverless-offline/issues/1461)) ([#1462](https://github.com/dherault/serverless-offline/issues/1462)) ([af441b2](https://github.com/dherault/serverless-offline/commit/af441b28aca3e50638f9d91601f1037c1e8446b9))
- stringify websocket data ([4b0f110](https://github.com/dherault/serverless-offline/commit/4b0f110139bf3ba5c6a6d1d2ab232f8f6a6afb9b))
- websocket imports ([eae5400](https://github.com/dherault/serverless-offline/commit/eae5400bdff7fb5d9121b69e84f83f63370decd6))

### ci

- remove node.js v12 support, add v18 ([#1424](https://github.com/dherault/serverless-offline/issues/1424)) ([e11da36](https://github.com/dherault/serverless-offline/commit/e11da3616615690c15d0fac7c187d8a3d62e1c36))
- remove serverless v1 support ([c812f3b](https://github.com/dherault/serverless-offline/commit/c812f3b2162e5c9a25b17310d6e0731a7fc0ec76))

### Maintenance Improvements

- conditionally install node-fetch globally vs. node.js v18+ ([0f2c313](https://github.com/dherault/serverless-offline/commit/0f2c313752a0f8860a4fe19a9ad6b00e7c3a5157))
- don't return from constructor ([cf101bd](https://github.com/dherault/serverless-offline/commit/cf101bd6c4d9f1055bcfedab6aeaa57ff9d13539))
- export internals ([37ff876](https://github.com/dherault/serverless-offline/commit/37ff876f2f7e33fa6cc9c4e03713486a1092784c))
- fix function name ([52e5f98](https://github.com/dherault/serverless-offline/commit/52e5f985d12de692c3bf21ee13b6992cf5436206))
- import log from @serverless/utils package ([63c7b43](https://github.com/dherault/serverless-offline/commit/63c7b43c07fc7a3c7b2036dfb071dfe55d9d1e1b))
- make cleanupFunctions private ([bb77350](https://github.com/dherault/serverless-offline/commit/bb7735045de1b6fdcdc97fcf4aa2bddebe9d84c7))
- make method private ([7fa36af](https://github.com/dherault/serverless-offline/commit/7fa36afaf9199a7fc213f7bf41d42ab6b6ac66de))
- nit ([5180b25](https://github.com/dherault/serverless-offline/commit/5180b25c2ab11254c7a7b12758a72de8976d8ae3))
- re-use path.resolve kimport ([732d374](https://github.com/dherault/serverless-offline/commit/732d37455e74e6472fb776db788804e7b47259ea))
- reduce try/catch block ([850ae3e](https://github.com/dherault/serverless-offline/commit/850ae3e010c65bb2e947cae8a75e8dd8c848f484))
- remove p-map module ([6d4b1af](https://github.com/dherault/serverless-offline/commit/6d4b1afe2cf125eedd5caf8b117a2c73c80abc7d))
- remove readfile function ([c417198](https://github.com/dherault/serverless-offline/commit/c4171987af228a7e7a28666c3ad21c660ac3b783))
- remove serverless compat check ([21779ff](https://github.com/dherault/serverless-offline/commit/21779ff59c9f4b321a2fd46519c410380cdcce86))
- remove update-notifier ([861ad84](https://github.com/dherault/serverless-offline/commit/861ad840f16467dc1cff3f11c7e13429fe66d4f5))
- remove var ([5f84931](https://github.com/dherault/serverless-offline/commit/5f84931b4ce98b0f96f523d8c44aa6755a30165d))
- replace cuid module with built-in crypto.randomUUID ([2cf6b41](https://github.com/dherault/serverless-offline/commit/2cf6b41f840f8bc6ae320ff2092cd3bc25271d55))
- replace printBlankLine ([b82028f](https://github.com/dherault/serverless-offline/commit/b82028ff822d6cfe8eb8b19812a4a6e398bc0f8c))
- simplify ([2943120](https://github.com/dherault/serverless-offline/commit/2943120e24869a0ee5d63f78bc9fccb3dc911257))
- simplify ([ac63c36](https://github.com/dherault/serverless-offline/commit/ac63c36c29def0f899e65aedf46062948b560d06))
- simplify condition ([acdf1b9](https://github.com/dherault/serverless-offline/commit/acdf1b98458ea697f0fdb90b95b8e052d059a74d))
- use a lot more Object.entries ([85361a5](https://github.com/dherault/serverless-offline/commit/85361a58ce5b6cf6e79ec3a100d2d05b10d664d7))
- use async fs/promises ([#1458](https://github.com/dherault/serverless-offline/issues/1458)) ([ae855ef](https://github.com/dherault/serverless-offline/commit/ae855ef518477fa3e2fc3b5b3e32cf34ee13742d))
- use async unlink ([#1480](https://github.com/dherault/serverless-offline/issues/1480)) ([2fccc87](https://github.com/dherault/serverless-offline/commit/2fccc8706b2bdd1cd461c3efc6403e9845ff149e))
- use destructuring ([f8c6533](https://github.com/dherault/serverless-offline/commit/f8c6533143614afd59394dd08947e79323965ef8))
- use even more Object.entries ([76582e0](https://github.com/dherault/serverless-offline/commit/76582e06b72ea0d5c26899f574d8962c7d47d5c6))
- use fs/promises ([#1432](https://github.com/dherault/serverless-offline/issues/1432)) ([f744897](https://github.com/dherault/serverless-offline/commit/f74489777e70459df2d6f5b1b126a8bf177b859f))
- use fs/promises ([#1445](https://github.com/dherault/serverless-offline/issues/1445)) ([969b37c](https://github.com/dherault/serverless-offline/commit/969b37c0098ac80a000de1a155294a8d4c2dc74d))
- use function statements, move into module scope ([4dc34c5](https://github.com/dherault/serverless-offline/commit/4dc34c57e0d0a62c45f4e656a0f68f343940154f))
- use more Object.entries ([c1552e4](https://github.com/dherault/serverless-offline/commit/c1552e44579d5b9eb857602f3fba9a83198dd92f))
- use named import ([669ebc6](https://github.com/dherault/serverless-offline/commit/669ebc64aebdca23fec75c973ee3737256901353))
- use node: protocol import ([e44182b](https://github.com/dherault/serverless-offline/commit/e44182bde24707e95285ae03a266d31b994e66ed))
- use node: protocol imports ([#1435](https://github.com/dherault/serverless-offline/issues/1435)) ([397e703](https://github.com/dherault/serverless-offline/commit/397e703c049f8be8b8678dba954879310c49014d))
- use Object.entries ([b864a35](https://github.com/dherault/serverless-offline/commit/b864a356433089c84217e6ae70c6ce1b44f862cb))
- use Object.entries ([257524c](https://github.com/dherault/serverless-offline/commit/257524c016bc9d04745f4231ddd74ccabe3eac0d))
- use object.entries ([#1446](https://github.com/dherault/serverless-offline/issues/1446)) ([7b25196](https://github.com/dherault/serverless-offline/commit/7b25196bc839f8711a4524d791c6eb9ba81a8a31))
- use Object.entries/.fromEntries ([18c2b41](https://github.com/dherault/serverless-offline/commit/18c2b41c99f127dd2e7ce26e7141b12b413e5cf6))
- use private methods ([#1423](https://github.com/dherault/serverless-offline/issues/1423)) ([a332dbf](https://github.com/dherault/serverless-offline/commit/a332dbf62e8d05e77cbf2ed2cdf5536b4e05e1a4))
- use private methods ([#1425](https://github.com/dherault/serverless-offline/issues/1425)) ([f04e57c](https://github.com/dherault/serverless-offline/commit/f04e57c80254b19b3f448ed335f90de02d54f1bb))
- use way more Object.entries ([86c5280](https://github.com/dherault/serverless-offline/commit/86c5280a0d33d45640d1cc915743c881f7dd304e))
- use worker threads by default, remove flag, introduce in-process flag ([80091fb](https://github.com/dherault/serverless-offline/commit/80091fb207335a82461a753e317c452f94e0c0ee))
- **websockets:** use async/await ([4377f45](https://github.com/dherault/serverless-offline/commit/4377f457db6a871850e8152efd432d968ee92cb0))

### [8.8.1](https://github.com/dherault/serverless-offline/compare/v8.8.0...v8.8.1) (2022-07-09)

### Maintenance Improvements

- remove update-notifier ([fbcd41e](https://github.com/dherault/serverless-offline/commit/fbcd41eb29fd5aa60d3ce52a734b89ed4113d893))

## [8.8.0](https://github.com/dherault/serverless-offline/compare/v8.7.0...v8.8.0) (2022-05-17)

### Features

- Support using go build ([#1334](https://github.com/dherault/serverless-offline/issues/1334)) ([#1356](https://github.com/dherault/serverless-offline/issues/1356)) ([a79b15c](https://github.com/dherault/serverless-offline/commit/a79b15c529b60ac0d037716cf6e475bcda8f822e))

### Bug Fixes

- lowercase API gateway V2 event headers ([#1288](https://github.com/dherault/serverless-offline/issues/1288)) ([9ff4cf3](https://github.com/dherault/serverless-offline/commit/9ff4cf38c4f620545d95d815d0b420d134be5cb1))
- remove (now) useless worker thread support check ([#1406](https://github.com/dherault/serverless-offline/issues/1406)) ([1b2ae00](https://github.com/dherault/serverless-offline/commit/1b2ae0016cec385416c240b55669df038ddc5d1e))
- remove babel-eslint ([17adeb5](https://github.com/dherault/serverless-offline/commit/17adeb5b923d990f64e96e234297999baaca30a0))
- remove engine check ([#1407](https://github.com/dherault/serverless-offline/issues/1407)) ([58b2199](https://github.com/dherault/serverless-offline/commit/58b21998e2ced5eeab3ebf0a30fd1849e974befe))
- remove unneeded deps ([95e1fe5](https://github.com/dherault/serverless-offline/commit/95e1fe5bbc4aceb83bd8135503c3c4123006d61b))
- solve merge issues ([99a2578](https://github.com/dherault/serverless-offline/commit/99a25789ce6d4be718dcae470e99bde5f3ab8b86))
- temporary revert nested modules ([#1419](https://github.com/dherault/serverless-offline/issues/1419)) ([f4317e4](https://github.com/dherault/serverless-offline/commit/f4317e4f6bd818ed6d243b440cab9d7030b1c30d))

### Maintenance Improvements

- import from namespace ([#1405](https://github.com/dherault/serverless-offline/issues/1405)) ([ed9d6cd](https://github.com/dherault/serverless-offline/commit/ed9d6cd48fbdba26cf7a4b5aa096464fba94193e))
- import process explicit ([#1418](https://github.com/dherault/serverless-offline/issues/1418)) ([8893c67](https://github.com/dherault/serverless-offline/commit/8893c67718259b7d760194c74f31ee56fcd7e789))
- prettify docs ([2ee5b1e](https://github.com/dherault/serverless-offline/commit/2ee5b1ef56133aecbc120f2d20858411b30956d3))
- remove extend module, replace with Object.assign ([#1417](https://github.com/dherault/serverless-offline/issues/1417)) ([90d5169](https://github.com/dherault/serverless-offline/commit/90d516909c3c41e907d728afd47cf436f078bf97))

## [8.7.0](https://github.com/dherault/serverless-offline/compare/v8.6.0...v8.7.0) (2022-04-13)

- [Validate authorizer context response to better mimic API Gateway](https://github.com/dherault/serverless-offline/pull/1376)
- [Add support for the AUTHORIZER env variable for LambdaIntegration](https://github.com/dherault/serverless-offline/pull/1308)

## [8.6.0](https://github.com/dherault/serverless-offline/compare/v8.5.0...v8.6.0) (2022-04-13)

- [POC for externally triggering cleanup of lambda functions](https://github.com/dherault/serverless-offline/pull/1093)
- [Fixing AWS env vars](https://github.com/dherault/serverless-offline/pull/1108)
- [Ensure gateway IP is truthy before adding to docker args](https://github.com/dherault/serverless-offline/pull/1174)
- [update debugging instructions](https://github.com/dherault/serverless-offline/pull/1221)
- [Never remove cached node_modules or binary modules](https://github.com/dherault/serverless-offline/pull/1230)
- [Handle multiple cookies with the same name in the same way API Gateway does.](https://github.com/dherault/serverless-offline/pull/1249)

## [8.5.0](https://github.com/dherault/serverless-offline/compare/v8.4.0...v8.5.0) (2022-02-18)

### Features

- Add `httpEvent.operationId` to the request context ([#1325](https://github.com/dherault/serverless-offline/issues/1325)) ([e217fcb](https://github.com/dherault/serverless-offline/commit/e217fcba61fe3eae110f506268c71b350e1937da)) ([Quenby Mitchell](https://github.com/qswinson))
- Ensure `websocket` parity with API Gateway ([#1301](https://github.com/dherault/serverless-offline/issues/1301)) ([8f02226](https://github.com/dherault/serverless-offline/commit/8f0222644e5946c2bba8853c7ee6c224e7a33b41)) ([Christian Nuss](https://github.com/cnuss))
- Introduce header to override authorizer response ([#1328](https://github.com/dherault/serverless-offline/issues/1328)) ([a5158a4](https://github.com/dherault/serverless-offline/commit/a5158a489048ceee007cefa41441f841b51db59c)) ([ericctsf](https://github.com/ericctsf))
- Support injection of custom authentication strategy ([#1314](https://github.com/dherault/serverless-offline/issues/1314)) ([febfe77](https://github.com/dherault/serverless-offline/commit/febfe77d470b2e5e4fbfe5243b265d6a27fb84f3)) ([tom-stclair](https://github.com/tom-stclair))

### Bug Fixes

- Fix payload normalization ([#1332](https://github.com/dherault/serverless-offline/issues/1332)) ([e9e8169](https://github.com/dherault/serverless-offline/commit/e9e816996e8da9605a4a9856a60ddfbbe885e1b1)) ([Taras Romaniv](https://github.com/trsrm))
- Skip clearing undefined modules in `InProcessRunner` ([#1339](https://github.com/dherault/serverless-offline/issues/1339)) ([5026e43](https://github.com/dherault/serverless-offline/commit/5026e43974dd73de66bf2c82b742cc7341f7c55b)) ([Kevin Rueter](https://github.com/kerueter))

## [8.4.0](https://github.com/dherault/serverless-offline/compare/v8.3.1...v8.4.0) (2022-01-28)

### Features

- `go-runner` implementation ([#1320](https://github.com/dherault/serverless-offline/issues/1320)) ([6bb54fd](https://github.com/dherault/serverless-offline/commit/6bb54fdccebd3db61221a9b8f709414876086324))
- `--disableScheduledEvents` CLI param support ([#1185](https://github.com/dherault/serverless-offline/issues/1185)) ([4503567](https://github.com/dherault/serverless-offline/commit/4503567cdb8fa31ac9df98b667a403b0408f8444))

### Bug Fixes

- Handle custom authorizer 401 in non in-process runners ([#1319](https://github.com/dherault/serverless-offline/issues/1319)) ([8d61bde](https://github.com/dherault/serverless-offline/commit/8d61bde74cdfb37410a5c1952ca608e815eeb1cf))
- Support `httpApi` payload override on function level ([#1312](https://github.com/dherault/serverless-offline/issues/1312)) ([8db63dd](https://github.com/dherault/serverless-offline/commit/8db63dda6054198775ed3b567dc3c1dbf73eb574))

### [8.3.1](https://github.com/dherault/serverless-offline/compare/v8.3.0...v8.3.1) (2021-11-25)

### Bug Fixes

- Fix handling of modern logs (`Cannot read properties of undefined (reading 'notice')` error)
