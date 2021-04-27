const fs = require('fs');
const path = require('path')
// 异步的
// const a = fs.readFile(path.normalize('./node-study/todos.json'),'utf8',(err,data)=>{
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(data)
// })

// 同步的
// try {
//     const data = fs.readFileSync(path.normalize('./node-study/test.txt'),'utf8')
//     console.log(data)
// } catch ( err ) {
//     console.log('err',err)
// }

// 写文件
// fs.writeFile(path.normalize('./node-study/test.txt'),'，我是一个测试txt',{flag:'a+'},(err,data)=>{
//     if(err) {
//         console.log('err',err);
//         return 
//     }
// })

// 同步 fs.writeFileSync

// 追加内容
fs.appendFile(path.normalize('./node-study/todos.json'),'这是追加内容',(err)=>{
    if(err){
        console.log('err',err);
        return 
    }
})