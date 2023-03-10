let fs = require('fs');

// 1.读取图片
fs.readFile(__dirname+'/source/flower.jpg',(err,data)=>{
    if(!err){
        // console.log(data);  // 二进制形式存在
        // console.log(data.toJSON());
        // 2.写入图片文件
        fs.writeFile(__dirname+'/source/flower(1).jpg',data,(err)=>{
            if(err) throw err;
            console.log('写入成功')
        })
    }
});

