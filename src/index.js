import GetMethodFactory from './common/GetMethodFactory';
import PostMethodFactory from './common/PostMethodFactory';
import { RESPONSE } from './common/utils';
import prettier from 'prettier';
import fs from 'fs';
import { compile } from 'json-schema-to-typescript';

const createApiMap = (jsonSource) => {
  let apiMap = {};
  Object.keys(jsonSource).forEach((urlPath) => {
    Object.keys(jsonSource[urlPath]).forEach((method) => {
      const keyName = `${urlPath}-${method}`;
      if (apiMap[keyName]) {
        throw `已经存在${keyName}方法`;
      }
      const methodInfo = jsonSource[urlPath][method];
      if (method.toUpperCase() === 'POST') {
        apiMap[keyName] = new PostMethodFactory(methodInfo, method, urlPath);
        return;
      }
      if (method.toUpperCase() !== 'POST') {
        apiMap[keyName] = new GetMethodFactory(methodInfo, method, urlPath);
        return;
      }
    });
  });
  const importList = Object.values(apiMap).reduce((pre, next) => {
    pre = pre + `${next.handleCteateParamsName()},${next.handleCteateParamsName(RESPONSE)},`;
    return pre;
  }, '');
  const importTs = `import {${importList}} from './api.define'\n`;

  const template = `
    import Taro from '@tarojs/taro';
    \n
    ${importTs}
  `;
  const templateApiCode = Object.values(apiMap).reduce((pre, next) => {
    return pre + next.createTaroRequestTemplate();
  }, template);

  const templateApiTs = Object.values(apiMap).reduce(
    (pre, next) => {
      const prototypeNameReq = next.handleCteateParamsName();
      const prototypeNameRes = next.handleCteateParamsName(RESPONSE);
      pre['properties'][prototypeNameReq] = {
        $ref: `#/definitions/${prototypeNameReq}`,
      };
      pre['properties'][prototypeNameRes] = {
        $ref: `#/definitions/${prototypeNameRes}`,
      };
      pre['definitions'][prototypeNameReq] = next.handleGetParams();
      pre['definitions'][prototypeNameRes] = next.handleGetResponse();
      return pre;
    },
    {
      title: 'Api',
      type: 'object',
      properties: {},
      definitions: {},
    }
  );

  return {
    templateApiCode,
    templateApiTs,
  };
};

const vaildFile = (filePath) => {
  try {
    fs.accessSync(filePath);
  } catch (err) {
    throw { err: err, errMessage: `${filePath}文件不存在` };
  }
};
export default (sourceFile, { apiPath, apiDeclare }) => {
  try {
    vaildFile(sourceFile);
    vaildFile(apiPath);
    vaildFile(apiDeclare);

    const result = fs.readFileSync(sourceFile, 'utf8');
    const { templateApiCode, templateApiTs } = createApiMap(result);
    fs.writeFileSync(sourceFile, prettier.format(templateApiCode));
    compile(templateApiTs, 'Api').then((ts) => {
      fs.writeFileSync(apiPath, ts);
    });
    console.log('文件生成成功~');
  } catch (err) {
    console.log(err);
  }
};
