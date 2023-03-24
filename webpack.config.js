const AllConfigs = require('./configs/')
const AllEnvs = require('./configs/env')
const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')

// 打包速度分析
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const smp = new SpeedMeasurePlugin()

const genConfigs = (env, argv) => {
  const context = { env, argv }
  // mode: webpack 打包模式；ienv(inject env)： 需要往代码中注入什么环境的变量；
  const { mode, env: ienv } = env

  const configs = merge(
    AllConfigs.common(context),
    AllConfigs[mode ?? 'development'](context),
    {
      plugins: [new DefinePlugin(AllEnvs[ienv ?? 'dev'])]
    }
  )
  // return smp.wrap(configs)
  return configs
}

module.exports = genConfigs
