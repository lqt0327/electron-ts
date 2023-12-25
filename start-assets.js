const express = require('express');
const multer = require('multer');
const path = require('path')
const app = express();
// app.use("*",function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   if (req.method === 'OPTIONS') {
//     res.send(200)
//   } else {
//     next()
//   }
// })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'electron_assets/images')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + ext)
  }
})

const upload = multer({ storage: storage })

// const upload = multer({ dest: 'electron_assets/images' }); // 设置上传文件的目标目录

app.post('/upload', upload.single('image'), (req, res) => {
  // 处理上传的文件
  const file = req.file;
  // 进行文件处理或保存等操作
  console.log(file,'???;;;')
  // 返回响应
  res.json({ status: {message: '文件上传成功', code: 0}, result: {url: `http://localhost:38435/${file.filename}`} });
});

// 将指定目录下的文件作为静态资源提供给客户端
app.use(express.static('electron_assets/images'));

// 其他路由和中间件...

// 启动服务器
app.listen(38435, () => {
  console.log('图片服务器已启动，http://localhost:38435');
})