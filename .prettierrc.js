module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  tabWidth: 2,
  useTabs: false,
  // eslintIntegration: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  bracketSpacing: true,
  singleQuote: true, // 使用单引号
  printWidth: 100, // 超过最大值换行
  htmlWhitespaceSensitivity: 'ignore',
  semi: true, // 结尾不用分号
  disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
};
