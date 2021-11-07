var HtmlWebpackPlugin = require("html-webpack-plugin");
var selfConfig = require("./config.ts");
var template = require("./html.template.ts");
var { merge } = require("webpack-merge");
var common = require("./webpack.common.ts");

module.exports = merge(common, {
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      templateContent: template(selfConfig.production),
    }),
  ],

  mode: "production",
});
