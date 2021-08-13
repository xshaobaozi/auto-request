import { compile } from 'json-schema-to-typescript';

let mySchema22 = {
  title: 'Example Schema',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0,
    },
    hairColor: {
      enum: ['black', 'brown', 'blue'],
      type: 'string',
    },
  },
  additionalProperties: false,
  required: ['firstName', 'lastName'],
};
let mySchema = {
  title: 'Api',
  type: 'object',
  additionalProperties: false,
  properties: {
    ShopvisitstatisticsGetRequset: {
      $ref: '#/definitions/ShopvisitstatisticsGetRequset',
    },
  },
  definitions: {
    ShopvisitstatisticsGetRequset: {
      title: 'ShopvisitstatisticsGetRequset',
      additionalProperties: false,
      properties: {
        provinceCode: {
          type: 'string',
          description: '省份编码',
        },
        cityCode: {
          type: 'string',
          description: '城市编码',
        },
        countyCode: {
          type: 'string',
          description: '区县编码',
        },
        name: {
          type: 'string',
          description: '调研人员',
        },
        mobile: {
          type: 'string',
          description: '联系方式',
        },
        surveryId: {
          type: 'number',
          description: '调查计划id',
        },
        id: {
          type: 'number',
          description: '主键id',
        },
      },
      required: ['provinceCode', 'name', 'mobile', 'cityCode', 'countyCode', 'surveryId', 'id'],
    },
  },
};
compile(mySchema, 'MySchema', { unknownAny: false, unreachableDefinitions: true }).then((ts) => {
  console.log(ts);
});
