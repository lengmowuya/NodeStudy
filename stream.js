// 1.创建读写流
let fs = require('fs');
let rs = fs.createReadStream(__dirname+'/source/示范.mp4');
let ws = fs.createWriteStream(__dirname+'/source/示范(2).mp4')

// 2.监听流的打开
rs.once('open',()=>{
    console.log("读取流已经打开");
})

ws.once('open',()=>{
    console.log("写入流已经打开");
})

// 3.监听data
rs.on('data',(data)=>{
    // console.log(data);
    // 会把数据进行切割,传输更快
    ws.write(data);
})

// 4.监听流的关闭
rs.once('end',()=>{
    console.log('读入数据已完成');
})

rs.once('close',()=>{
    console.log('读入流通道已关闭');
})