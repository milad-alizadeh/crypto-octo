const baseConfig = require('../../webpack.config');
const path = require('path');

module.exports = (storybookBaseConfig) => {
  let obj = Object.assign({}, storybookBaseConfig, {
    entry: Object.assign({}, storybookBaseConfig.entry, {
      preview: ['babel-polyfill'].concat(storybookBaseConfig.entry.preview)
    }),
    resolve: Object.assign({}, storybookBaseConfig.resolve, {
      alias: {
        components: path.resolve(__dirname, '../../src/components/'),
        containers: path.resolve(__dirname, '../../src/containers/'),
        store: path.resolve(__dirname, '../../src/store/'),
        config: path.resolve(__dirname, '../../src/config')
      }
    }),
    module: Object.assign({}, storybookBaseConfig.module, {
      rules: storybookBaseConfig.module.rules.concat(baseConfig.module.rules.slice(1))
    })
  });

  console.log(obj);

  return obj;
};
