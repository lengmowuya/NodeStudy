const http = require('http');
const queryString = require('querystring');
const util = require('util');
http.createServer((req,res)=>{
    console.log(req.method);
    let postData = {};
    // post请求得做事件监听
    req.on('data',(data)=>{
        postData += data;
        console.log(postData);
    })
    // 监听数据接收完毕
    req.on('end',()=>{
        postData = queryString.parse(postData);
        console.log(util.inspect(postData));
        res.end('数据接收成功!');
    })
}).listen(3000,'127.0.0.1');