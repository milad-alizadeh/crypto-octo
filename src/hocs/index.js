const req = require.context('.', true, /\.\/[^/]+\/index\.js$/);

req.keys().forEach((key) => {
  const hocName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[hocName] = req(key).default;
});
