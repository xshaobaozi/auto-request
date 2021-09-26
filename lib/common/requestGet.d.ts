import { SwaggerParamsPathsMethods, CreateApiStateType, RequestGetRenderTs } from './../define';
import BaseRequest from './base';
declare class RequestGet extends BaseRequest {
    constructor(method: string, url: string, schema: SwaggerParamsPathsMethods, fetchType: CreateApiStateType, host: string);
    renderTsDefineReq(): RequestGetRenderTs;
    renderTsDefineReqFeature(): {
        key: string;
        propertiesKey: {
            $ref: string;
        };
        definitionsKey: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: any;
            required: any;
        };
    }[];
    renderTsDefineResFeature(): {
        key: string;
        propertiesKey: {
            $ref: string;
        };
        definitionsKey: {
            title: string;
            type: string;
            additionalProperties: boolean;
            properties: any;
            required: any;
        };
    }[];
    renderFetchRequest(): string;
}
export default RequestGet;
