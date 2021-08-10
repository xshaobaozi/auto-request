import { SwaggerParamsPathsMethods, CreateApiStateType, RequestGetState, RequestGetRenderTs } from './../define';
import { createMethodsName, formatUrl, filterPathParams, formatTsRequest, formatTsResponse, formatProperties, formatRequireds } from './../utils';

class RequestGet {
    state: RequestGetState;
    constructor(method: string, url: string, schema: SwaggerParamsPathsMethods, fetchType: CreateApiStateType, host: string) {
        this.state = {
            methodName: createMethodsName(url, method, schema.parameters || []),
            url: formatUrl(schema.parameters, url),
            fetchType: fetchType,
            method: method,
            schema: schema,
            host: host,
            tsRes: null,
            tsReq: null,
        }
        this.state.tsReq = this.renderTsDefineReq();
        this.state.tsRes = this.renderTsDefineRes();
    }
    renderTsDefineReq(): RequestGetRenderTs {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'query');
        return {
            title: formatTsRequest(this.state.methodName),
            properties: formatProperties(reqParams),
            required: formatRequireds(reqParams),
        }
    }
    renderTsDefineRes(): RequestGetRenderTs {
        const schema = this.state.schema.responses['200'].schema;
        return {
            ...schema,
            title: formatTsResponse(this.state.methodName),
        };
    }
    renderFetchRequest() {
        if (this.state.fetchType === CreateApiStateType.AXIOS) {
            return `
                return axios.request({
                    url: \`${this.state.host}${this.state.url}\`,
                    method: '${this.state.method}',
                    params: params,
                    ...options, 
                })
            `
        }
        return `
            return Taro.request({
                url: \`${this.state.host}${this.state.url}\`,
                method: '${this.state.method}',
                params: params,
                ...options, 
            })
        `
    }
    renderMethod() {
        return `\n
            export const ${this.state.methodName} = <P extends ${this.state.tsReq.title}, T extends ${this.state.tsRes.title}>(${filterPathParams(this.state.schema.parameters)}): Promise<T> => {
                ${this.renderFetchRequest()}
            }
        
        `
    }
}
export default RequestGet;