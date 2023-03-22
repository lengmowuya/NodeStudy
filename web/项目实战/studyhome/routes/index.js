import express from 'express'
const router = express.Router({});

// *************后端页面路由********************
router.get('/back',(req,res)=>{
    res.render('back/index.html');
});
router.get('/back/sowing',(req,res)=>{
    res.render('back/sowing.html');
})

// *************前端页面路由********************
router.get('/',(req,res)=>{
    res.redirect('/web');
})

router.get('/web',(req,res)=>{
    res.render('web/index.html');
})

router.get('/web/res',(req,res)=>{
    res.render('web/resource.html');
})

router.get('/web/res_c',(req,res)=>{
    res.render('web/resource_content.html');
})
export default router;