let http = require('http');

let server = http.createServer((req,res)=>{
    res.end('Hello,World!');
})

server.listen(8080,'127.0.0.1',()=>{
    console.log('8080端口服务已启动');
});

// 监听服务器的错误事件
server.on('error',(e)=>{
    console.log(e.code);
    console.log('Error:服务器发生错误!');
})

// 设置超时时间
server.setTimeout(5000,()=>{
    console.log('连接已经超时')
});