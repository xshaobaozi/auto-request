const developmentEnvironments = ['development', 'test'];

const developmentPlugins = [require('@babel/plugin-transform-runtime')];

module.exports = (api) => {
  // See docs about api at https://babeljs.io/docs/en/config-files#apicache
  const development = api.env(developmentEnvironments);
  return {
    presets: [
      require('@babel/preset-env'),
      require('@babel/preset-typescript'),
    ],
    plugins: [],
  };
};
