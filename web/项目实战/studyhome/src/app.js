// const express = require('express')
import express from 'express'
import config from './config'
import nunjucks from 'nunjucks'
import indexRouter from './../routes/index'
import sowingRouter from './../routes/sowing'

let app = express();

// 1.配置公共资源访问路径.
app.use(express.static(config.publicPath));
// app.use(express.static(config.viewsPath));

// 2.配置中间件
nunjucks.configure(config.viewsPath,{
    autoescape:true,
    express:app,
    noCache:true
});

// 3.挂载路由
app.use(indexRouter);
app.use(sowingRouter);
// 404页面配置
app.use((req,res)=>{
    res.render('404.html');
});



app.listen(3000,()=>{
    console.log('Web服务器运行成功...');
})