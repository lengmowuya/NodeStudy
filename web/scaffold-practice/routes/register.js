const express = require('express');
const router = express.Router();
let util = require('./../util/Util');

router.get('/',(req,res,next)=>{
    res.render('register');
});

// 用户注册请求
router.post('/',(req,res,next)=>{
    // 1.获取数据
    let userName = req.body.userName;
    let loginPwd = req.body.password;
    // 2.生成用户对象
    let regUser = {
        userName,
        loginPwd
    };
    // 3.验证用户是否已经注册
    if(util.isReg(regUser)) {

        res.writeHead(403,{'content-type':'text/html;charset=utf-8'});
        res.end(`当前用户已经注册,请去登录! <a href="/login">去登录页</a>`);
        return;
    };
    util.users.push(regUser);
    res.redirect('/login');
});

module.exports = router;