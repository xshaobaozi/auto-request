import { SwaggerParamsPathsMethods, CreateApiStateType, RequestPostState, RequestGetRenderTs } from './../define';
import { createMethodsName, formatUrl, filterPathParams, formatTsRequest, formatTsResponse, formatProperties, formatRequireds } from './../utils';


class RequestPost {
    state: RequestPostState;
    constructor(method: string, url: string, schema: SwaggerParamsPathsMethods, fetchType: CreateApiStateType, host: string) {
        this.state = {
            methodName: createMethodsName(url, method, schema.parameters),
            url: formatUrl(schema.parameters, url),
            fetchType: fetchType,
            method: method,
            schema: schema,
            host: host,
            tsReq: null,
            tsRes: null,
        }
        this.state.tsReq = this.renderTsDefineReq();
        this.state.tsRes = this.renderTsDefineRes();
    }
    renderTsDefineReq(): RequestGetRenderTs {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'body');
        return {
            title: formatTsRequest(this.state.methodName),
            properties: formatProperties(reqParams),
            required: formatRequireds(reqParams),
            additionalProperties: false,
        }
    }
    renderTsDefineRes(): RequestGetRenderTs {
        const schema = this.state.schema.responses['200'].schema;
        return {
            ...schema,
            additionalProperties: false,
            title: formatTsResponse(this.state.methodName),
        };
    }
    renderFetchRequest() {
        if (this.state.fetchType === CreateApiStateType.AXIOS) {
            return `
                return axios.request({
                    url: \`${this.state.host}${this.state.url}\`,
                    method: '${this.state.method}',
                    data: params,
                    ...options, 
                })
            `
        }
        return `
            return Taro.request({
                url: \`${this.state.host}/${this.state.url}\`,
                method: '${this.state.method}',
                data: params,
                ...options, 
            })
        `
    }
    renderMethod() {
        return `\n
            export const ${this.state.methodName} = <P extends ${this.state.tsReq.title}, T extends ${this.state.tsRes.title} >(${filterPathParams(this.state.schema.parameters)}): Promise<T> => {
                ${this.renderFetchRequest()}
            }
        
        `
    }
}
export default RequestPost;