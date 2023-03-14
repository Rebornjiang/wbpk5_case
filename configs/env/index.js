// 不同环境将往代码中注入不同的环境变量

module.exports = {
  prd: {
    BASE_URL: 'https:tomswork.com'
  },
  sit: {},
  dev: {
    BASE_URL: 'https:tomswork.com'
  }
}
