const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') webpack5 废弃了
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const PurgeFromHtml = require('purgecss-from-html')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const glob = require('glob') // 文件匹配模式

module.exports = () => {
  return {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        // new OptimizeCssAssetsPlugin({}),
        new TerserPlugin({
          parallel: 4
        }),
        new CssMinimizerPlugin({
          parallel: 4 // os.cpus().length - 1
        }),
        // 对图片资源进行无损压缩
        new ImageMinimizerPlugin({
          minimizer: {
            // implementation: ImageMinimizerPlugin.squooshMinify, // 有损压缩

            // 以下是无损压缩代码 (包括options)
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                [
                  'svgo',
                  {
                    plugins: [
                      'preset-default',
                      'prefixIds',
                      {
                        name: 'sortAttrs',
                        params: {
                          xmlnsOrder: 'alphabetical'
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          }
        })
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name][contenthash:6].css'
      }),
      new PurgeCSSPlugin({
        extractors: [
          {
            extractor: PurgeFromHtml,
            extensions: ['html', 'vue']
          }
        ],
        paths: glob.sync('src/**/*.vue', { nodir: true }),
        safelist() {
          return {
            standard: ['body', 'html', /data-v-.*/, /class/]
          }
        }
      }),
      new BundleAnalyzerPlugin({
        // analyzerMode: 'disabled',  // 不启动展示打包报告的http服务器
        // generateStatsFile: true, // 是否生成stats.json文件
      })
    ]
  }
}
