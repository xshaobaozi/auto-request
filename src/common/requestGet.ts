import { SwaggerParamsPathsMethods, CreateApiStateType, RequestGetState, RequestGetRenderTs, SwaggerParamsPathsMethodsSchema } from './../define';
import {
    createMethodsName,
    formatUrl,
    filterPathParams,
    formatTsRequest,
    formatTsResponse,
    formatProperties,
    formatRequireds,
    deepCopy,
    createTypeDefineObj,
    pascalCase
} from './../utils';

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
            ReqTsTitle: '',
            ResTsTitle: '',
        }
        this.state.tsReq = this.renderTsDefineReq();

        const responseTsList = this.renderTsDefineResFeature();
        const requestTsList = this.renderTsDefineReqFeature();
        this.state.ReqTsTitle = (requestTsList[0] && requestTsList[0].key) || 'any'
        this.state.ResTsTitle = (responseTsList[0] && responseTsList[0].key) || 'any'
    }
    renderTsDefineReq(): RequestGetRenderTs {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'query');
        return {
            title: formatTsRequest(this.state.methodName),
            properties: formatProperties(reqParams),
            required: formatRequireds(reqParams),
            additionalProperties: false,
        }
    }
    renderTsDefineReqFeature() {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'query');
        const title = formatTsRequest(this.state.methodName);
        const properties = formatProperties(reqParams)
        const required = formatRequireds(reqParams);
        const reqList = [];
        const req = createTypeDefineObj(title, properties, 'object', required)
        reqList.push(req);
        return reqList;
    }
    renderTsDefineResFeature() {
        const schema = deepCopy(this.state.schema.responses['200'].schema) as SwaggerParamsPathsMethodsSchema;
        const properties = [];
        const title = formatTsResponse(this.state.methodName);
        if (schema.type === 'object') {
            properties.push(createTypeDefineObj(title, schema.properties, schema.type));
        }
        if (schema.properties === undefined) { return properties; }
        for (const [key, value] of Object.entries(schema.properties)) {
            const pascalCaseKey = pascalCase(key);
            if (value.type === 'array') {
                // properties.push(deepCopy(value));
                properties.push(createTypeDefineObj(`${title}${pascalCaseKey}`, deepCopy(value.items.properties), value.items.type));
                delete value.items.properties;
                Object.assign(value.items, {
                    $ref: `#/definitions/${title}${pascalCaseKey}`
                })
            }
            if (value.type === 'object') {
                properties.push(createTypeDefineObj(`${title}${pascalCaseKey}`, deepCopy(value.properties), value.type));
            }
        }

        return properties;
    }
    renderFetchRequest() {
        if (this.state.fetchType === CreateApiStateType.AXIOS) {
            return `
                // ${this.state.schema.summary}
                return axios.request({
                    url: \`${this.state.host}${this.state.url}\`,
                    method: '${this.state.method}',
                    params: params,
                    ...options, 
                })
            `
        }
        return `
            // ${this.state.schema.summary}
            return Taro.request({
                url: \`${this.state.host}${this.state.url}\`,
                method: '${this.state.method}',
                params: params,
                ...options, 
            })
        `
    }
    renderAxiosRes(title) {
        if (this.state.fetchType === 'axios') {
            return `AxiosResponse <${title}>`
        }
        return title;
    }
    renderMethod() {
        return `\n
            export const ${this.state.methodName} = <P extends ${this.state.ReqTsTitle}, T = ${this.renderAxiosRes(this.state.ResTsTitle)}>(${filterPathParams(this.state.schema.parameters)}): Promise<T> => {
                ${this.renderFetchRequest()}
            }
        
        `
    }
}
export default RequestGet;