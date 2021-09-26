import { SwaggerParamsPathsMethodsParams, SwaggerParamsPaths, SwaggerParams, apiQueueParams, CreateApiStateType, RequestGetPropertiesObject } from './define';
export declare const readFileSync: (source: any) => string;
export declare const analysRequstMap: (stream: SwaggerParamsPaths) => apiQueueParams[];
export declare const analysiAxiosRules: (stream: SwaggerParams) => apiQueueParams[];
export declare const analysiYapiRules: (stream: SwaggerParams) => apiQueueParams[];
export declare const pascalCase: (str: any) => any;
export declare const pascalCaseReplaceString: (str: any) => any;
export declare const formatUrl: (parameters: SwaggerParamsPathsMethodsParams[] | undefined, url: string) => string;
export declare const createMethodsName: (url: string, method: string, parameters?: SwaggerParamsPathsMethodsParams[]) => any;
export declare const filterPathParams: (parameters?: SwaggerParamsPathsMethodsParams[]) => string;
export declare const rendeFetchPre: (type: CreateApiStateType) => "import Taro, { RequestTask } from '@tarojs/taro';\n" | "import axios, {AxiosResponse} from 'axios';\n";
export declare const formatTsRequest: (name: string) => string;
export declare const formatTsResponse: (name: string) => string;
export declare const formatRequireds: (reqParams?: SwaggerParamsPathsMethodsParams[]) => string[];
export declare const formatProperties: (reqParams?: SwaggerParamsPathsMethodsParams[]) => any;
export declare const renderTsPreImport: (prePath: string, preDefine: string) => string;
export declare const deepCopy: (json: any) => any;
export declare const createTypeDefineObj: (title: string, properties: any, type: string, required?: any) => {
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
};
interface createTypeDefineObjParams {
    title: string;
    properties: any;
    type: string;
    required?: any;
}
export declare const deepFormatResponse: (preProperties: RequestGetPropertiesObject, schemas: any[] | undefined, createTypeDefineObjParams: createTypeDefineObjParams) => void;
export declare const log: (data: any) => void;
export {};
