const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  return {
    mode: 'production',
    optimization: {
      minimize: false
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name][contenthash:6].css'
      })
    ]
  }
}
