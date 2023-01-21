/**
 * 集中导出api接口
 * modules.user.getUserInfo
 * 在main.js集中挂载，便于在.vue文件中直接使用
 * this.$api.user.getUserInfo
 */
const files = require.context('./modules', true, /\.js/)
const modules = {}
files.keys().forEach((key) => {
  if (key === './index.js') {
    return
  }
  const mk = key.replace(/(^\.\/|\.js$)/g, '')
  const m = files(key)
  modules[mk] = Object.keys(m).reduce((s, e) => {
    if (e !== 'default') {
      s[e] = m[e]
    }
    return s
  }, m.default || {})
})
export default modules
