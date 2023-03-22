import {PluginBase, namedHookWithTaskFn} from '@electron-forge/plugin-base'
import path from 'path';
import fse from 'fs-extra';
const cwd = process.cwd()

function iterationStep(dir) {
  if(fse.statSync(dir).isFile()) {
      return dir
  }
  let arr = []
  let res = []
  let file = fse.readdirSync(dir,{encoding: 'utf8'})
  while(file.length || arr.length) {
      for(let i = 0; i < file.length; i++) {
          const pathname = path.resolve(dir, file[i])
          if(fse.statSync(pathname).isDirectory()) {
              arr.push(pathname)
          }else if (fse.statSync(pathname).isFile()) {
              res.push(pathname)
          }
      }
      dir = arr.pop()
      file = dir ? fse.readdirSync(dir,{encoding: 'utf8'}) : []
  }
  return res
}

export default class BuildPlugin extends PluginBase {
  name = 'build';
  constructor(c) {
    super(c);

    this.getHooks = this.getHooks.bind(this);
  }

  getHooks() {
    return {
      prePackage: [
        namedHookWithTaskFn(this.prePackage, '你好')  
      ],
    };
  }
  
  prePackage() {
    let out = path.join(cwd, '.webpack/renderer/main_window')
    let target = path.join(cwd, 'electron_view_ts/build')
    let fileList = iterationStep(target)
    for(let v of fileList) {
      let p = v.split('build')[1]
      let o = path.join(out, p)
      fse.copySync(v, o)
    }
    // fse.writeFileSync(pathname, '你好呀', {encoding: 'utf8'})
    console.log('running prePackage hook----000000');
  }
}