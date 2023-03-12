const express = require('express');
const util = require('./../util/Util')

const router = express.Router();
router.get('/',(req,res,next)=>{
    res.render('login');
});

// 用户登录请求
router.post('/',(req,res,next)=>{
    // 1.获取数据
    let userName = req.body.userName;
    let loginPwd = req.body.password;
    // 2.生成用户对象
    let regUser = {
        userName,
        loginPwd
    };
    // 3.验证用户是否存在
    if(!util.isExist(regUser)) {
        res.writeHead(403,{'content-type':'text/html;charset=utf-8'});
        res.end(`用户账号不存在,请去注册 <a href="/register">去注册页</a>`);
        return;
    };
    // util.users.push(regUser);
    res.redirect('/');
});

module.exports = router;