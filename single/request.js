let http = require('http');
let fs = require('fs');

http.createServer((req,res)=>{
    console.log(req.url);
    let out = fs.createWriteStream(__dirname+'/log/req.log');
    out.write('______________________________'+'\n');
    out.write('-method:'+req.method+'\n');
    out.write('-url:'+req.url+'\n');
    out.write('-headers:'+JSON.stringify(req.headers)+'\n');
    out.write('-httpVersion:'+req.httpVersion+'\n');
}).listen(8080,'127.0.0.1');