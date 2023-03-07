const http = require('http');
http.createServer((req,res)=>{
    console.log(res.headersSent?'响应头已经发送':'响应头未发送'); // false
    // 在end()结束响应前设置响应头
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.writeHead(200,'ok');
    console.log(res.headersSent?'响应头已经发送':'响应头未发送'); // true
    res.write('<p>Hello,World!</p>');
    res.write('<p>Hello,World!</p>');
    res.write('<p>Hello,World!</p>');
    // res.end()用于结束响应
    res.end('<h1>冷漠乌鸦</h1>');
}).listen(3000,'127.0.0.1',()=>{
    console.log('服务器已经启动');
});