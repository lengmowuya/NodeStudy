let http = require('http');

let server = http.createServer((req,res)=>{
    res.end('Hello,World!');
})

server.listen(8080,'127.0.0.1',()=>{
    console.log('8080端口服务已启动');
    setTimeout(()=>{
        // 关闭服务器
        server.close();
    },5000)
});

// 监听服务器的关闭
server.on('close',()=>{
    console.log('服务器已经关闭!');
});