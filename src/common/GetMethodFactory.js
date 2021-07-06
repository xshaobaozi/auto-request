import { pascalCase, pascalCaseReplaceString } from "./utils";

export default class GetMethodFactory {
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
  handleCreateParams() {
    const urlPathParams = this.parameters.filter(
      (paramsItem) => !["query", "body"].includes(paramsItem.in)
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
