import { pascalCase, pascalCaseReplaceString, RESPONSE, PARAMS } from './utils';

export default class PostMethodFactory {
  constructor(methodInfo, methods, urlPath) {
    this.methodInfo = methodInfo;
    this.methods = methods;
    const { description, consumes, tags, parameters, responses } = methodInfo;
    this.description = description;
    this.consumes = consumes;
    this.responses = responses;
    this.url = urlPath;
    this.parameters = parameters;
    this.tags = tags;
  }
  handleGetUrl() {
    const urlPathParams = this.parameters.filter((paramsItem) => this.parameters.in !== 'body');
    return urlPathParams.reduce((pre, next) => {
      const name = next.name;
      const reg = new RegExp(`{${name}}`);
      pre = pre.replace(reg, '${' + pascalCase(name) + '}');
      return pre;
    }, this.url);
  }
  handleCteateParamsName(str = PARAMS) {
    return `${this.handleCreateMethodName()}${str}`;
  }
  handleGetParams() {
    const body = this.parameters.find((paramsItem) => paramsItem.in === 'body');
    if (!body) return {};
    const json = {
      ...body.schema,
      title: `${this.handleCteateParamsName()}`,
    };
    return json;
  }
  handleGetResponse() {
    const { schema } = this.responses['200'];
    return {
      ...schema,
      title: `${this.handleCteateParamsName(RESPONSE)}`,
    };
  }
  handleCreateParams() {
    const urlPathParams = this.parameters.filter((paramsItem) => paramsItem.in !== 'body');
    return (
      urlPathParams.reduce((pre, next) => {
        pre = `${pascalCase(next.name)}:any,` + pre;
        return pre;
      }, '') + 'params: P, options?:any'
    );
  }
  handleCreateMethodName() {
    return pascalCaseReplaceString(this.handleGetUrl()) + pascalCase(this.methods);
  }
  createTaroRequestTemplate(urlPre = '') {
    return `\n
    export const ${this.handleCreateMethodName()} = <P = ${`${this.handleCteateParamsName()}`}, T = ${this.handleCteateParamsName(
      RESPONSE
    )}>(${this.handleCreateParams()} ):Promise<T> => {
      return new Promise((resolve, reject) => {
        Taro.request({
          url: \`${urlPre}${this.handleGetUrl()}\`,
          method: '${this.methods}',
          data: params,
          complete: (res: T) => {resolve(res)},
          fail: (err) => {reject(err)},
          ...options,
        })
      })
    }
    `;
  }
}
