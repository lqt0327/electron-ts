const { watch, series } = require('gulp');
const path = require("path")
const rootPath = process.cwd()

module.exports = (callback) => {
  function clean(cb) {
    // body omitted
    cb();
  }
  
  function javascript(cb) {
    callback()
    // execSync('pm2 restart index')
    // body omitted
    cb();
  }
  
  // 或者关联一个任务组合
  watch('src/**', { queue: true, ignoreInitial: false, cwd: rootPath }, series(clean, javascript));
  // watch('electron_view_ts/build/**', { queue: true, ignoreInitial: false, cwd: rootPath }, javascript)
}