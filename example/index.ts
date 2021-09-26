import path from 'path';
import SwaggerJsonSchemaRequest from './../lib/index';
const source = path.join(__dirname, './test.json');
const apiPath = path.join(__dirname, './../api/');

new SwaggerJsonSchemaRequest(source, 'axios', {
  host: 'https://test/api',
}).generateFile(apiPath)
