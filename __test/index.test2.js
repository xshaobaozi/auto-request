import CreateApi from './../src/index2';
import path from 'path';
const source = path.join(__dirname, './../example/yapi.json');
const apiPath = path.join(__dirname, './../api/');

const SwaggerJsonSchemaRequest = new CreateApi(source, {
  host: 'https://yapi.yashili.com/mock/178',
});
SwaggerJsonSchemaRequest.generateFile(apiPath);
