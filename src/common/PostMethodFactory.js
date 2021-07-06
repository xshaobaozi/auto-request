import { pascalCase, pascalCaseReplaceString } from "./utils";

export default class PostMethodFactory {
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
