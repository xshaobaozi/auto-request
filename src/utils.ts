import * as fs from 'fs';
const camelcase = require('camelcase')
import {
  // SwaggerParamsTags,
  SwaggerParamsPathsMethodsParams,
  // SwaggerParamsPathsMethods,
  SwaggerParamsPaths,
  SwaggerParams,
  apiQueueParams,
  CreateApiStateType,
  // SwaggerParamsPathsMethodsParamsSchema,
  // RequestGetProperties,
  RequestGetPropertiesObject,
} from './define';
const deepClone = require('deep-clone');

// 读取入口文件
export const readFileSync = (source: any) => {
  try {
    return fs.readFileSync(source, 'utf8');
  } catch (err) {
    console.error(err, `${source}读取出错`);
    throw err;
  }
};

const parseJSON = (json: any) => {
  try {
    return JSON.parse(json);
  } catch (err) {
    return json;
  }
};
export const analysRequstMap = (stream: SwaggerParamsPaths) => {
  const apiQueue: apiQueueParams[] = [];
  for (let [url, urlValue] of Object.entries(stream)) {
    for (let [method, schema] of Object.entries(urlValue)) {
      apiQueue.push({ method, url, schema })
    }
  }
  return apiQueue;
};

export const analysiAxiosRules = (stream: SwaggerParams) => {
  const jsonStream = analysRequstMap(parseJSON(stream).paths);
  return jsonStream;
};

export const analysiYapiRules = (stream: SwaggerParams) => {
  const jsonStream = analysRequstMap(parseJSON(stream).paths);
  return jsonStream;
};

export const pascalCase = (str: any) => {
  return camelcase(str, { pascalCase: true });
};
export const pascalCaseReplaceString = (str: any) => {
  return camelcase(str.replace(/[\/|\{|\}|\?\$]/g, ''), { pascalCase: true });
};

export const formatUrl = (parameters: SwaggerParamsPathsMethodsParams[] = [], url: string) => {
  const pathParams = parameters.filter((paramsItem) => paramsItem.in === 'path');
  return pathParams.reduce((pre, { name }) => {
    const reg = new RegExp(`{${name}}`);
    pre = pre.replace(reg, '${' + pascalCase(name) + '}');
    return pre;
  }, url);
}
export const createMethodsName = (url: string, method: string, parameters: SwaggerParamsPathsMethodsParams[] = []) => {
  return pascalCaseReplaceString(`${formatUrl(parameters, url)}${pascalCase(method)}`);
}
export const filterPathParams = (parameters: SwaggerParamsPathsMethodsParams[] = []) => {
  const urlPathParams = parameters.filter(
    (paramsItem) => ['path'].includes(paramsItem.in)
  );
  return (
    urlPathParams.reduce((pre, next) => {
      pre = `${pascalCase(next.name)}:any,` + pre;
      return pre;
    }, '') + 'params: P, options?:any'
  );
}

export const rendeFetchPre = (type: CreateApiStateType) => {
  if (type === 'taro') {
    return `import Taro, { RequestTask } from '@tarojs/taro';\n`;
  }
  return `import axios, {AxiosResponse} from 'axios';\n`;
}
export const formatTsRequest = (name: string) => {
  return `${name}Requset`
}
export const formatTsResponse = (name: string) => {
  return `${name}Response`
}
export const formatRequireds = (reqParams: SwaggerParamsPathsMethodsParams[] = []) => {
  return reqParams.filter((params) => params.required === true).map((params) => params.name)
}
export const formatProperties = (reqParams: SwaggerParamsPathsMethodsParams[] = []) => {
  return reqParams.reduce((pre: any, next) => {
    pre[next.name] = next;
    return pre;
  }, {})
}
export const renderTsPreImport = (prePath: string, preDefine: string) => {
  return `import {
    ${preDefine}
  } from '${prePath}'; \n 
  `
}

export const deepCopy = (json: any) => deepClone(json);

export const createTypeDefineObj = (title: string, properties: any, type: string, required?: any) => {
  return {
    key: title,
    propertiesKey: {
      $ref: `#/definitions/${title}`
    },
    definitionsKey: {
      title: title,
      type: type,
      additionalProperties: false,
      properties: properties,
      required: required,
    }
  }
}

interface createTypeDefineObjParams {
  title: string;
  properties: any;
  type: string,
  required?: any
}
// 处理response的properties
export const deepFormatResponse = (preProperties: RequestGetPropertiesObject, schemas: any[] = [], createTypeDefineObjParams: createTypeDefineObjParams) => {
  const { title, type } = createTypeDefineObjParams;
  if (!preProperties.properties) { return; }
  for (const [key, value] of Object.entries(preProperties.properties)) {
    const pascalCaseKey = pascalCase(key);
    const refTitle = `${title}${pascalCaseKey}`;
    const paramsProperties = Object.assign(createTypeDefineObjParams, { title: refTitle });
    if (value.type === 'string') {
      continue;
    }
    if (value.type === 'object') {
      const schemaItem = createTypeDefineObj(refTitle, deepCopy(value.properties), type, value.required);
      schemas.push(schemaItem);
      Object.assign(value, {
        $ref: `#/definitions/${refTitle}`
      })
      deepFormatResponse(value, schemas, paramsProperties);
    }
    if (value.type === 'array') {
      const schemaItem = createTypeDefineObj(refTitle, deepCopy(value.items.properties), type, value.items.required);
      schemas.push(schemaItem);
      delete (value as any).items.properties;
      Object.assign(value.items, {
        $ref: `#/definitions/${refTitle}`
      })
      deepFormatResponse(value.items, schemas, paramsProperties);
    }
  }
};
export const log = (data: any) => console.log(JSON.stringify(data));