import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/college',{useNewUrlParser:true});
mongoose.connection.on('open',()=>{
    console.log('MongoDB数据库连接成功...');
});
mongoose.connection.on('error',(err)=>{
    console.log('MongoDB数据库连接失败!');
    throw err;
})

// 创建轮播图的模式对象
const sowingSchema = mongoose.Schema({
    // 图片名称
    sowing_title:{type:String,required:true},
    // 图片链接
    image_link:{type:String,required:true},
    // 图片路径
    image_url:{type:String,required:true},
    // 上架时间
    start_time:{type:String},
    // 下架时间
    end_time:{type:String},
    // 最后编辑时间
    edit_time:{type:Date,default:Date.now()},
    // 添加时间
    create_time:{type:Date,default:Date.now()},
});

const Sowing = mongoose.model('Sowing',sowingSchema);

export default Sowing;