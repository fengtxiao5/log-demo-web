const { src } = require('gulp')
const sftp = require('gulp-sftp-up4')
const ASSET_PATH = '/dist/'
const FTP_VM_CONFIG = {
  remotePath: '/home/hsiar/hsiar-green/html/cicd/', //部署到服务器的路径
  host: '10.20.47.249', //ip地址
  port: 22, //端口
  user: 'root', //帐号
  pass: 'ERTzxc@#$123', //密码
}

function upload(callback) {
  console.log('## SFTP 正在上传构建代码到虚拟机测试服务器上......')
  return src(`.${ASSET_PATH}**`).pipe(sftp(Object.assign(FTP_VM_CONFIG, { callback })))
}

exports.default = upload
