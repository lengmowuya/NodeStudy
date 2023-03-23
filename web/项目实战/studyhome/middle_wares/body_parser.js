import querystring from 'querystring';
// 处理post请求
export default (req,res,next)=>{
    // 1.过滤get请求
    if(req.method.toLowerCase() === 'get') return next();
    // console.log(req.headers['content-type']);

    // 2.如果是普通的表单提交,要处理application/x-www-form-urlencoded
    // 如果有文件(图片,音视频等),则跳过,交给其他处理 multipart/form-data
    if(req.headers['content-type'].startsWith('multipart/form-data')){
        return next();
    }
    // next();
    // 3.数据流拼接
    let data = '';
    req.on('data',(chunk)=>{
        data+=chunk;
    });
    req.on('end',()=>{
        console.log(data);
        req.body = querystring.parse(data);
        next();
    });
    
}