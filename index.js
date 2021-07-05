const schema = require("./assets/api.json");
const camelcase = require("camelcase");
const fs = require("fs");
const pascalCase = (str) => {
  return camelcase(str.replace(/\//g, ""), { pascalCase: true });
};
const host = schema.host;
const basePath = schema.basePath;
const schemes = schema.schemes;

const paths = schema.paths;
const ExpError = (errorInfo) => {
  const str = JSON.stringify(errorInfo);
  console.log(`出现无法解析的错误${str}`);
};

const urlPre = `${schemes[0]}s://${host}${basePath}`;
class GetMethodFactory {
  constructor(methodInfo, methods, urlPath) {
    this.methodInfo = methodInfo;
    this.methods = methods;
    const { description, consumes, tags, parameters } = methodInfo;
    const { name, schema } = parameters[0];
    this.description = description;
    this.consumes = consumes;
    this.parameters = parameters;
    this.tags = tags;
    this.name = name;
    this.schema = schema;
    this.url = urlPath;
  }
  handleGetParams() {
    return this.parameters.reduce((pre, next) => {
      pre[next.name] = next.type;
      return pre;
    }, {});
  }
  handleInstanceInfo() {
    return {
      method: this.methods,
      requestParams: this.handleGetParams(),
      url: this.url,
    };
  }
}

class PostMethodFactory {
  constructor(methodInfo, methods, urlPath) {
    this.methodInfo = methodInfo;
    this.methods = methods;
    const { description, consumes, tags, parameters } = methodInfo;
    const { name, schema } = parameters[0];
    this.description = description;
    this.consumes = consumes;
    this.url = urlPath;
    this.parameters = parameters;
    this.tags = tags;
    this.name = name;
    this.schema = schema;
    const _in = parameters.in;

    if (name !== "root" && _in !== "body") {
      throw ExpError({ name, _in });
    }

    const { properties } = schema;
  }
  handleGetParams() {
    const properties = this.schema.properties;
    return Object.keys(properties).reduce((pre, next) => {
      pre[next] = properties[next].type;
      return pre;
    }, {});
  }
  handleInstanceInfo() {
    return {
      method: this.methods,
      requestParams: this.handleGetParams(),
      url: this.url,
    };
  }
}

let apiMap = {};
Object.keys(paths).forEach((urlPath) => {
  Object.keys(paths[urlPath]).forEach((method) => {
    const keyName = `${urlPath}-${method}`;
    if (apiMap[keyName]) {
      throw `已经存在${keyName}方法`;
    }
    const methodInfo = paths[urlPath][method];
    if (method.toUpperCase() === "POST") {
      apiMap[keyName] = new PostMethodFactory(
        methodInfo,
        method,
        urlPath
      ).handleInstanceInfo();
      return;
    }
    if (method.toUpperCase() === "GET") {
      apiMap[keyName] = new GetMethodFactory(
        methodInfo,
        method,
        urlPath
      ).handleInstanceInfo();
      return;
    }
  });
});

function createTaroRequest(req) {
  const params = {
    url:  req.url,
    method: req.method,
    complete: () => {},
    data: {},
  };
  return `\n
  export const ${pascalCase(
    params.url
  )}${pascalCase(params.method)} = <P = unknown, T = unknown>(params: P, options?):Promise<T> => {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: '${urlPre}${params.url}',
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
`
const requestCode = Object.values(apiMap).reduce((pre, next) => {
  pre = pre + createTaroRequest(next);
  return pre;
}, "");
fs.writeFileSync("./assets/api.ts", template + requestCode);
