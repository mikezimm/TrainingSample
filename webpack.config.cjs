const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    myServices: path.resolve(__dirname, 'src/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: "/assets/",
    library: { type: "amd" },
    clean: true
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules']
  },
  module: {
    rules: [{
      test: /\.tsx|.ts?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            transpileOnly: true,
          },
        },
      ]
    },
    {
      test: /\.svg/,
      type: 'asset/resource'
    }]
  },
  externals: {
    "react": "React",
    "lodash-es": "lodash-es/*"
  },
  devServer: {
    compress: true,
    hot: true,
    port: 3000,
    static: {
      directory: resolveAppPath('app'),
      publicPath: '/',
    },
  }
};