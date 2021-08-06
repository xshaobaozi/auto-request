import CreateApi from './../src/index2';
import path from 'path';
// const source = path.join(__dirname, './../example/yapi.json');
const source = path.join(__dirname, './../example/swaggerjson.json');
// const source = path.join(__dirname, './../example/swagger1.json');
const apiPath = path.join(__dirname, './../api/');

const SwaggerJsonSchemaRequest = new CreateApi(source, 'axios');
SwaggerJsonSchemaRequest.generateFile(apiPath);
