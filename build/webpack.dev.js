var selfConfig = require("./config.ts");
var template = require("./html.template.ts");
var common = require("./webpack.common.ts");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
var webpack = require("webpack");
var { merge } = require("webpack-merge");

module.exports = merge(common, {
  // source Map
  devtool: "cheap-module-eval-source-map",

  plugins: [
    new FriendlyErrorsPlugin(),

    new HtmlWebpackPlugin({
      filename: "index.html",
      templateContent: template(selfConfig.devlopment),
    }),
  ],

  mode: "development",
});
