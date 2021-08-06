# 简介

通过`yapi`的 swagger json schema 生成 Taro或Axios 接口


## 配置 scripts

```json
    "scripts": {
        "build:api": "node ./scripts/buildApi.js"
    },
```

## 脚本
```javascript
// source(必填) swagger schema 文件
// apiPath(必填) api生成文件
// type = 'axios'|'taro'
// host = 请求前缀
const path = require('path');
const swaggerJsonSchemaRequest = require('swagger-json-schema-request');

const source = path.join(__dirname, './api.json');
const apiPath = path.join(__dirname, './../api/');
swaggerJsonSchemaRequest(source, apiPath, { type: 'axios', host: '' });
```
生成的文件默认为 {path}/index.ts {path}/index.define.ts


## 生成目录

```bash
    ├── api
    │   ├── index.define.ts
    │   └── index.ts
    ├── assets
    │   └── api.json
    |── scripts
    |    └── buildApi.js
    |
```
