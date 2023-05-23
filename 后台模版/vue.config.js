module.exports = {
  devServer: {
    // 端口号
    port: 8080,
    // 配置不同的后台API地址
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'api': '@/api',
        'utils': '@/utils'
      }
    }
  }
}