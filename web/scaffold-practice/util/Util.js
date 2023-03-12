// 全局存放用户信息
let users = [];
exports.users = users;
// 验证用户账号是否被注册
exports.isReg = (userObj)=>{
    // 本来想使用forEach的,但是forEach不能跳出,那么以后用户数量越来越多会越来越浪费性能.
    for(let i = 0;i<users.length;i++){
        if(users[i].userName == userObj.userName){
            return true;
        }
    }
    return false;
};
// 查找用户并返回
exports.isExist = (userObj)=>{
    // 本来想使用forEach的,但是forEach不能跳出,那么以后用户数量越来越多会越来越浪费性能.
    for(let i = 0;i<users.length;i++){
        if(users[i].userName == userObj.userName){
            return users[i];
        }
    }
    return undefined;
};