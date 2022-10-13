// const { Output } = require("webpack-chain");

module.exports = {
  publicPath: './',// 代表相对路径
  outputDir:'./test',//输出的目录
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  

};
