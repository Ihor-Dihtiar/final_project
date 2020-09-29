const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const css = require('./webpack/css');
const webpack = require('webpack');
const sourceMap = require('./webpack/sourceMap');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const babel = require('./webpack/babel');
const favicon = require('./webpack/favicon');

const PATHS = {
  source: path.join(__dirname, 'source'),
  docs: path.join(__dirname, 'docs'),
};
const common = merge([
  {
    entry: {
      index: path.join(PATHS.source, 'pages', 'index', 'index.js'),
      portfolio: path.join(PATHS.source, 'pages', 'portfolio', 'portfolio.js'),
      about: path.join(PATHS.source, 'pages', 'about', 'about.js'),
      books: path.join(PATHS.source, 'pages', 'books', 'books.js'),
      blog: path.join(PATHS.source, 'pages', 'blog', 'blog.js'),
      contact: path.join(PATHS.source, 'pages', 'contact', 'contact.js'),
    },
    output: {
      path: PATHS.docs,
      filename: path.join('.', 'scripts', '[name].js'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: path.join(PATHS.source, 'pages', 'index', 'index.pug'),
      }),

      new HtmlWebpackPlugin({
        filename: 'portfolio.html',
        chunks: ['portfolio', 'common'],
        template: path.join(
          PATHS.source,
          'pages',
          'portfolio',
          'portfolio.pug'
        ),
      }),

      new HtmlWebpackPlugin({
        filename: 'about.html',
        chunks: ['about', 'common'],
        template: path.join(PATHS.source, 'pages', 'about', 'about.pug'),
      }),

      new HtmlWebpackPlugin({
        filename: 'books.html',
        chunks: ['books', 'common'],
        template: path.join(PATHS.source, 'pages', 'books', 'books.pug'),
      }),

      new HtmlWebpackPlugin({
        filename: 'blog.html',
        chunks: ['blog', 'common'],
        template: path.join(PATHS.source, 'pages', 'blog', 'blog.pug'),
      }),

      new HtmlWebpackPlugin({
        filename: 'contact.html',
        chunks: ['contact', 'common'],
        template: path.join(PATHS.source, 'pages', 'contact', 'contact.pug'),
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            minChunks: 2,
            chunks: 'all',
            name: 'common',
            priority: 10,
            enforce: true,
          },
        },
      },
    },
  },
  pug(),
  images(),
  fonts(),
  babel(),
]);

module.exports = function (env, argv) {
  if (argv.mode === 'production') {
    return merge([common, extractCSS(), favicon()]);
  }
  if (argv.mode === 'development') {
    return merge([common, devserver(), sass(), css(), favicon(), sourceMap()]);
  }
};
