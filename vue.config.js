const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 32 // 基准值
})

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}
