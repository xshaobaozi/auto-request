import { SwaggerParamsPathsMethods, CreateApiStateType, RequestGetState, RequestGetRenderTs, SwaggerParamsPathsMethodsSchema } from './../define';
import {
    filterPathParams,
    formatTsRequest,
    formatTsResponse,
    formatProperties,
    formatRequireds,
    deepCopy,
    createTypeDefineObj,
    pascalCase
} from './../utils';
import BaseRequest from './base';

class RequestGet extends BaseRequest {
    state: RequestGetState;
    constructor(method: string, url: string, schema: SwaggerParamsPathsMethods, fetchType: CreateApiStateType, host: string) {
        super(method, url, schema, fetchType, host)
        this.state.tsReq = this.renderTsDefineReq();
        // const responseTsList = this.renderTsDefineResFeature();
        // const requestTsList = this.renderTsDefineReqFeature();
        // this.state.ReqTsTitle = (requestTsList[0] && requestTsList[0].key) || 'any'
        // this.state.ResTsTitle = (responseTsList[0] && responseTsList[0].key) || 'any'
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
        const { schema, host, url, method } = this.state;
        const { summary } = schema;
        if (this.state.fetchType === CreateApiStateType.AXIOS) {
            return `
                // ${summary}
                return axios.request({
                    url: \`${host}${url}\`,
                    method: '${method}',
                    params: params,
                    ...options, 
                })
            `
        }
        return `
            // ${summary}
            return Taro.request({
                url: \`${host}${url}\`,
                method: '${method}',
                params: params,
                ...options, 
            })
        `
    }
}
export default RequestGet;