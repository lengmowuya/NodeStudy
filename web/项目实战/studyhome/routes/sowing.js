import express from 'express';
import Sowing from './../models/Sowing'
const router = express.Router({});

// 新增一张轮播图
router.post('/sowing/api/add',(req,res)=>{
    const sowing = new Sowing({

    });
});

// 获取所有轮播图

// 根据ID修改轮播图

// 根据ID删除轮播图

export default router;