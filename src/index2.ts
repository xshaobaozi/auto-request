import { CreateApiBaseOptions, CreateApiState } from './helper/base'
import { readFileSync, parseJSON } from './utils';

class CreateApi {
    state: CreateApiState = {
        input: '',
        schemas: {},
        options: {}
    }
    constructor(input: string, options: CreateApiBaseOptions) {
        this.state.input = (input);
        this.state.schemas = parseJSON(readFileSync(input));
        this.state.options = options;
    }
    // 接受总schema
    deepSchemas(s: string) { }
    // 解析每一个接口定义
    deepSchemaItem() { }
    // 包装每一个完成解析的接口
    wapperSchemaItem() { }
    // 接受总解析结果
    wapperSchemas() { }
    // 输出文件
    generateFile(outpath: string) { }
}
export default CreateApi