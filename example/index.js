const path = require('path');
const swaggerJsonSchemaRequest = require('./../dist/bundle');

const source = path.join(__dirname, './api.json');
const apiPath = path.join(__dirname, './../api/');
swaggerJsonSchemaRequest(source, apiPath, {type: 'axios' , host: 'https://yapi.yashili.com/mock/187'});
