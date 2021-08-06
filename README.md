# 简介

通过`yapi`的 swagger json schema 生成 Taro 接口

```javascript
// source(必填) swagger schema 文件
// apiPath(必填) api生成文件
// apiDeclare(如果不填就生成 [api文件名]define.ts) api ts定义文件 
const path = require('path');
const swaggerJsonSchemaRequest = require('swagger-json-schema-request');

const source = path.join(__dirname, './api.json');
const apiPath = path.join(__dirname, './../api/');
swaggerJsonSchemaRequest(source, apiPath, {type: 'axios' , host: ''});


```
