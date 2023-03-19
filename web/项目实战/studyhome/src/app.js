// const express = require('express')
import express from 'express'
import config from './config'
import nunjucks from 'nunjucks'
import indexRouter from './../routes/index'

let app = express();

// 1.配置公共资源访问路径.
app.use(express.static(config.publicPath));

// 2.配置中间件
nunjucks.configure(config.viewsPath,{
    autoescape:true,
    express:app,
    noCache:true
});

// 3.挂载路由
app.use(indexRouter);

app.get('/',(req,res)=>{
    console.log(config.publicPath);
    res.end('<h1>Hello,NodeJS</h1>');
})

app.listen(3000,()=>{
    console.log('服务器运行成功...');
})