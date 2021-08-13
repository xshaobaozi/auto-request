import * as fs from 'fs';
import * as prettier from 'prettier';
import { compile } from 'json-schema-to-typescript';
import { readFileSync, analysiAxiosRules, analysiYapiRules, rendeFetchPre, renderTsPreImport } from './utils';
import RequestGet from './common/requestGet';
import RequestPost from './common/requestPost';
import {
  apiQueueParams,
  CreateApiStateType,
} from './define';

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
class CreateApi {
  state: CreateApiState;
  constructor(input: string, fetchType: CreateApiStateType = CreateApiStateType.AXIOS, options = { host: '' }) {
    if (![CreateApiStateType.AXIOS, CreateApiStateType.TARO].includes(fetchType)) {
      throw `${fetchType}字段出错, 必须是${CreateApiStateType.AXIOS}|${CreateApiStateType.TARO}`;
    }
    this.state = {
      input: input,
      fetchType: fetchType,
      inputStream: '',
      options: options,
      methodsQueue: [],
      resultQueue: [],
    };
    this.state.inputStream = readFileSync(this.state.input);
    this.state.options.host = this.state.options.host ?
      this.state.options.host :
      JSON.parse(this.state.inputStream).host || '';
    console.log(`=====host:[${this.state.options.host}]=====\n`)
    this.state.methodsQueue = this.analysiRules(this.state.inputStream);
    this.state.resultQueue = this.generateMethod(this.state.methodsQueue);

  }
  // 生成接口类型
  generateMethod(queue: apiQueueParams[]) {
    return queue.map(({ method, url, schema }) => {
      if (['post', 'put'].includes(method)) {
        return new RequestPost(method, url, schema, this.state.fetchType, this.state.options.host);
      }
      return new RequestGet(method, url, schema, this.state.fetchType, this.state.options.host);
    })
  }
  // 解析规则
  analysiRules(stream) {
    if (this.state.fetchType === CreateApiStateType.AXIOS) {
      return analysiAxiosRules(stream);
    }
    return analysiYapiRules(stream);
  }
  // 生成接口文件
  handleRenderApiFile() {
    return this.state.resultQueue.reduce((pre, next) => {
      pre = pre + `
        ${next.renderMethod()}
      `
      return pre;
    }, '');
  }
  handleRenderApiTsFile() {
    const init = {
      title: 'Api',
      type: 'object',
      properties: {},
      definitions: {},
      additionalProperties: false,
      preDefine: ''
    };
    return this.state.resultQueue.reduce(
      (pre, next) => {
        const req = next.renderTsDefineReq();
        const res = next.renderTsDefineRes();
        const titleReq = req.title;
        const titleRes = res.title;
        pre['properties'][titleReq] = {
          $ref: `#/definitions/${titleReq}`,
        };
        pre['properties'][titleRes] = {
          $ref: `#/definitions/${titleRes}`,
        };

        pre['definitions'][titleReq] = req;
        pre['definitions'][titleRes] = res;
        pre.preDefine = pre.preDefine + `${titleReq},${titleRes},`
        return pre;
      }, init)
  }
  // 生成接口
  generateFile(outputPath = '') {
    const apiDefineStream = this.handleRenderApiTsFile();
    const tsDefine = apiDefineStream.preDefine;
    delete apiDefineStream.preDefine;
    const definePath = './index.define';
    const tsPreDefineStream = renderTsPreImport(definePath, tsDefine);

    const apiStream = rendeFetchPre(this.state.fetchType) + tsPreDefineStream + this.handleRenderApiFile();

    fs.writeFileSync(`${outputPath}/index.ts`, prettier.format(apiStream, { semi: false, parser: "typescript" }));

    compile(apiDefineStream, 'Api').then((ts) => {
      fs.writeFileSync(outputPath + `${definePath}.ts`, ts);
    });
    console.log('文件生成成功~');
  }
}

export default CreateApi;
