const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-relay-dev',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
        ],
        plugins:  '@babel/plugin-proposal-class-properties',
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    fiiename: 'app.js'
  },
 
};
