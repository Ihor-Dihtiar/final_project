const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const pug = require("./webpack/pug");
const devserver = require("./webpack/devserver");
const sass = require("./webpack/sass");
const extractCSS = require("./webpack/css.extract");
const css = require("./webpack/css");
const webpack = require("webpack");
const sourceMap = require("./webpack/sourceMap");
const images = require("./webpack/images");
const fonts = require("./webpack/fonts");
const babel = require("./webpack/babel");

const PATHS = {
  source: path.join(__dirname, "source"),
  build: path.join(__dirname, "build"),
};
const common = merge([
  {
    entry: {
      index: path.join(PATHS.source, "pages", "index", "index.js"),
      test: path.join(PATHS.source, "pages", "test", "test.js"),
    },
    output: {
      path: PATHS.build,
      filename: path.join(".", "scripts", "[name].js"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        chunks: ["index", "common"],
        template: path.join(PATHS.source, "pages", "index", "index.pug"),
      }),

      new HtmlWebpackPlugin({
        filename: "test.html",
        chunks: ["test", "common"],
        template: path.join(PATHS.source, "pages", "test", "test.pug"),
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            minChunks: 2,
            chunks: "all",
            name: "common",
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
  if (argv.mode === "production") {
    return merge([common, extractCSS()]);
  }
  if (argv.mode === "development") {
    return merge([common, devserver(), sass(), css(), sourceMap()]);
  }
};
