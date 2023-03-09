const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use((req,res,next)=>{
    const log = `
    --------------------------
    1)请求的方式:${req.method},\n
    1)请求的路径:${req.url},\n
    1)请求的时间:${new Date()},\n
    --------------------------
    `
    fs.appendFile(path.join(__dirname,'req.log'),log,(err)=>{
        if(err) throw err;
        next();
    });
});

app.get('/',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h2>你好,世界</h2>');;
    res.end();
})

app.listen(3000,()=>{
    console.log('服务器已经启动!');
})