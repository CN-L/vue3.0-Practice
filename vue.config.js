const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // host: 'localhost',
    port: '8888',
    https: true,
    proxy: {
      '/dog/api': {
        target: 'https://dog.ceo',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/dog/api': '/api'
        }
      },
      '/cat/api': {
        target: 'https://api.thecatapi.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/cat/api': '/v1'
        }
      }
    },
  }
})
