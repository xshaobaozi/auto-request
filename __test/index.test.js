import CreateApi from './../src/index';
import path from 'path';
const source = path.join(__dirname, './../example/yapi.json');
const apiPath = path.join(__dirname, './../api/');

<<<<<<< Updated upstream
const SwaggerJsonSchemaRequest = new CreateApi(source, 'axios', {host: 'https://yapi.yashili.com/mock/178'});
=======
const SwaggerJsonSchemaRequest = new CreateApi(source, 'axios', {host: 'https://yapi.yashili.com/mock/178', preFix: '/aa/'});
>>>>>>> Stashed changes
SwaggerJsonSchemaRequest.generateFile(apiPath);
