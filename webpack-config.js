const webpack = require('webpack');
module.exports = function (context, options) {
  const isProd = process.env.NODE_ENV === 'production';
  return {
    name: 'webpack-config',
    configureWebpack(config, isServer, utils) {
      if (!isServer) return {};
      return {
        plugins: [
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
          })
        ]
      };
    }
  };
};
