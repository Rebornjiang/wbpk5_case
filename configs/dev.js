module.exports = () => {
  return {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      open: true,
      static: './dist',
      hot: true,
      compress: true,
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://10.0.7.12/api/tobosoft-toms',
          pathRewrite: { '^/api': '' },
          changeOrigin: true
        }
      }
    },
    cache: {
      type: 'filesystem'
    }
  }
}
