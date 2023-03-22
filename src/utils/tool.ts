import fs from 'fs'
import path from 'path'

/**
 * 遍历目录--递归
 * @param {*} dir 
 * @param {*} callback 
 * @returns 
 */
function travel(dir: string, callback: Function) {
    let file = fs.readdirSync(dir,{encoding: 'utf8'})
    for(let i = 0; i < file.length; i++) {
        const pathname = path.join(dir, file[i])
        if(fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback)
        }else if (fs.statSync(pathname).isFile()) {
            callback(i === file.length - 1, pathname)
        }
    }
}

// 如何判断递归函数执行完成 ？  监听结果数组变化 / 迭代？

// 迭代   先把文件夹都存入数组，再逐级遍历
/**
 * 遍历目录--迭代
 * 获取当前目录下的文件
 * @param {*} dir 
 */
function iterationStep(dir: string) {
    if(fs.statSync(dir).isFile()) {
        return dir
    }
    let arr = []
    let res = []
    let file = fs.readdirSync(dir,{encoding: 'utf8'})
    while(file.length || arr.length) {
        for(let i = 0; i < file.length; i++) {
            const pathname = path.resolve(dir, file[i])
            if(fs.statSync(pathname).isDirectory()) {
                arr.push(pathname)
            }else if (fs.statSync(pathname).isFile()) {
                res.push(pathname)
            }
        }
        dir = arr.pop()
        file = dir ? fs.readdirSync(dir,{encoding: 'utf8'}) : []
    }
    return res
}

function encodeByBase64(str: string) {
    return Buffer.from(str).toString('base64');
}
  
function decodeByBase64(str: string) {
    return Buffer.from(str,'base64').toString()
}

export {
    travel,
    iterationStep,
    encodeByBase64,
    decodeByBase64
}