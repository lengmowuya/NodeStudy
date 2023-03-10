let fs = require('fs');

// 1.创建读写流
let rs = fs.createReadStream(__dirname+'/source/示范.mp4');
let ws = fs.createWriteStream(__dirname+'/source/示范(3).mp4');

// 2.创建管道
rs.pipe(ws);