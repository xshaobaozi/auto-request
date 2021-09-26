import RequestGet from './common/requestGet';
import RequestPost from './common/requestPost';
import { apiQueueParams, CreateApiStateType } from './define';
interface CreateApiState {
    input: string;
    fetchType: CreateApiStateType;
    inputStream: string;
    options: {
        host: string;
    };
    methodsQueue: apiQueueParams[];
    resultQueue: any[];
}
declare class CreateApi {
    state: CreateApiState;
    constructor(input: string, fetchType?: CreateApiStateType, options?: {
        host: string;
    });
    generateMethod(queue: apiQueueParams[]): (RequestPost | RequestGet)[];
    analysiRules(stream: any): apiQueueParams[];
    handleRenderApiFile(): string;
    handleRenderApiTsFileFeature(): any;
    handleRenderApiTsFile(): any;
    generateFile(outputPath?: string): void;
}
export default CreateApi;
