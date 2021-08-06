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
    parameters?: SwaggerParamsPathsMethodsParams[]
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