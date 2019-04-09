const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const args = require('yargs').argv;

const package = require('./package.json');
const isStyleEsxternal = args.env && args.env.styles;
const plugins = [
  new HTMLPlugin({
    title: package.name,
    template: './index.html',
    version: package.version
  }),

  new webpack.HotModuleReplacementPlugin()

];

if (isStyleEsxternal) {
  plugins.push(new CssPlugin({filename: 'main.css'}));
}

module.exports = {
  entry: './index.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'prod')
  },
  mode: 'development',
  
  module: {
    rules:[ 
      {  
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['syntax-dynamic-import']

          }
        }
      },

      {
        test: /\.s?css$/,
        use: [
          isStyleEsxternal ? 
          CssPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
   },

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'prod'),
    publicPath: '/',
    port: 1111,
    hot: true
   }
   
};