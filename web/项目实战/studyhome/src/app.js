// 引入包
import express from 'express'
import config from './config'
import nunjucks from 'nunjucks'
// 引入路由
import indexRouter from './../routes/index'
import sowingRouter from './../routes/sowing'
// 引入中间件
import body_parser from './../middle_wares/body_parser'
import error_log from './../middle_wares/error_log'

let app = express();

// 1.配置公共资源访问路径.
app.use(express.static(config.publicPath));
// 1.配置公共资源访问路径.
app.use(express.static(config.dirPath));
// app.use(express.static(config.viewsPath));

// 2.配置中间件
nunjucks.configure(config.viewsPath,{
    autoescape:true,
    express:app,
    noCache:true
});

// 挂载请求统一前置处理器
app.use(body_parser);

// 3.挂载路由
app.use(indexRouter);
app.use(sowingRouter);

// 404页面配置
app.use((req,res)=>{
    res.render('404.html');
});
// 4.挂载全局错误日志中间件
app.use(error_log);



app.listen(3000,()=>{
    console.log('Web服务器运行成功...');
})