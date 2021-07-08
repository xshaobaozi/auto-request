declare module 'swagger-json-schema-request' {
    interface Options {
        apiPath: string;
        apiDeclare: string;
    }
    export default function (sourceFile: string, { apiPath, apiDeclare }: Options): void
}