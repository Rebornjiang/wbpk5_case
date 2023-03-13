const AllConfigs = require('./configs/')
const AllEnvs = require('./configs/env')
const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')

const genConfigs = (env, argv) => {
  const context = { env, argv }
  // mode: webpack 打包模式；ienv(inject env)： 需要往代码中注入什么环境的变量；
  const { mode, env: ienv } = env

  const configs = merge(AllConfigs.common(context), AllConfigs[mode](context), {
    plugins: [new DefinePlugin(AllEnvs[ienv])]
  })
  return configs
}

module.exports = genConfigs
