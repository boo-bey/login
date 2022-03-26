const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,//开启动项目后自动打开
    host:'localhost',//配置默认端口
    port:8088,
  }
})
