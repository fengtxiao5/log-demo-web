const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/log',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@src', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@assets', resolve('src/assets'))
      .set('@hooks', resolve('src/hooks'))
      .set('@store', resolve('src/store'))
      .set('@network', resolve('src/network'))
      .set('@components', resolve('src/components'))
  },
  devServer: {
    port: 8000, // 启动端口号
  },
})
