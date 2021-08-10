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
        year: {
          name: 'year',
          in: 'query',
          required: true,
          description: '年',
          type: 'string',
        },
        month: {
          name: 'month',
          in: 'query',
          required: true,
          description: '月',
          type: 'string',
        },
        businessUnitId: {
          name: 'businessUnitId',
          in: 'query',
          required: false,
          description: '事业部ID',
          type: 'string',
        },
        salesAreaId: {
          name: 'salesAreaId',
          in: 'query',
          required: false,
          description: '销售大区ID',
          type: 'string',
        },
        salesDeptId: {
          name: 'salesDeptId',
          in: 'query',
          required: false,
          description: '销售省区ID',
          type: 'string',
        },
        salesGroupId: {
          name: 'salesGroupId',
          in: 'query',
          required: false,
          description: '销售城市群ID',
          type: 'string',
        },
        salesOfficeId: {
          name: 'salesOfficeId',
          in: 'query',
          required: false,
          description: '销售区县ID',
          type: 'string',
        },
      },
      required: ['year', 'month'],
    },
  },
};
compile(mySchema, 'MySchema', { unknownAny: false ,unreachableDefinitions: true}).then((ts) => {
  console.log(ts);
});
