import {
  RequestPostState,
  SwaggerParamsPathsMethods,
  CreateApiStateType,
  RequestGetRenderTs
} from './../define';
import { createMethodsName, formatUrl, filterPathParams } from './../utils';

abstract class BaseRequest {
    state: RequestPostState;
    constructor(method: string, url: string, schema: SwaggerParamsPathsMethods, fetchType: CreateApiStateType, host: string) {
      this.state = {
        methodName: createMethodsName(url, method, schema.parameters),
        url: formatUrl(schema.parameters, url),
        fetchType: fetchType,
        method: method,
        schema: schema,
        host: host,
        tsReq: {} as any,
        tsRes: {} as any,
      }
      this.state.tsReq = this.renderTsDefineReq();
    }
    abstract renderTsDefineReq(): RequestGetRenderTs;
    renderAxiosRes(title: string) {
      const isArray = this.state.schema.responses['200'].schema.type === 'array' ? '[]' : '';
      if (this.state.fetchType === 'axios') {
        return `AxiosResponse <${title}${isArray}>`
      }
      return `${title}${isArray}`;
    }
    renderPromiseType() {
      if (this.state.fetchType === 'axios') {
        return 'Promise<T>';
      }
      return `RequestTask <T>`
    }
    abstract renderFetchRequest(): string;
    abstract renderTsDefineResFeature(): any[];
    abstract renderTsDefineReqFeature(): any[];
    renderMethod() {
      const responseTsList = this.renderTsDefineResFeature();
      const requestTsList = this.renderTsDefineReqFeature();
      const ReqTsTitle = (requestTsList[0] && requestTsList[0].key) || 'any'
      const ResTsTitle = (responseTsList[0] && responseTsList[0].key) || 'any'
      return `\n
            export const ${this.state.methodName} = 
            <P extends ${ReqTsTitle}, T = ${this.renderAxiosRes(ResTsTitle)}>
            (${filterPathParams(this.state.schema.parameters)}): ${this.renderPromiseType()} => {
                ${this.renderFetchRequest()}
            }
        `
    }
}

export default BaseRequest;