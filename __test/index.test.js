import CreateApi from './../src/index';
import path from 'path';
const source = path.join(__dirname, './../example/yapi.json');
const apiPath = path.join(__dirname, './../api/');

const SwaggerJsonSchemaRequest = new CreateApi(source, 'taro', {host: 'https://yapi.yashili.com/mock/178', preFix: '/aa/'});
SwaggerJsonSchemaRequest.generateFile(apiPath);
