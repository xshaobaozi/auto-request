import fs from 'fs';
import prettier from 'prettier';
import { compile } from 'json-schema-to-typescript';
import { readFileSync, analysiAxiosRules, analysiYapiRules, rendeFetchPre } from './utils';
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
    this.state.methodsQueue = this.analysiRules(this.state.inputStream);
    this.state.resultQueue = this.generateMethod(this.state.methodsQueue);

  }
  // 生成接口类型
  generateMethod(queue: apiQueueParams[]) {
    return queue.map(({ method, url, schema }) => {
      const isPost = ['post'].includes(method);
      if (isPost) {
        return new RequestPost(method, url, schema, this.state.fetchType);
      }
      return new RequestGet(method, url, schema, this.state.fetchType);
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
    };
    return this.state.resultQueue.reduce(
      (pre, next) => {
        const schema = next.renderTsDefine();
        const title = schema.title;
        // const prototypeNameRes = next.handleCteateParamsName('RESPONSE');
        pre['properties'][title] = {
          $ref: `#/definitions/${title}`,
        };
        // pre['properties'][prototypeNameRes] = {
        //   $ref: `#/definitions/${prototypeNameRes}`,
        // };
        pre['definitions'][title] = schema;
        // pre['definitions'][prototypeNameRes] = next.handleGetResponse();
        return pre;
      }, init)
  }
  // 生成接口
  generateFile(outputPath = '') {
    const apiStream = rendeFetchPre(this.state.fetchType) + this.handleRenderApiFile();

    fs.writeFileSync(`${outputPath}/index.ts`, prettier.format(apiStream));
    const apiDefineStream = this.handleRenderApiTsFile();
    compile(apiDefineStream, 'Api').then((ts) => {
      fs.writeFileSync(outputPath + '/index.define.ts', ts);
    });
    console.log('文件生成成功~');
  }
}

export default CreateApi;
