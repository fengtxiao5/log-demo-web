// lintstagedrc.js
module.exports = {
  'src/**/*.js': [
    // 匹配.js文件一下命令
    'eslint --fix', // 执行eslint进行扫描进行fix
    'prettier --write', //执行prettier脚本,对代码镜像格式化
    'git add', //上述两项任务完成后对代码重新add。
  ],
  'src/**/*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write', 'git add'],
  'src/**/*.scss': ['stylelint --syntax=scss --fix', 'prettier --write', 'git add'],
}
