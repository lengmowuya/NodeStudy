// 1.引入http模块
let http = require('http');

// 2.创建一个web服务器
let server = http.createServer((req,res)=>{
    res.end('Hello,World!');
})

// 3.监听服务
server.listen(8080,'127.0.0.1',()=>{
    console.log('8080端口服务已启动');
});

