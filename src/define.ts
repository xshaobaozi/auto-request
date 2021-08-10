export interface SwaggerParamsTags {
    name: string;
    description: string;
}
export interface SwaggerParamsPathsMethodsParams {
    name: string;
    in: 'body' | 'query' | 'path';
    required: boolean;
    description: string;
    type: string;
}
export interface SwaggerParamsPathsMethods {
    tags: string[];
    summary: string;
    description: string;
    parameters?: SwaggerParamsPathsMethodsParams[];
    responses: {
        [key: string]: {
            description: string;
            schema: {
                type: string;
                title: string;
                properties: any;
                required: string[];
            }
        }
    }
}
export interface SwaggerParamsPaths {
    [key: string]: {
        get: SwaggerParamsPathsMethods;
        post: SwaggerParamsPathsMethods;
        delete: SwaggerParamsPathsMethods;
        put: SwaggerParamsPathsMethods;
    }
}

export interface SwaggerParams {
    swagger: string;
    basePath: string;
    tags: SwaggerParamsTags[];
    schemes: string[];
    paths: SwaggerParamsPaths;
}
export interface apiQueueParams {
    method: string;
    schema: SwaggerParamsPathsMethods;
    url: string;
}
export enum CreateApiStateType {
    AXIOS = 'axios',
    TARO = 'taro',
}

export interface RequestGetState {
    methodName: string;
    url: string;
    fetchType: CreateApiStateType;
    method: string;
    host: string;
    schema: SwaggerParamsPathsMethods;
    tsReq: RequestGetRenderTs;
    tsRes: RequestGetRenderTs;
}
export interface RequestGetRenderTs {
    title: string;
    properties: any;
    required: string[];
}
export interface RequestPostState {
    methodName: string;
    url: string;
    fetchType: CreateApiStateType;
    method: string;
    host: string;
    schema: SwaggerParamsPathsMethods;
    tsReq: RequestGetRenderTs;
    tsRes: RequestGetRenderTs;
}