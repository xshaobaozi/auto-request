const schema = require("./assets/api.json");
const camelcase = require("camelcase");

const host = schema.host;
const basePath = schema.basePath;
const schemes = schema.schemes;

const paths = schema.paths;
const ExpError = (errorInfo) => {
  const str = JSON.stringify(errorInfo);
  console.log(`出现无法解析的错误${str}`);
};

class GetMethodFactory {
  constructor(methodInfo, methods) {
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
    };
  }
}

class PostMethodFactory {
  constructor(methodInfo, methods) {
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
      apiMap[keyName] = new PostMethodFactory(methodInfo, method).handleInstanceInfo();
      return;
    }
    if (method.toUpperCase() === "GET") {
      apiMap[keyName] = new GetMethodFactory(methodInfo, method).handleInstanceInfo();
      return;
    }
  });
});
console.log(apiMap);
