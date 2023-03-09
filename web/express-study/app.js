const express = require('express');

// 使用express创建web服务器
const app = express();

// 根据路由(路径)处理get和post请求
app.get('/',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h2>Hello,World!</h2>');
    res.end();
})

app.get('/china',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h2>你好,世界!</h2>');
    res.end();
})

// 开启监听
app.listen(3000,()=>{
    console.log("服务器已经启动");
})