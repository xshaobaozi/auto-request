const path = require('path');
const CreateApi = require('./../dist/bundle');

const source = path.join(__dirname, './yapi.json');
const apiPath = path.join(__dirname, './../api/');

const SwaggerJsonSchemaRequest = new CreateApi(source, 'axios', {
  host: 'https://yapi.yashili.com/mock/178',
});
SwaggerJsonSchemaRequest.generateFile(apiPath);
