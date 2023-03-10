let fs = require('fs');

fs.open(__dirname+'/source/c.txt','a',(err,fd)=>{
    if(!err){
        // 2.写入文件
        fs.writeFile(fd,'三人行，必有我师焉！'+Date.now()+'\n',(err)=>{
            if(!err){
                console.log('写入成功');
            }else{
                throw err;
            }
        })

        // 无论成功还是失败,都要关闭文件
        fs.close(fd,(err)=>{
            if(!err){
                console.log("文件已经保存并关闭");
            }
        })
    }
})
// 后续操作
console.log('后续操作,该操作不会被阻塞');
