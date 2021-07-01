const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = function (context, options) {
  const isProd = process.env.NODE_ENV === 'production';
  return {
    name: 'webpack-config',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            path: require.resolve('path-browserify'),
            http: false,
            fs: false,
            os: false
          }
        },
        module: {
          rules: [
            {
              test: /\.js/,
              include: /node_modules\/yaml\/browser/,
              type: 'javascript/auto'
            }
          ]
        },
        plugins: [
          new webpack.DefinePlugin({
            'process.versions.node': JSON.stringify(process.versions.node || '0.0.0')
          }),
          new NodePolyfillPlugin()
        ]
      };
    }
  };
};
