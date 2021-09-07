import { SwaggerParamsPathsMethods, CreateApiStateType, RequestGetState, RequestGetRenderTs, SwaggerParamsPathsMethodsSchema, RequestGetPropertiesObject } from './../define';
import {
    filterPathParams,
    formatTsRequest,
    formatTsResponse,
    formatProperties,
    formatRequireds,
    deepCopy,
    createTypeDefineObj,
    pascalCase,
    log,
    deepFormatResponse,
} from './../utils';
import BaseRequest from './base';

class RequestGet extends BaseRequest {
    state: RequestGetState;
    constructor(method: string, url: string, schema: SwaggerParamsPathsMethods, fetchType: CreateApiStateType, host: string) {
        super(method, url, schema, fetchType, host)
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
        const schema = deepCopy(this.state.schema.responses['200'].schema) as RequestGetPropertiesObject;
        const properties = [];
        const title = formatTsResponse(this.state.methodName);
        if (['object'].includes(schema.type)) {
            properties.push(createTypeDefineObj(title, schema.properties, schema.type, schema.required));
            deepFormatResponse(schema, properties, { title: title, properties: schema.properties, type: schema.type });
        }
        if (['array'].includes(schema.type)) {
            const schemaArray = (schema as any).items;
            properties.push(createTypeDefineObj(title, schemaArray.properties, schemaArray.type, schemaArray.required));
            deepFormatResponse(schemaArray, properties, { title: title, properties: schemaArray.properties, type: schemaArray.type });
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