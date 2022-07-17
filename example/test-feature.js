// 期望写法
const path = require('path');
const source = path.join(__dirname, './yapi.json');
const apiPath = path.join(__dirname, './../api/');
const autoRequest = require('./../dist/bundle');
const apiGenerator = new autoRequest(source, {
  fetchType: 'axios',
  host: '',
  // 接口文件最上面插入代码
  preTemplate(instance) {
    const getDefines = instance.getDefines();
    return `
        import request from '@/apis';
        import { ${getDefines.join(',')} } from './index.define';
    `;
  },
  // 每一个接口的代码生成
  apiTemplate(config, instance) {
    const url = config.getUrl();
    const method = config.getMethod();
    const requestName = instance.getRequestName();
    const requestDefine = instance.getRequestDefine();
    const responseDefine = instance.getResponseDefine();
    const pathParams = instance.getPathParams();
    const description = instance.getDescription();
    const insertPathParams = pathParams ? `${pathParams},` : '';
    return `
        ${description}
        export const ${requestName} = <P extends ${requestDefine}, T = ${responseDefine}>(${insertPathParams} params: P, options?:any) => {
            request({
                url: ${url},
                method: ${method},
                params,
                ...options
            })
        }
    `;
  },
  // 最后一个接口后插入
  endTemplate() {
    return `
        // 文件结尾插入 预留场景
    `;
  },
});
apiGenerator.generateFile(apiPath);
