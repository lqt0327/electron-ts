const concurrently = require('concurrently')
const path = require('path')
const fs = require('fs')
const logUtil = require('./util-log')

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
      prefixColors: ["greenBright"]
    }
)

result.then((res)=>{
    process.exit();
},(err)=>{
    process.exit();
})

function preview() {
    const { result } = concurrently(
        [
            {
                command: 'node webpack.config.js',
                name: 'webpack',
            }
        ],
        {
            prefix: 'name',
            killOthers: ['failure', 'success'],
            restartTries: 3,
            prefixColors: ["cyanBright"]
        }
    )
    result.then((res)=>{
        process.exit();
    },(err)=>{
        process.exit();
    })
}


function start() {
    const { result } = concurrently(
        [
            {
                command: 'electron .',
                name: 'electron',
                cwd: path.join(__dirname, 'dist'),
            }
        ],
        {
          prefix: 'name',
          killOthers: ['failure', 'success'],
          restartTries: 3,
          prefixColors: ["yellowBright"]
        }
    )
    result.then((res)=>{
        process.exit();
    },(err)=>{
        process.exit();
    })
}

let timer = setInterval(()=>{
    const pathname = path.join(__dirname,'dist/view/index.html')
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