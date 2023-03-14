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
    // console.log(req.body);
    // 2.生成用户对象
    let regUser = {
        userName,
        loginPwd
    };
    // 3.验证用户是否存在
    let userObj = util.isExist(regUser);
    if(userObj) {
        // 4.判断密码是否正确
        console.log(userObj.loginPwd,regUser.loginPwd);
        if(userObj.loginPwd===regUser.loginPwd){
            res.redirect('/');
        }else{
            res.writeHead(403,{'content-type':'text/html;charset=utf-8'});
            res.end(`您的密码输入错误! <a href="/login">重试登录</a>`);
        }
    }else{
        res.writeHead(403,{'content-type':'text/html;charset=utf-8'});
        res.end(`用户账号不存在,请去注册 <a href="/register">去注册页</a>`);
    }
    
    // util.users.push(regUser);
});

module.exports = router;