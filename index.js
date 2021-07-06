const schema = require("./assets/api.json");
const fs = require("fs");
const prettier = require("prettier");

const host = schema.host || "";
const basePath = schema.basePath;
const schemes = schema.schemes;

const paths = schema.paths;
const ExpError = (errorInfo) => {
  const str = JSON.stringify(errorInfo);
  console.log(`出现无法解析的错误${str}`);
};

const urlPre = `${schemes[0]}s://${host}${basePath}`;


class PostMethodFactory {
  constructor(methodInfo, methods, urlPath) {
    this.methodInfo = methodInfo;
    this.methods = methods;
    const { description, consumes, tags, parameters } = methodInfo;
    this.description = description;
    this.consumes = consumes;
    this.url = urlPath;
    this.parameters = parameters;
    this.tags = tags;
  }
  handleGetUrl() {
    const urlPathParams = this.parameters.filter(
      (paramsItem) => this.parameters.in !== "body"
    );
    return urlPathParams.reduce((pre, next) => {
      const name = next.name;
      const reg = new RegExp(`{${name}}`);
      pre = pre.replace(reg, "${" + pascalCase(name) + "}");
      return pre;
    }, this.url);
  }
  handleGetParams() {
    const body = this.parameters.find((paramsItem) => paramsItem.in === "body");
    if (!body) return {};
    return Object.keys(body).reduce((pre, next) => {
      pre[next] = body[next].type;
      return pre;
    }, {});
  }
  handleCreateParams() {
    const urlPathParams = this.parameters.filter(
      (paramsItem) => paramsItem.in !== "body"
    );
    return (
      urlPathParams.reduce((pre, next) => {
        pre = `${pascalCase(next.name)}:any,` + pre;
        return pre;
      }, "") + "params: P, options?"
    );
  }
  handleInstanceInfo() {
    return {
      method: this.methods,
      requestParams: this.handleGetParams(),
      url: this.handleGetUrl(),
      params: this.handleCreateParams(),
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
}, "");
const prettierCode = prettier.format(template + requestCode);
// const prettierCode = template + requestCode;
fs.writeFileSync("./assets/api.ts", prettierCode);
