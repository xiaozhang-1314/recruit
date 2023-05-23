const { defineConfig } = require("@vue/cli-service");
const mock = require("./mock");
module.exports = defineConfig({
  transpileDependencies: true,
  // 去除es-lint的提醒
  lintOnSave: false,
  devServer: {
    open: true,
    host: "127.0.0.1",
    proxy: {
      "/api": {
        target: "https://www.zhipin.com",
        pathRewrite: { "^/api": "" },
      },
      "/json": {
        target: "http://localhost:3000",
        pathRewrite: { "^/json": "" },
      },
    },
  },
});
