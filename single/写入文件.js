let fs = require('fs');

// 标准流程:先打开文件再写入
// 1.打开文件
let fd = fs.openSync(__dirname+'/source/b.txt','w');

// 2.同步写入内容
fs.writeFileSync(fd,'什么更痛,努力的痛还是悔恨的痛？');
// fs.writeFileSync(fd,'是悔恨的痛？');


// 3.保存并退出
fs.closeSync(fd);


// 4.后续操作