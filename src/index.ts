import * as fs from 'fs';
import * as prettier from 'prettier';
import { compile } from 'json-schema-to-typescript';
import {
  readFileSync,
  analysiAxiosRules,
  analysiYapiRules,
  rendeFetchPre,
  renderTsPreImport,
} from './utils';
import RequestGet from './common/requestGet';
import RequestPost from './common/requestPost';
import { apiQueueParams, CreateApiStateType } from './define';
import { createDir } from './common/createFile';
interface CreateApiState {
  createCount: number;
  input: string;
  fetchType: CreateApiStateType;
  inputStream: string;
  options: {
    host: string;
    preFix: string;
  };
  methodsQueue: apiQueueParams[];
  // resultQueue: RequestGet[] | RequestPost[];
  resultQueue: any[];
}
class CreateApi {
  state: CreateApiState = {
    input: '',
    fetchType: 'axios',
    inputStream: '',
    options: { host: '', preFix: '' },
    methodsQueue: [],
    resultQueue: [],
    createCount: 0,
  };
  constructor(
    input: string,
    fetchType: CreateApiStateType = 'axios',
    options = { host: '', preFix: '' }
  ) {
    if (!['axios', 'taro'].includes(fetchType)) {
      throw `${fetchType}字段出错, 必须是${'axios'}|${'taro'}`;
    }
    this.state = {
      input: input,
      fetchType: fetchType,
      inputStream: '',
      options: options,
      methodsQueue: [],
      resultQueue: [],
      createCount: 0,
    };
    this.state.inputStream = readFileSync(this.state.input);
    this.state.options.host = this.state.options.host + this.state.options.preFix || '';
    console.log(`=====host:[${this.state.options.host}]=====\n`);
    this.state.methodsQueue = this.analysiRules(this.state.inputStream);
    this.state.resultQueue = this.generateMethod(this.state.methodsQueue);
  }
  // 生成接口类型
  generateMethod(queue: apiQueueParams[]) {
    return queue.map(({ method, url, schema }) => {
      this.state.createCount++;
      if (['post', 'put'].includes(method)) {
        return new RequestPost(
          method,
          url,
          schema,
          this.state.fetchType,
          this.state.options.host
        );
      }
      return new RequestGet(
        method,
        url,
        schema,
        this.state.fetchType,
        this.state.options.host
      );
    });
  }
  // 解析规则
  analysiRules(stream: any) {
    if (this.state.fetchType === 'axios') {
      return analysiAxiosRules(stream);
    }
    return analysiYapiRules(stream);
  }
  // 生成接口文件
  handleRenderApiFile() {
    return this.state.resultQueue.reduce((pre: string, next: any) => {
      pre =
        pre +
        `
        ${next.renderMethod()}
      `;
      return pre;
    }, '');
  }
  handleRenderApiTsFileFeature() {
    const init = {
      title: 'Api',
      type: 'object',
      properties: {},
      definitions: {},
      additionalProperties: false,
      preDefine: '',
    };
    return this.state.resultQueue.reduce((pre, next) => {
      const tsQueue = (next as RequestPost).renderTsDefineResFeature();
      tsQueue.forEach((item) => {
        const { key, propertiesKey, definitionsKey } = item;
        pre.properties[key] = propertiesKey;
        pre.definitions[key] = definitionsKey;
        pre.preDefine = pre.preDefine + `${key},`;
      });

      const tsQueueReq = (next as RequestGet).renderTsDefineReqFeature();
      tsQueueReq.forEach((item) => {
        const { key, propertiesKey, definitionsKey } = item;
        pre.properties[key] = propertiesKey;
        pre.definitions[key] = definitionsKey;
        pre.preDefine = pre.preDefine + `${key},`;
      });
      return pre;
    }, init);
  }
  handleRenderApiTsFile() {
    const init = {
      title: 'Api',
      type: 'object',
      properties: {},
      definitions: {},
      additionalProperties: false,
      preDefine: '',
    };
    return this.state.resultQueue.reduce((pre, next) => {
      const req = next.state.tsReq;
      const res = next.state.tsRes;
      const titleReq = req.title;
      const titleRes = res.title;
      pre['definitions'][titleReq] = req;
      pre['properties'][titleReq] = {
        $ref: `#/definitions/${titleReq}`,
      };

      pre['definitions'][titleRes] = res;
      pre['properties'][titleRes] = {
        $ref: `#/definitions/${titleRes}`,
      };
      pre.preDefine = pre.preDefine + `${titleReq},${titleRes},`;
      return pre;
    }, init);
  }
  // 生成接口
  generateFile(outputPath = '') {
    const apiDefineStream = this.handleRenderApiTsFileFeature();
    // console.log(JSON.stringify(mock));
    // const apiDefineStream = this.handleRenderApiTsFile();
    const tsDefine = apiDefineStream.preDefine;
    delete apiDefineStream.preDefine;
    const definePath = './index.define';
    const tsPreDefineStream = renderTsPreImport(definePath, tsDefine);

    const apiStream =
      rendeFetchPre(this.state.fetchType) +
      tsPreDefineStream +
      this.handleRenderApiFile();
    createDir(outputPath).then(() => {
      fs.writeFileSync(
        `${outputPath}/index.ts`,
        prettier.format(apiStream, { semi: false, parser: 'typescript' })
      );
      // fs.writeFileSync(`${outputPath}/index.test.json`, prettier.format(JSON.stringify(apiDefineStream), { semi: false, parser: "json" }));

      compile(apiDefineStream as any, 'Api').then((ts) => {
        fs.writeFileSync(outputPath + `${definePath}.ts`, ts);
      });
      console.log(`成功生成【${this.state.createCount}】个接口`);
      console.log('文件生成成功~');
    });
  }
}

export default CreateApi;
