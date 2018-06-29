const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './server/index.ts',
  mode: 'development',
  module: {
  rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: 'tslint.json',
          failOnHint: false,
          tsConfigFile: 'tsconfig.json'
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist')
  }
}
