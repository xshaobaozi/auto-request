import { RequestPostState, SwaggerParamsPathsMethods, CreateApiStateType, RequestGetRenderTs } from './../define';
declare abstract class BaseRequest {
    state: RequestPostState;
    constructor(method: string, url: string, schema: SwaggerParamsPathsMethods, fetchType: CreateApiStateType, host: string);
    abstract renderTsDefineReq(): RequestGetRenderTs;
    renderAxiosRes(title: string): string;
    renderPromiseType(): "Promise<T>" | "RequestTask <T>";
    abstract renderFetchRequest(): string;
    abstract renderTsDefineResFeature(): any[];
    abstract renderTsDefineReqFeature(): any[];
    renderMethod(): string;
}
export default BaseRequest;
