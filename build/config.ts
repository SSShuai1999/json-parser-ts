/**
 * 供 html 模板使用，将一些配置暴露
 *
 * title                  标题
 * scriptMap              需要引入的 script 路径
 */

module.exports = {
  // 开发环境
  devlopment: {
    title: "dev",

    scriptMap: [
    ],
  },

  // 生产环境
  production: {
    title: "prod",

    scriptMap: [],
  },
};
