const req = require.context('.', false, /^((?!index).)*\.js$/);

req.keys().forEach((key) => {
  const hocName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[hocName] = req(key).default;
});
