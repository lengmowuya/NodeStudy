const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/',(req,res,next)=>{
    try{
        // 必然发生错误;
        const data = JSON.parse('{name:}');
        res.json(data);
    }catch(e){
        next(e);
    }
})

app.get('/a',(req,res,next)=>{
    res.end('<h1>Hello,World!</h1>');
})

app.get('/b',(req,res,next)=>{
    fs.readFile(path.join(__dirname,'ccc.log'),(err,data)=>{
        if(err){
            next(err);
        }
    })
});

// 统一的错误处理日志
app.use((err,req,res,next)=>{
    // console.log(err);
    const error_log = `
        =============================
        错误名: ${err.name}, \n
        错误信息:   ${err.message}, \n
        错误时间:   ${new Date()}, \n
        错误堆栈:   ${err.stack}, \n
        =============================
    `;
    fs.appendFile(path.join(__dirname,'error.log'),error_log,(err)=>{
        if(err) throw err;
        // console.log()
        res.writeHead(500,{'Content-Type':'text/html;charset=utf-8'});
        res.end('500 服务器内部发生错误!');
    });
})

app.listen(3000,()=>{
    console.log('running......');
})