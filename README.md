# 简介

通过`yapi`的 swagger json schema 生成 Taro 接口

```javascript
// source swagger schema 文件
// apiPath api生成文件
// apiDeclare api ts定义文件
const path = require('path');
const swaggerJsonSchemaRequest = require('swagger-json-schema-request');

const source = path.join(__dirname, './api.json');
const apiPath = path.join(__dirname, './api.ts');
const apiDeclare = path.join(__dirname, './api.define');
swaggerJsonSchemaRequest(source, { apiPath, apiDeclare });
```
