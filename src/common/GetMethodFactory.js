import { pascalCase, pascalCaseReplaceString, RESPONSE, PARAMS } from './utils';

export default class GetMethodFactory {
  constructor(methodInfo, methods, urlPath) {
    this.methodInfo = methodInfo;
    this.methods = methods;
    const { description, consumes, tags, parameters, responses } = methodInfo;
    const { name, schema } = parameters[0];
    this.description = description;
    this.consumes = consumes;
    this.parameters = parameters;
    this.responses = responses;
    this.tags = tags;
    this.name = name;
    this.schema = schema;
    this.url = urlPath;
  }
  handleCteateParamsName(str = PARAMS) {
    return `${this.handleCreateMethodName()}${str}`;
  }
  handleGetParams() {
    const queryList = this.parameters.filter((params) => params.in === 'query');
    return {
      title: `${this.handleCteateParamsName()}`,
      properties: queryList.reduce((pre, next) => {
        pre[next.name] = next;
        return pre;
      }, {}),
      required: queryList.filter((params) => params.required === true).map((params) => params.name),
    };
  }
  handleGetResponse() {
    const { schema } = this.responses['200'];
    return {
      ...schema,
      title: `${this.handleCteateParamsName(RESPONSE)}`,
    };
  }
  // handleCreateTsParams() {
  //   return compile(this.handleGetParams(), `${this.handleCreateMethodName()}Params`);
  // }
  handleGetUrl() {
    const urlPathParams = this.parameters.filter((paramsItem) => this.parameters.in !== 'body');
    return urlPathParams.reduce((pre, next) => {
      const name = next.name;
      const reg = new RegExp(`{${name}}`);
      pre = pre.replace(reg, '${' + pascalCase(name) + '}');
      return pre;
    }, this.url);
  }
  handleCreateParams() {
    const urlPathParams = this.parameters.filter(
      (paramsItem) => !['query', 'body'].includes(paramsItem.in)
    );
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
