// 合并所有配置导出
const common = require('./common')
const development = require('./dev')
const production = require('./prd')

module.exports = {
  common,
  development,
  production
}
