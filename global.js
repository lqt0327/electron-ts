/**
 * 通过webpack注入全局变量
 */
const path = require('path')
const cwd = process.cwd()

// 卡片的数据 本地保存目录
const QUICK_LINK_DATA_PATH = path.join(cwd, 'dist')

module.exports = {
  QUICK_LINK_DATA_PATH
}