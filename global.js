const path = require('path')
const cwd = process.cwd()

// 卡片的json数据 本地保存目录
const QUICK_LINK_DATA_PATH = path.join(cwd, 'dist')

module.exports = {
  QUICK_LINK_DATA_PATH
}