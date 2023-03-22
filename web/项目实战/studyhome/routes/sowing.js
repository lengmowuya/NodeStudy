import express from 'express';
import formidable from 'formidable';
import path from 'path';
import Sowing from './../models/Sowing'
const router = express.Router({});




// 新增一张轮播图
router.post('/sowing/api/add',(req,res)=>{
    // 1.创建formidable实例
    let form = new formidable.IncomingForm();
    // 2.制定上传文件的位置.
    form.uploadDir = path.join(__dirname,'../dir/sowing/');
    // 3.制定文件后缀名
    form.options.keepExtensions = true;
    // 4.解析request发送过来的数据
    form.parse(req,(err,fields,files)=>{
        if(err) throw err;
        console.log(fields);
        console.log(files);
        res.end('success');
    })
    // const sowing = new Sowing({
    //     image_title:'热门活动1',
    //     image_url:'/images/activity1.jpg',
    //     image_link:'/activity/1'
    // });
    // sowing.save()
    //     .then(()=>{
    //         res.json({
    //             status:200,
    //             result:'添加轮播图成功'
    //         })
    //     })
    //     .catch((err)=>{
    //         throw err;

    //     })
});

// 获取所有轮播图

// 根据ID修改轮播图

// 根据ID删除轮播图

export default router;