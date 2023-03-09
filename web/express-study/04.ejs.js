const express = require('express');
const path = require('path');
// const ejs = require('ejs');
const app = express();

// 中间件访问静态资源
app.use(express.static(path.join(__dirname,'static')));

// 中间件注册模板引擎
app.set('views',path.join(__dirname,'pages'));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    const dataJson = {
        "lists":[
            {"title":"官方文件透露:中央新组建一个委员会热","count":34523,"up":1},
            {"title":"中国女性的互联网之路","count":34523,"up":1},
            {"title":"夫妻200万造别墅找陌生人抱团养老","count":34523,"up":1},
            {"title":"中国妇女报：妇女节不是什么女神节热","count":34523,"up":1},
            {"title":"公司规定老板生理期全体放假3天","count":34523,"up":0},
            {"title":"今天妇女节，晒晒我和ta的合影","count":34523,"up":0},
            {"title":"白宫：不希望冲突 尊重一个中国政策热","count":34523,"up":1},
            {"title":"您购物车的商品打折了！","count":34523,"up":1},
            {"title":"全国两会 3只“老虎”被公开点名","count":34523,"up":0}
        ],
        "source":"百度热搜-baidu.com"
    };
    res.render('index',dataJson);
});

app.listen(3000,()=>{
    console.log('服务器已经启动');
});