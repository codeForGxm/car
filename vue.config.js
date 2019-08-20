/*
 * @Descripttion: 配置文件
 * @version: 1.0.0
 * @Author: guoxiaomin
 * @Email: 1093556028@qq.com
 * @Date: 2019-08-20 10:38:02
 * @LastEditors: guoxiaomin
 * @LastEditTime: 2019-08-20 10:47:42
 */
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/car' : '/',
  // 输出文件目录
  outputDir: 'cardist',
  // webpack-dev-server 相关配置
  devServer: {
    port: 8900
    // proxy: {
    //   'api/kyzz/mock': {
    //     target: 'http://47.94.139.210:8901/mock',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api/kyzz/mock': ''
    //     },
    //     secure: false
    //   },
    //   'api/kyzz/dream': {
    //     target: 'http://47.94.139.210:8901/dream',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api/kyzz/dream': ''
    //     },
    //     secure: false
    //   }
    // }
  },
  lintOnSave: false
  // chainWebpack: config => {
  //   config.rule('js').include.add(/node_modules\/(dom7|swiper)\/.*/)
  // }
}
