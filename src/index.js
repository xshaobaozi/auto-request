import GetMethodFactory from './common/GetMethodFactory';
import PostMethodFactory from './common/PostMethodFactory';
import schema from './../assets/api.json';
import fs from 'fs';
import prettier from 'prettier';
import { pascalCase, pascalCaseReplaceString } from './common/utils';
import path from 'path';

const host = schema.host || '';
const basePath = schema.basePath;
const schemes = schema.schemes;

const paths = schema.paths;
const ExpError = (errorInfo) => {
  const str = JSON.stringify(errorInfo);
  console.log(`出现无法解析的错误${str}`);
};

const urlPre = `${schemes[0]}s://${host}${basePath}`;

let apiMap = {};
Object.keys(paths).forEach((urlPath) => {
  Object.keys(paths[urlPath]).forEach((method) => {
    const keyName = `${urlPath}-${method}`;
    if (apiMap[keyName]) {
      throw `已经存在${keyName}方法`;
    }
    const methodInfo = paths[urlPath][method];
    if (method.toUpperCase() === 'POST') {
      apiMap[keyName] = new PostMethodFactory(methodInfo, method, urlPath).handleInstanceInfo();
      return;
    }
    if (method.toUpperCase() === 'GET') {
      apiMap[keyName] = new GetMethodFactory(methodInfo, method, urlPath).handleInstanceInfo();
      return;
    }
  });
});

function createTaroRequest(req) {
  const params = {
    url: req.url,
    method: req.method,
    complete: () => {},
    data: {},
  };
  return `\n
  export const ${pascalCaseReplaceString(params.url)}${pascalCase(
    params.method
  )} = <P = unknown, T = unknown>(${req.params} ):Promise<T> => {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: \`${urlPre}${params.url}\`,
        method: '${params.method}',
        data: params,
        complete: (res: T) => {resolve(res)},
        fail: (err) => {reject(err)},
        ...options,
      })
    })
  }
  `;
}
const template = `
  import Taro from '@tarojs/taro';
  \n
`;

console.log(apiMap);
const requestCode = Object.values(apiMap).reduce((pre, next) => {
  pre = pre + createTaroRequest(next);
  return pre;
}, '');
const prettierCode = prettier.format(template + requestCode);
// const prettierCode = template + requestCode;
fs.writeFileSync(path.join(__dirname, '../assets/api.ts'), prettierCode);
