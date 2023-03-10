let site = "www.lengmo.com";
let log = ()=>{
    console.log("这是我的个人网站！",site);
};

// log();

// 暴露模块
exports.site = site;
exports.log = log;