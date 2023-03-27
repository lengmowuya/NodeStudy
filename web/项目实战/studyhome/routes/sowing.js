import express from 'express';
import mongoose from 'mongoose'
import formidable from 'formidable';
import path from 'path';
import {basename} from 'path';
import Sowing from './../models/Sowing'
import config from './../src/config'
const router = express.Router({});


// ******************接口API********************
// 新增一张轮播图
router.post('/sowing/api/add',(req,res)=>{
    // 1.创建formidable实例
    let form = new formidable.IncomingForm();
    // 2.制定上传文件的位置.
    form.uploadDir = path.join(config.uploadsPath,'/sowing/');
    // 3.制定文件后缀名
    form.options.keepExtensions = true;
    // 4.解析request发送过来的数据
    form.parse(req,(err,fields,files)=>{
        if(err) throw err;
        console.log(fields);
        // 取出普通字段
        const body = fields;
        // 验证字段完整性
        if(!body || !body.sowing_title || !body.image_link){
            res.json({
                status:401,
                result:'新增轮播图数据-不合法或不完整:'+req.body.sowing_title
            });
            return;
        }
        // 解析上传的路径,取出文件名,保存到数据库.
        // console.log(files.UploadImg.filepath);
        body.image_url = basename(files.UploadImg.filepath);
        // 建立数据到模型中
        const sowing = new Sowing({
            sowing_title:body.sowing_title,
            image_url:body.image_url,
            image_link:body.image_link,
            start_time:body.start_time,
            end_time:body.end_time
        });
        // 保存到数据库
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
    })

});

// 获取所有轮播图
router.get('/sowing/api/list',(req,res,next)=>{
    Sowing.find({},{'start_time':0,'end_time':0})
        .then(doc=>{
            res.json({
                status:200,
                result:doc
            })
        }).catch(err=>{
            return next(err);
        })
});
// 根据ID获取一条轮播图
router.get('/sowing/api/singer/:sowingId',(req,res,next)=>{
    let id = req.params.sowingId;
    // 判断ID是否合法
    if(id.length > 26){
        res.json({
            status:401,
            result:'您请求的ID不合法:'+id
        });
        return;
    }
    let objectId = new mongoose.Types.ObjectId(id);
    Sowing.findById(objectId)
        .then(doc=>{
            if(doc.length<=0){
                res.json({
                    status:404,
                    result:'找不到指定ID轮播图:'+id
                })
            }else{
                res.json({
                    status:200,
                    result:doc
                })
                
            }
        }).catch(err=>{

            return next(err);
        })
})
// 根据ID修改轮播图
router.post('/sowing/api/editor',(req,res,next)=>{
    let id = req.body.id;
    let body = req.body;
    // 判断ID是否合法
    if(id.length > 26){
        res.json({
            status:401,
            result:'您请求的ID不合法:'+id
        });
        return;
    }
    let objectId = new mongoose.Types.ObjectId(id)
    Sowing.findById(objectId)
        .then(doc=>{
            if(doc.length<=0){
                res.json({
                    status:404,
                    result:'找不到指定ID轮播图:'+id
                })
            }else{
                // 2.修改轮播图数据
                doc.sowing_title = body.sowing_title;
                doc.image_url = body.image_url;
                doc.image_link = body.image_link;
                doc.start_time = body.start_time;
                doc.end_time = body.end_time;
                // 将编辑时间修改为最新时间
                doc.edit_time = Date.now();
                // 3.保存sowing
                // 如果_id是一样的,就不会新增,而是修改已有数据.
                doc.save()
                    .then(()=>{
                        res.json({
                            status:200,
                            result:'修改成功'
                        })
                    })
                    .catch(err=>{
                        return next(err);
                    })
            }
        }).catch(err=>{

            return next(err);
        })
})
// 根据ID删除轮播图
router.delete('/sowing/api/delete/:sowingId',(req,res,next)=>{
    let id = req.params.sowingId;
    // 判断ID是否合法
    if(id.length > 26){
        res.json({
            status:401,
            result:'您请求的ID不合法:'+id
        });
        return;
    }
    let objectId = new mongoose.Types.ObjectId(id);
    Sowing.deleteOne({_id:id})
        .then(doc=>{
            res.json({
                status:200,
                result:'成功删除轮播图!'
            })
        }).catch(err=>{
            return next(err);
        })
})

// ******************页面路由********************
// 轮播图列表页面
router.get('/back/sowing_list',(req,res,next)=>{
    // 获取所有轮播图数据
    Sowing.find().then(sowings=>{
        // 发送渲染页面.
        res.render('back/sowing_list.html',{sowings,config});
    }).catch(err=>{
        return next(err);
    })
});
// 新增轮播图页面
router.get('/back/sowing_add',(req,res)=>{
    res.render('back/sowing_add.html');
})
export default router;