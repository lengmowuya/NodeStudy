let fs = require('fs');

let rs = fs.createReadStream(__dirname+'/source/示范.mp4');
let ws = fs.createWriteStream(__dirname+'/source/示范(4).mp4');


rs.on('data',(data)=>{
    let flag = ws.write(data);
    console.log(flag);
    // 根据flag判断是否结束
    if(!flag){
        // 暂停操作
        rs.pause();
    }
});

ws.on('drain',()=>{
    // 继续读取流
    rs.resume();
})

rs.on('end',()=>{
    ws.end();
})