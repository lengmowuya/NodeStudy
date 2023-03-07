const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer((req,res)=>{
    let pathUrl = url.parse(req.url);
    let pathName = pathUrl.pathname;

    // 1.提取请求url后缀
    if(pathName.lastIndexOf('.') === -1){
        pathName += '/index.html';
    }
    // if(pathName === '/'){
    //     pathName += 'index.html';
    // }
    console.log(pathName);

    // 2.处理有后缀
    let fileUrl = path.join(__dirname,pathName);
    // console.log(fileUrl);
    // 取得后缀
    let extName = path.extname(fileUrl);
    // 3.读取文件
    fs.readFile(fileUrl,(err,data)=>{
        if(err) {
            // 找不到资源
            res.writeHead(404,{'content-type':'text/html;charset=utf-8'});
            res.end('<h1>404,访问的页面不存在!</h1>');
        }else{
            // 根据文件动态设置响应头
            getContentType(extName,(contentType)=>{
                // console.log(contentType);
                res.writeHead(200,{'content-type':contentType});
                res.end(data);
            });
        }
    })

}).listen(3000,'127.0.0.1');


let getContentType = (extName,callback)=>{
    fs.readFile(path.join(__dirname,'mime.json'),(err,data)=>{
        if(err) throw err;
        let mimeJson = JSON.parse(data);

        let contentType = mimeJson[extName] || 'text/plain';
        // console.log(contentType);
        callback&& callback(contentType);

    })
};