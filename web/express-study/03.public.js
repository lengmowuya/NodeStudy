const express = require('express');
const path = require('path');

const app = express();

// 中间件访问静态资源
app.use(express.static(path.join(__dirname,'static')));
// app.get((req,res,next)=>{
    
// })

app.listen(3000,()=>{
    console.log('服务器已经启动');
});