export interface SwaggerParamsTags {
    name: string;
    description: string;
}

export interface SwaggerParamsPathsMethodsParamsSchema {
    $schema: string;
    type: 'object';
    properties: {
        [key: string]: {
            description: string;
            type: string;
            items: {
                type: string;
                properties: {
                    [key: string]: SwaggerParamsTags;
                };
                required: string[];
                description:string;
            }
        }
    };
    required: string[];
}
export interface SwaggerParamsPathsMethodsParams {
    name: string;
    in: 'body' | 'query' | 'path';
    required?: boolean;
    description?: string;
    type?: string;
    schema?: SwaggerParamsPathsMethodsParamsSchema
}

export interface SwaggerParamsPathsMethodsResPropertiesString {
    type: 'string';
    description: string;
}
export interface SwaggerParamsPathsMethodsResPropertiesArray {
    type: 'array';
    items: {
        type: 'object',
        properties: {
            [key: string]: SwaggerParamsPathsMethodsResPropertiesString
        },
        $ref?: string;
    }
    description: string;
}
export interface SwaggerParamsPathsMethodsResPropertiesObject {
    type: 'object';
    properties: {
        [key: string]: SwaggerParamsPathsMethodsResPropertiesString;
    };
    description: string;
    $ref?: string;
}

export interface SwaggerParamsPathsMethodsSchema {
    type: string;
    title: string;
    properties: {
        [key: string]: SwaggerParamsPathsMethodsResPropertiesArray
        | SwaggerParamsPathsMethodsResPropertiesString
        | SwaggerParamsPathsMethodsResPropertiesObject;
    };
    required: string[];
}
export interface SwaggerParamsPathsMethods {
    tags: string[];
    summary: string;
    description: string;
    parameters?: SwaggerParamsPathsMethodsParams[];
    responses: {
        [key: string]: {
            description: string;
            schema: SwaggerParamsPathsMethodsSchema;
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
    ReqTsTitle: string;
    ResTsTitle: string;
}
export interface RequestGetRenderTs {
    title: string;
    properties: any;
    required: string[];
    additionalProperties: boolean;
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
    ReqTsTitle: string;
    ResTsTitle: string;
}