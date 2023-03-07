const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
http.createServer((req,res)=>{
    // 1.获取url的路径
    let pathUrl = url.parse(req.url);
    let pathName = pathUrl.pathname;
    console.log(pathName);
    // res.end('冷漠乌鸦');

    // 2.判断
    if(pathName === '/index'){
        fs.readFile(path.join(__dirname,'page/index.html'),(err,data)=>{
            if(err) throw err;
            res.end(data);
        });
    }else if(pathName === '/css/index.css'){
        fs.readFile(path.join(__dirname,'static/css/index.css'),(err,data)=>{
            if(err) throw err;
            res.end(data);
        });
    }else if(pathName === '/images/flower.jpg'){
        fs.readFile(path.join(__dirname,'static/images/flower.jpg'),(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'image/jpg;charset=utf-8'});
            res.end(data);
        });
    }else{
        res.writeHead(404,{'content-type':'text/html;charset=utf-8'});
        res.end('<h1>404,访问的页面不存在!</h1>')
    }
}).listen(3000);