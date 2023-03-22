const webpack = require("webpack");
const path = require('path')
const logUtil = require('./util-log')
const gulpFunc = require('./gulpfile')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const cwd = process.cwd()

const finalWebpackConfig = {
  mode: "development",
  target: "node",
  context: path.join(__dirname, "src"),
  entry: {
    index: [
      './index.ts'
    ],
    preload: [
      './preload.ts'
    ]
  },
  externals: { electron: 'commonjs electron' },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/', // 服务器脚本会用到
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
              loader: 'babel-loader',
              options: {
                  cacheDirectory: true,
              }
          }
        ],
        exclude: /node_modules/,
      },
      { 
        test: /\.tsx?$/, 
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {configFile: path.join(cwd, 'tsconfig.json')}
    })
  ]
}
gulpFunc(()=>{
  webpack(finalWebpackConfig, async (err, stats) => {
    if (err) {
        logUtil.error("Compilication failed.")
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        process.exit(1);
        return;
    }
    const info = stats.toJson();
    if (stats.hasErrors()) {
        let hasBuildError = false;
  
        // 只要有一个不是来自 uglify 的问题
        for (let i = 0, len = info.errors.length; i < len; i++) {
            if (!/from\s*UglifyJs/i.test(info.errors[i])) {
                hasBuildError = true;
                break;
            }
        }
        if (hasBuildError) {
            logUtil.error("Compilication failed.")
            console.log(info.errors);
  
            process.exit(1);
        }
    }
    if (stats.hasWarnings()) {
        // logUtil.warn(info.warnings)
    }
  
    logUtil.pass("Compilication done.")
  
    // logUtil.scaffold('[0] http://h5.dev.weidian.com:3023/pages')
    // logUtil.scaffold('建议将 localhost 绑定到域名 h5.dev.weidian.com, 防止接口请求时出现跨域问题\n')
  })
})