import { SwaggerParamsPathsMethods, CreateApiStateType } from './../define';
import { createMethodsName, formatUrl, filterPathParams, formatTsRequest, formatTsResponse, formatProperties, formatRequireds } from './../utils';
interface RequestPostState {
    methodName: string;
    url: string;
    fetchType: CreateApiStateType;
    method: string;
    schema: SwaggerParamsPathsMethods;
}

class RequestPost {
    state: RequestPostState;
    constructor(method: string, url: string, schema: SwaggerParamsPathsMethods, fetchType: CreateApiStateType) {
        this.state = {
            methodName: createMethodsName(url, method, schema.parameters),
            url: formatUrl(schema.parameters, url),
            fetchType: fetchType,
            method: method,
            schema: schema,
        }
    }
    renderTsDefine() {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'body');
        return {
            title: formatTsRequest(this.state.methodName),
            properties: formatProperties(reqParams),
            required: formatRequireds(reqParams),
        }
    }
    renderFetchRequest() {
        if (this.state.fetchType === CreateApiStateType.AXIOS) {
            return `
                return axios.request({
                    url: '${this.state.url}',
                    method: '${this.state.method}',
                    ...options, 
                    data: params,
                })
            `
        }
        return `
            return Taro.request({
                url: '${this.state.url}',
                method: '${this.state.method}',
                ...options, 
                data: params,
            })
        `
    }
    renderMethod() {
        return `\n
            export const ${this.state.methodName} = <P = any, T = any>(${filterPathParams(this.state.schema.parameters)}): Promise<T> => {
                ${this.renderFetchRequest()}
            }
        
        `
    }
}
export default RequestPost;