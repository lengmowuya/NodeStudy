let buf1 = Buffer.alloc(10);
buf1.fill(100);
// console.log(buf1);
// <Buffer 64 64 64 64 64 64 64 64 64 64>


let buf2 = Buffer.from('世界和平!');
buf2.fill(1,3);
// console.log(buf2);
//<Buffer e4 b8 96 01 01 01 01 01 01 01 01 01 01>
// console.log(buf2.toString());
// 世

let buf3 = Buffer.from('世界和平!');
buf3.write('核',6,'utf8'); 
// 因为一个汉字是3字节，要改第三个汉字就要跳过6个字节,默认就是utf8,可以不写
// console.log(buf3.toString());
// 世界核平!



let buf4 = Buffer.alloc(4);
buf4.writeInt8(0,0);
// 写入0，在第0个位置
buf4.writeInt8(10,1);
buf4.writeInt8(20,2);
buf4.writeInt8(30,3);
// console.log(buf4);
//<Buffer 00 0a 14 1e>
// console.log(buf4.readInt8(0));   // 0 
// console.log(buf4.readInt8(1));   // 10 
// console.log(buf4.readInt8(2));  // 20 
// console.log(buf4.readInt8(3));  // 30 


let buf5 = Buffer.alloc(4);
// console.log(Buffer.isBuffer(buf5)); // true
// console.log(Buffer.isBuffer([])); // false

let buf6 = Buffer.alloc(4);
console.log(buf5.length); // 4 
console.log(buf5.type); // undefined