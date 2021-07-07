const camelcase = require('camelcase');

export const pascalCase = (str) => {
  return camelcase(str, { pascalCase: true });
};
export const pascalCaseReplaceString = (str) => {
  return camelcase(str.replace(/[\/|\{|\}|\?\$]/g, ''), { pascalCase: true });
};
export const PARAMS = 'Params';
export const RESPONSE = 'Response';
