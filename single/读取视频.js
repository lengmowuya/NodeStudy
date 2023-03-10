let fs = require('fs');

// 1.读取视频
fs.readFile(__dirname+'/source/示范.mp4',(err,data)=>{
    if(!err){
        // 2.写入视频
        fs.writeFile(__dirname+'/source/示范(1).mp4',data,(err)=>{
            if(err) throw err;
            console.log('写入成功')
        })
    }
});

