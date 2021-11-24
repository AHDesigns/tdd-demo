/* eslint-disable no-undef,import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = process.cwd();

module.exports = (_, options = {}) => ({
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser'],
  },
  entry: path.resolve(rootPath, 'src', 'index.tsx'),
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'last 2 Chrome versions' }],
              [
                '@babel/preset-react',
                {
                  development: options.mode === 'development',
                },
              ],
              '@babel/preset-typescript',
            ],
            // needed else webpack 4 itself chokes on the syntax
            plugins: [
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator',
              'babel-plugin-styled-components',
            ],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(rootPath, 'build'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 4000,
    publicPath: '/',
  },
  output: {
    path: path.resolve(rootPath, 'build'),
    filename: 'js/[name].js',
    publicPath: './',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pancake',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0',
      },
    }),
  ],
});
