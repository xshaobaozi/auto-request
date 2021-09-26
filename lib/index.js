'use strict';

var fs = require('fs');
var prettier = require('prettier');
var jsonSchemaToTypescript = require('json-schema-to-typescript');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var fs__namespace = /*#__PURE__*/_interopNamespace(fs);
var prettier__namespace = /*#__PURE__*/_interopNamespace(prettier);

const camelcase = require('camelcase');
const deepClone = require('deep-clone');
// 读取入口文件
const readFileSync = (source) => {
    try {
        return fs__namespace.readFileSync(source, 'utf8');
    }
    catch (err) {
        console.error(err, `${source}读取出错`);
        throw err;
    }
};
const parseJSON = (json) => {
    try {
        return JSON.parse(json);
    }
    catch (err) {
        return json;
    }
};
const analysRequstMap = (stream) => {
    const apiQueue = [];
    for (let [url, urlValue] of Object.entries(stream)) {
        for (let [method, schema] of Object.entries(urlValue)) {
            apiQueue.push({ method, url, schema });
        }
    }
    return apiQueue;
};
const analysiAxiosRules = (stream) => {
    const jsonStream = analysRequstMap(parseJSON(stream).paths);
    return jsonStream;
};
const analysiYapiRules = (stream) => {
    const jsonStream = analysRequstMap(parseJSON(stream).paths);
    return jsonStream;
};
const pascalCase = (str) => {
    return camelcase(str, { pascalCase: true });
};
const pascalCaseReplaceString = (str) => {
    return camelcase(str.replace(/[\/|\{|\}|\?\$]/g, ''), { pascalCase: true });
};
const formatUrl = (parameters = [], url) => {
    const pathParams = parameters.filter((paramsItem) => paramsItem.in === 'path');
    return pathParams.reduce((pre, { name }) => {
        const reg = new RegExp(`{${name}}`);
        pre = pre.replace(reg, '${' + pascalCase(name) + '}');
        return pre;
    }, url);
};
const createMethodsName = (url, method, parameters = []) => {
    return pascalCaseReplaceString(`${formatUrl(parameters, url)}${pascalCase(method)}`);
};
const filterPathParams = (parameters = []) => {
    const urlPathParams = parameters.filter((paramsItem) => ['path'].includes(paramsItem.in));
    return (urlPathParams.reduce((pre, next) => {
        pre = `${pascalCase(next.name)}:any,` + pre;
        return pre;
    }, '') + 'params: P, options?:any');
};
const rendeFetchPre = (type) => {
    if (type === 'taro') {
        return `import Taro, { RequestTask } from '@tarojs/taro';\n`;
    }
    return `import axios, {AxiosResponse} from 'axios';\n`;
};
const formatTsRequest = (name) => {
    return `${name}Requset`;
};
const formatTsResponse = (name) => {
    return `${name}Response`;
};
const formatRequireds = (reqParams = []) => {
    return reqParams.filter((params) => params.required === true).map((params) => params.name);
};
const formatProperties = (reqParams = []) => {
    return reqParams.reduce((pre, next) => {
        pre[next.name] = next;
        return pre;
    }, {});
};
const renderTsPreImport = (prePath, preDefine) => {
    return `import {
    ${preDefine}
  } from '${prePath}'; \n 
  `;
};
const deepCopy = (json) => deepClone(json);
const createTypeDefineObj = (title, properties, type, required) => {
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
    };
};
// 处理response的properties
const deepFormatResponse = (preProperties, schemas = [], createTypeDefineObjParams) => {
    const { title, type } = createTypeDefineObjParams;
    if (!preProperties.properties) {
        return;
    }
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
            });
            deepFormatResponse(value, schemas, paramsProperties);
        }
        if (value.type === 'array') {
            const schemaItem = createTypeDefineObj(refTitle, deepCopy(value.items.properties), type, value.items.required);
            schemas.push(schemaItem);
            delete value.items.properties;
            Object.assign(value.items, {
                $ref: `#/definitions/${refTitle}`
            });
            deepFormatResponse(value.items, schemas, paramsProperties);
        }
    }
};

class BaseRequest {
    state;
    constructor(method, url, schema, fetchType, host) {
        this.state = {
            methodName: createMethodsName(url, method, schema.parameters),
            url: formatUrl(schema.parameters, url),
            fetchType: fetchType,
            method: method,
            schema: schema,
            host: host,
            tsReq: {},
            tsRes: {},
        };
        this.state.tsReq = this.renderTsDefineReq();
    }
    renderAxiosRes(title) {
        const isArray = this.state.schema.responses['200'].schema.type === 'array' ? '[]' : '';
        if (this.state.fetchType === 'axios') {
            return `AxiosResponse <${title}${isArray}>`;
        }
        return `${title}${isArray}`;
    }
    renderPromiseType() {
        if (this.state.fetchType === 'axios') {
            return 'Promise<T>';
        }
        return `RequestTask <T>`;
    }
    renderMethod() {
        const responseTsList = this.renderTsDefineResFeature();
        const requestTsList = this.renderTsDefineReqFeature();
        const ReqTsTitle = (requestTsList[0] && requestTsList[0].key) || 'any';
        const ResTsTitle = (responseTsList[0] && responseTsList[0].key) || 'any';
        return `\n
            export const ${this.state.methodName} = 
            <P extends ${ReqTsTitle}, T = ${this.renderAxiosRes(ResTsTitle)}>
            (${filterPathParams(this.state.schema.parameters)}): ${this.renderPromiseType()} => {
                ${this.renderFetchRequest()}
            }
        `;
    }
}

class RequestGet extends BaseRequest {
    constructor(method, url, schema, fetchType, host) {
        super(method, url, schema, fetchType, host);
    }
    renderTsDefineReq() {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'query');
        return {
            title: formatTsRequest(this.state.methodName),
            properties: formatProperties(reqParams),
            required: formatRequireds(reqParams),
            additionalProperties: false,
        };
    }
    renderTsDefineReqFeature() {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'query');
        const title = formatTsRequest(this.state.methodName);
        const properties = formatProperties(reqParams);
        const required = formatRequireds(reqParams);
        const reqList = [];
        const req = createTypeDefineObj(title, properties, 'object', required);
        reqList.push(req);
        return reqList;
    }
    renderTsDefineResFeature() {
        const schema = deepCopy(this.state.schema.responses['200'].schema);
        const properties = [];
        const title = formatTsResponse(this.state.methodName);
        if (['object'].includes(schema.type)) {
            properties.push(createTypeDefineObj(title, schema.properties, schema.type, schema.required));
            deepFormatResponse(schema, properties, { title: title, properties: schema.properties, type: schema.type });
        }
        if (['array'].includes(schema.type)) {
            const schemaArray = schema.items;
            properties.push(createTypeDefineObj(title, schemaArray.properties, schemaArray.type, schemaArray.required));
            deepFormatResponse(schemaArray, properties, { title: title, properties: schemaArray.properties, type: schemaArray.type });
        }
        return properties;
    }
    renderFetchRequest() {
        const { schema, host, url, method } = this.state;
        const { summary } = schema;
        if (this.state.fetchType === 'axios') {
            return `
                // ${summary}
                return axios.request({
                    url: \`${host}${url}\`,
                    method: '${method}',
                    params: params,
                    ...options, 
                })
            `;
        }
        return `
            // ${summary}
            return Taro.request({
                url: \`${host}${url}\`,
                method: '${method}',
                data: params,
                ...options, 
            })
        `;
    }
}

class RequestPost extends BaseRequest {
    constructor(method, url, schema, fetchType, host) {
        super(method, url, schema, fetchType, host);
    }
    renderTsDefineReqFeature() {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'body');
        if (reqParams.length === 0) {
            return [];
        }
        const [firstParams] = reqParams;
        const title = formatTsRequest(this.state.methodName);
        const properties = firstParams.schema.properties;
        const required = firstParams.schema.required;
        const reqList = [];
        const req = createTypeDefineObj(title, properties, 'object', required);
        reqList.push(req);
        for (let [key, value] of Object.entries(firstParams.schema.properties)) {
            const pascalCaseKey = pascalCase(key);
            if (value.type === 'array') {
                reqList.push(createTypeDefineObj(`${title}${pascalCaseKey}`, deepCopy(value.items.properties), value.items.type));
                delete value.items.properties;
                Object.assign(value.items, {
                    $ref: `#/definitions/${title}${pascalCaseKey}`
                });
            }
            // if (value.type === 'object') {
            //     reqList.push(createTypeDefineObj(`${title}${pascalCaseKey}`, deepCopy(value.properties), value.type));
            // }
        }
        return reqList;
    }
    renderTsDefineReq() {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'body');
        if (reqParams.length > 0) {
            const [firstParams] = reqParams;
            return {
                title: formatTsRequest(this.state.methodName),
                properties: firstParams.schema.properties,
                required: firstParams.schema.required,
                additionalProperties: false,
            };
        }
        return {
            title: formatTsRequest(this.state.methodName),
            properties: formatProperties(reqParams),
            required: formatRequireds(reqParams),
            additionalProperties: true,
        };
    }
    renderTsDefineResFeature() {
        // const schema = deepCopy(this.state.schema.responses['200'].schema) as SwaggerParamsPathsMethodsSchema;
        // const properties = [];
        // const title = formatTsResponse(this.state.methodName);
        // if (schema.type === 'object') {
        //     properties.push(createTypeDefineObj(title, schema.properties, schema.type));
        // }
        // if (schema.properties === undefined) { return properties; }
        // for (const [key, value] of Object.entries(schema.properties)) {
        //     const pascalCaseKey = pascalCase(key);
        //     if (value.type === 'array') {
        //         // properties.push(deepCopy(value));
        //         properties.push(createTypeDefineObj(`${title}${pascalCaseKey}`, deepCopy(value.items.properties), value.items.type));
        //         delete value.items.properties;
        //         Object.assign(value.items, {
        //             $ref: `#/definitions/${title}${pascalCaseKey}`
        //         })
        //     }
        //     if (value.type === 'object') {
        //         properties.push(createTypeDefineObj(`${title}${pascalCaseKey}`, deepCopy(value.properties), value.type));
        //     }
        // }
        // return properties;
        const schema = deepCopy(this.state.schema.responses['200'].schema);
        const properties = [];
        const title = formatTsResponse(this.state.methodName);
        // if (schema.type === 'object') {
        //     properties.push(createTypeDefineObj(title, schema.properties, schema.type, schema.required));
        // }
        // deepFormatResponse(schema, properties, { title: title, properties: schema.properties, type: schema.type });
        if (['object'].includes(schema.type)) {
            properties.push(createTypeDefineObj(title, schema.properties, schema.type, schema.required));
            if (schema.properties === undefined) {
                return properties;
            }
            deepFormatResponse(schema, properties, { title: title, properties: schema.properties, type: schema.type });
        }
        if (['array'].includes(schema.type)) {
            const schemaArray = schema.items;
            properties.push(createTypeDefineObj(title, schemaArray.properties, schemaArray.type, schemaArray.required));
            deepFormatResponse(schemaArray, properties, { title: title, properties: schemaArray.properties, type: schemaArray.type });
        }
        return properties;
    }
    renderFetchRequest() {
        const { schema, host, url, method } = this.state;
        const { summary } = schema;
        if (this.state.fetchType === 'axios') {
            return `
                // ${summary}
                return axios.request({
                    url: \`${host}${url}\`,
                    method: '${method}',
                    data: params,
                    ...options, 
                })
            `;
        }
        return `
            // ${summary}
            return Taro.request({
                url: \`${host}${url}\`,
                method: '${method}',
                data: params,
                ...options, 
            })
        `;
    }
}

class CreateApi {
    state = {
        input: '',
        fetchType: 'axios',
        inputStream: '',
        options: { host: '' },
        methodsQueue: [],
        resultQueue: []
    };
    constructor(input, fetchType = 'axios', options = { host: '' }) {
        if (!['axios', 'taro'].includes(fetchType)) {
            throw `${fetchType}字段出错, 必须是${'axios'}|${'taro'}`;
        }
        this.state = {
            input: input,
            fetchType: fetchType,
            inputStream: '',
            options: options,
            methodsQueue: [],
            resultQueue: [],
        };
        this.state.inputStream = readFileSync(this.state.input);
        this.state.options.host = this.state.options.host ?
            this.state.options.host :
            JSON.parse(this.state.inputStream).host || '';
        console.log(`=====host:[${this.state.options.host}]=====\n`);
        this.state.methodsQueue = this.analysiRules(this.state.inputStream);
        this.state.resultQueue = this.generateMethod(this.state.methodsQueue);
    }
    // 生成接口类型
    generateMethod(queue) {
        return queue.map(({ method, url, schema }) => {
            if (['post', 'put'].includes(method)) {
                return new RequestPost(method, url, schema, this.state.fetchType, this.state.options.host);
            }
            return new RequestGet(method, url, schema, this.state.fetchType, this.state.options.host);
        });
    }
    // 解析规则
    analysiRules(stream) {
        if (this.state.fetchType === 'axios') {
            return analysiAxiosRules(stream);
        }
        return analysiYapiRules(stream);
    }
    // 生成接口文件
    handleRenderApiFile() {
        return this.state.resultQueue.reduce((pre, next) => {
            pre = pre + `
        ${next.renderMethod()}
      `;
            return pre;
        }, '');
    }
    handleRenderApiTsFileFeature() {
        const init = {
            title: 'Api',
            type: 'object',
            properties: {},
            definitions: {},
            additionalProperties: false,
            preDefine: ''
        };
        return this.state.resultQueue.reduce((pre, next) => {
            const tsQueue = next.renderTsDefineResFeature();
            tsQueue.forEach(item => {
                const { key, propertiesKey, definitionsKey } = item;
                pre.properties[key] = propertiesKey;
                pre.definitions[key] = definitionsKey;
                pre.preDefine = pre.preDefine + `${key},`;
            });
            const tsQueueReq = next.renderTsDefineReqFeature();
            tsQueueReq.forEach(item => {
                const { key, propertiesKey, definitionsKey } = item;
                pre.properties[key] = propertiesKey;
                pre.definitions[key] = definitionsKey;
                pre.preDefine = pre.preDefine + `${key},`;
            });
            return pre;
        }, init);
    }
    handleRenderApiTsFile() {
        const init = {
            title: 'Api',
            type: 'object',
            properties: {},
            definitions: {},
            additionalProperties: false,
            preDefine: ''
        };
        return this.state.resultQueue.reduce((pre, next) => {
            const req = next.state.tsReq;
            const res = next.state.tsRes;
            const titleReq = req.title;
            const titleRes = res.title;
            pre['definitions'][titleReq] = req;
            pre['properties'][titleReq] = {
                $ref: `#/definitions/${titleReq}`,
            };
            pre['definitions'][titleRes] = res;
            pre['properties'][titleRes] = {
                $ref: `#/definitions/${titleRes}`,
            };
            pre.preDefine = pre.preDefine + `${titleReq},${titleRes},`;
            return pre;
        }, init);
    }
    // 生成接口
    generateFile(outputPath = '') {
        const apiDefineStream = this.handleRenderApiTsFileFeature();
        // console.log(JSON.stringify(mock));
        // const apiDefineStream = this.handleRenderApiTsFile();
        const tsDefine = apiDefineStream.preDefine;
        delete apiDefineStream.preDefine;
        const definePath = './index.define';
        const tsPreDefineStream = renderTsPreImport(definePath, tsDefine);
        const apiStream = rendeFetchPre(this.state.fetchType) + tsPreDefineStream + this.handleRenderApiFile();
        fs__namespace.writeFileSync(`${outputPath}/index.ts`, prettier__namespace.format(apiStream, { semi: false, parser: "typescript" }));
        // fs.writeFileSync(`${outputPath}/index.test.json`, prettier.format(JSON.stringify(apiDefineStream), { semi: false, parser: "json" }));
        jsonSchemaToTypescript.compile(apiDefineStream, 'Api').then((ts) => {
            fs__namespace.writeFileSync(outputPath + `${definePath}.ts`, ts);
        });
        console.log('文件生成成功~');
    }
}

module.exports = CreateApi;
