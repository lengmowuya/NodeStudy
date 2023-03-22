import express from 'express';
import Sowing from './../models/Sowing'
const router = express.Router({});

// 新增一张轮播图
router.get('/sowing/api/add',(req,res)=>{
    const sowing = new Sowing({
        image_title:'热门活动1',
        image_url:'/images/activity1.jpg',
        image_link:'/activity/1'
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

// 根据ID修改轮播图

// 根据ID删除轮播图

export default router;