
interface createApiParams {
    sourceFile: string;
    outputPath: string;
    options: {
        apiDeclare: string;
    }
}
declare const createApi = (sourceFile: string, outputPath: string, options: createApiParams): void => { }