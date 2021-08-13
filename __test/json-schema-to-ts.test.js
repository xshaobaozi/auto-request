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
        name: {
          type: 'string',
          description: '计划名称',
        },
        startTime: {
          type: 'string',
          description: '有效开始时间',
        },
        endTime: {
          type: 'string',
          description: '有效结束时间',
        },
        description: {
          type: 'string',
          description: '备注',
        },
        surveyRegions: {
          type: 'array',
          items: {
            $ref: '#/definitions/ShopvisitstatisticsGetRequsetSurveyRegionsItem',
          }
        },
      },
      required: ['name', 'startTime', 'endTime', 'description'],
    },
    ShopvisitstatisticsGetRequsetSurveyRegionsItem: {
      type: 'object',
      title: 'ShopvisitstatisticsGetRequsetSurveyRegionsItem',
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
          description: '区域编码',
        },
      },
    },
  },
};
compile(mySchema, 'MySchema', { unknownAny: false, unreachableDefinitions: true }).then((ts) => {
  console.log(ts);
});
