const fs = require('fs');
const path = require('path')
// 检查文件是否存在
// fs.access();
// 创建新的文件夹
// fs.mkdir 或 fs.mkdirSync()
const folderName = path.normalize('./node-study/fs');

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName)
//   }
// } catch (err) {
//   console.error(err)
// }

/**
 * 读取目录的内容
 * 使用fs.readdir() 或者 fs.readdirSync();
 */
// console.log('123', fs.readdirSync(folderName))

/**
 * 重命名文件夹
 * fs.rename()
 */

fs.rename(path.normalize('./node-study/fs-rename'), path.normalize(folderName), err => {
  if (err) {
    console.error(err)
    return
  }
  //完成
})