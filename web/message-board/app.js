const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const moment = require('moment');
const path = require('path');
const ejs = require('ejs');

let app = express();


// 中间件注册模板引擎
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// 设置用户表单提交数据的接收中间件,所有提交的信息都会保留在req.body中
app.use(bodyParser.urlencoded({extended:false}));

// 设置全局变量,运转于服务器的整个生命周期
let entries = [];
app.locals.entries = entries;

// 首页
app.get('/',(req,res)=>{
    res.render('index');
});

// 发布页面
app.get('/new',(req,res)=>{
    res.render('new');
});
// 数据提交
app.post('/new',(req,res)=>{
    console.log(req.body);
    // 判断提交数据合法性
    if(!req.body.title || !req.body.content){
        res.status(400).send('留言内容不合法');
        return;
    }
    // 保留用户留言数据
    entries.push({
        title:req.body.title,
        content:req.body.content,
        published:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    });
    
    // 回到主界面
    res.redirect('/');
})

// 捕获404页面
app.use((req,res)=>{
    res.status(404).render('404.ejs');
})

app.listen(3000,()=>{
    console.log('服务器已经启动');
});