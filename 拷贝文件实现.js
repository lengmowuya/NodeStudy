let fs = require('fs');

let copy = (src,target,callback)=>{
    fs.readFile(src,(err,data)=>{
        if(!err){
            fs.writeFile(target,data,(err,data)=>{
                if(!err){
                    callback&&callback(err,data);
                }else{
                    throw err;
                }
            })
        }
    })
}
copy(__dirname+'/source/c.txt',__dirname+'/source/d.txt',(err)=>{
    if(!err){
        console.log("拷贝成功");
    }
})

// copy('要拷贝的路径','拷贝到的路径',(err)=>{

// })