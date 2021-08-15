import {
    SwaggerParamsPathsMethods,
    CreateApiStateType,
    RequestPostState,
    RequestGetRenderTs,
    SwaggerParamsPathsMethodsSchema
} from './../define';
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
            ReqTsTitle: '',
            ResTsTitle: '',
        }
        this.state.tsReq = this.renderTsDefineReq();
        const responseTsList = this.renderTsDefineResFeature()
        const reqTsList = this.renderTsDefineReqFeature()
        this.state.ReqTsTitle = (reqTsList[0] && reqTsList[0].key) || 'any'
        this.state.ResTsTitle = (responseTsList[0] && responseTsList[0].key) || 'any'
    }
    renderTsDefineReqFeature() {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'body');
        if (reqParams.length === 0) {
            return [];
        }
        const [firstParams] = reqParams;
        const title = formatTsRequest(this.state.methodName);
        const properties = firstParams.schema!.properties
        const required = firstParams.schema!.required;
        const reqList = [];
        const req = createTypeDefineObj(title, properties, 'object', required)
        reqList.push(req);
        return reqList;
    }
    renderTsDefineReq(): RequestGetRenderTs {
        const { parameters = [] } = this.state.schema;
        const reqParams = parameters.filter((params) => params.in === 'body');
        if (reqParams.length > 0) {
            const [firstParams] = reqParams;
            return {
                title: formatTsRequest(this.state.methodName),
                properties: firstParams.schema!.properties,
                required: firstParams.schema!.required,
                additionalProperties: false,
            }
        }
        return {
            title: formatTsRequest(this.state.methodName),
            properties: formatProperties(reqParams),
            required: formatRequireds(reqParams),
            additionalProperties: true,
        }
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
                    data: params,
                    ...options, 
                })
            `
        }
        return `
            // ${this.state.schema.summary}
            return Taro.request({
                url: \`${this.state.host}/${this.state.url}\`,
                method: '${this.state.method}',
                data: params,
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
export default RequestPost;