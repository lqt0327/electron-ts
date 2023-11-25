/**
 * 通过webpack注入全局变量
 */
const path = require('path')
const cwd = process.cwd()

// 卡片的数据 本地保存目录
const QUICK_LINK_DATA_PATH = path.join(cwd, 'dist')

const TOAST_ROOR_PATH = path.join(cwd, 'dist/toast')
const CAPTURE_ROOT_PATH = path.join(cwd, 'dist/capture')

module.exports = {
  QUICK_LINK_DATA_PATH: JSON.stringify(QUICK_LINK_DATA_PATH),
  TOAST_ROOR_PATH: JSON.stringify(TOAST_ROOR_PATH),
  CAPTURE_ROOT_PATH: JSON.stringify(CAPTURE_ROOT_PATH)
}