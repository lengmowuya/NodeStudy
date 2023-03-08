const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

http.createServer((req,res)=>{
    // 读取文件
    // get
    readDataJson((jsonData)=>{
        // console.log(data);
        fs.readFile(path.join(__dirname,'page/index.ejs'),(err,data)=>{
            if(err) throw err;

            // 实例化模板引擎
            let ejsList = data.toString();
            let tempList = ejs.render(ejsList,jsonData);

            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            // console.log(data.toString());
            res.end(tempList);
        });
    });
}).listen(3000);


let readDataJson = (callback)=>{
    fs.readFile(path.join(__dirname,'data.json'),(err,data)=>{
        if(err) throw err;
        let jsonData = JSON.parse(data);
        callback && callback(jsonData);
    })
}