const express = require('express');
const app = express();

// 将指定目录下的文件作为静态资源提供给客户端
app.use(express.static('electron_assets/images'));

// 其他路由和中间件...

// 启动服务器
app.listen(38435, () => {
  console.log('图片服务器已启动，http://localhost:38435');
})