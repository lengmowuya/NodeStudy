import express from 'express';
import mongoose from 'mongoose'
import formidable from 'formidable';
import path from 'path';
import Sowing from './../models/Sowing'
const router = express.Router({});


// ******************接口API********************

// 新增一张轮播图
router.post('/sowing/api/add',(req,res)=>{
    // console.log(req.body);
    if(!req.body || !req.body.sowing_title){
        res.json({
            status:401,
            result:'新增轮播图数据-不合法:'+req.body
        });
        return;
    }
    // 1.获取数据
    const body = req.body;
    // console.log(sowingBody);
    console.log(body.sowing_title,body.image_url);
    // // 1.创建formidable实例
    // let form = new formidable.IncomingForm();
    // // 2.制定上传文件的位置.
    // form.uploadDir = path.join(__dirname,'../dir/sowing/');
    // // 3.制定文件后缀名
    // form.options.keepExtensions = true;
    // // 4.解析request发送过来的数据
    // form.parse(req,(err,fields,files)=>{
    //     if(err) throw err;
    //     console.log(fields);
    //     console.log(files);
    //     res.end('success');
    // })
    const sowing = new Sowing({
        sowing_title:body.sowing_title,
        image_url:body.image_url,
        image_link:body.image_link,
        start_time:body.start_time,
        end_time:body.end_time
    });
    sowing.save()
        .then(()=>{
            res.json({
                status:200,
                result:'添加轮播图成功'
            })
        })
        .catch((err)=>{
            throw err;

        })
});

// 获取所有轮播图
router.get('/sowing/api/list',(req,res,next)=>{
    Sowing.find({},{'start_time':0,'end_time':0})
        .then(docs=>{
            // console.log(docs);
            res.json({
                status:200,
                result:docs
            })
        }).catch(err=>{
            return next(err);
        })
});

// 根据ID获取一条轮播图
router.get('/sowing/api/list',(req,res,next)=>{
    Sowing.find({},{'start_time':0,'end_time':0})
        .then(docs=>{
            // console.log(docs);
            res.json({
                status:200,
                result:docs
            })
        }).catch(err=>{
            return next(err);
        })
});

// 根据ID修改轮播图
router.get('/sowing/api/singer/:sowingId',(req,res,next)=>{
    if(req.params.sowingId.length > 26){
        res.json({
            status:401,
            result:'您请求的ID不合法:'+req.params.sowingId
        });
        return;
    }
    let objectId;
    try{
        objectId = new mongoose.Types.ObjectId(req.params.sowingId);
    }catch(err){
        res.json({
            status:401,
            result:'您请求的ID不合法:'+req.params.sowingId
        })
        return next(err);
    }
    Sowing.findById(objectId)
        .then(docs=>{
            if(docs.length<=0){
                res.json({
                    status:404,
                    result:'找不到指定ID轮播图:'+req.params.sowingId
                })
            }else{
                res.json({
                    status:200,
                    result:docs
                })
            }
        }).catch(err=>{

            return next(err);
        })
})
// 根据ID删除轮播图

// ******************页面路由********************
// 轮播图列表页面
router.get('/back/sowing_list',(req,res,next)=>{
    res.render('back/sowing_list.html');
});
// 新增轮播图页面
router.get('/back/sowing_add',(req,res)=>{
    res.render('back/sowing_add.html');
})
export default router;