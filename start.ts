const concurrently = require('concurrently')
const path = require('path')
const fs = require('fs')

const { result } = concurrently(
    [
        {
            command: 'npm run start',
            name: 'view',
            cwd: path.join(__dirname, 'electron_view_ts'),
        },
    ],
    {
      prefix: 'name',
      killOthers: ['failure', 'success'],
      restartTries: 3,
    }
)

result.then((res)=>{
    console.log(res,'????[[[[')
},(err)=>{
    console.log(err,'????;;;;')
})

function preview() {
    const { result } = concurrently(
        [
            {
                command: 'npm run preview',
                name: 'preview',
                cwd: path.join(__dirname, 'electron_view_ts'),
            }
        ],
        {
          prefix: 'name',
          killOthers: ['failure', 'success'],
          restartTries: 3,
        }
    )
}


function start() {
    const { result } = concurrently(
        [
            {
                command: 'electron-forge start',
                name: 'electron',
            }
        ],
        {
          prefix: 'name',
          killOthers: ['failure', 'success'],
          restartTries: 3,
        }
    )
}

let timer = setInterval(()=>{
    const pathname = path.join(__dirname,'electron_view_ts/build/index.html')
    try {
        const has = fs.statSync(pathname).isFile()
        console.log(`完成查询：SUCCESS`)
        preview()
        start()
        clearInterval(timer)
    }catch(err) {
        console.log(`重新查询：${pathname}文件未找到`)
    }
},1000)