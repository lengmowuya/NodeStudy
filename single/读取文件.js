// 1.引入文件系统模块
let fs = require('fs');

// 2.同步读取
let fd =  fs.readFileSync(__dirname+'/source/a.txt');
// console.log(fd);
// <Buffer e9 ab 98 e5 a4 84 e4 b8 8d e8 83 9c e5 af 92>
// console.log(fd.toString());
// 高处不胜寒



// 3.异步读取
// 异步方法都是通过一个回调函数来告诉后续处理结果
fs.readFile(__dirname+'/source/a.txt',(err,data)=>{
    if(!err){
        console.log(data);
        //<Buffer e9 ab 98 e5 a4 84 e4 b8 8d e8 83 9c e5 af 92>
        console.log(data.toString());
        //高处不胜寒
    }
});
