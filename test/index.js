const path = require('path');
const swaggerJsonSchemaRequest = require('./../dist/bundle');

const source = path.join(__dirname, './api.json');
const apiPath = path.join(__dirname, './../assets/api');
swaggerJsonSchemaRequest(source, apiPath, {});
