// let buffer = new Buffer(20);    // 已经废弃的使用方法
// console.log(buffer);

// 方法1:使用长度创建buffer
let buf1 = Buffer.alloc(10);
// console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
// alloc的第二个参数代表创建时的默认填充值（十六进制存放)
let buf2 = Buffer.alloc(10,'s');
// console.log(buf2); // <Buffer 73 73 73 73 73 73 73 73 73 73>

let buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);

// 方法3：将某些数据转换为Buffer存储
let arr = [1,2,3,10,20,30];
let buf4 = Buffer.from(arr);
console.log(buf4); // <Buffer 01 02 03 0a 14 1e>

let buf5 = Buffer.from("冷漠乌鸦")
console.log(buf5);
// <Buffer e5 86 b7 e6 bc a0 e4 b9 8c e9 b8 a6>
console.log(buf5.toString());
// 冷漠乌鸦



