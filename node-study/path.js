// 无需安装，作为node.js的核心组成部分，可以直接引用
const path = require('path');
/**
 * 1. path.sep() 路段分隔符 windows为\和maxOS/linux中为/
 * 2. path.delimiter() 路径定界符 在 Windows 上是 ;，在 Linux/macOS 上是 :
 * 3. path.basename() 返回路径的最后一部分。 第二个参数可以过滤掉文件的扩展名：
 * 4. path.dirname() 返回路径的目录部分
 * 5. path.extname() 返回路径的扩展名部分
 * 6. path.isAbsolute() 如果是绝对路径，则返回 true
 * 7. path.join() 连接路径的两个或多个部分
 * 8. path.normalize() 当包含类似 "." ".."或双斜杠等相对的说明符时， 则尝试计算实际的路径
 * 9. path.parse() 解析对象的路径为组成其的片段
 * 10. path.relative() 2个参数。 基于当前工作目录， 返回从第一个路径到第二个路径的相对路径
 * 11. path.resolve() 获得相对路径的绝对路径的计算
 *      通过指定第二个参数，resolve 会使用第一个参数作为第二个参数的基准：
 *      如果第一个参数以斜杠开头，则表示它是绝对路径：
 */
console.log('path.basename()', path.basename('\\test\\something'))
console.log('path.basename()', path.basename('\\test\\something.txt'))
console.log('path.basename()', path.basename('\\test\\something.txt', '.txt'))

console.log('path.dirname()', path.dirname('\\test\\something'))
console.log('path.dirname()', path.dirname('\\test\\something\\file.txt'))

console.log('path.extname()', path.extname('\\test\\something\\file.txt'))
console.log('path.extname()', path.extname('\\test\\something'))

console.log('path.isAbsolute()', path.isAbsolute('F:\\test\\something'))
console.log('path.isAbsolute()', path.isAbsolute('.\\test\\something'))

console.log('path.join()', path.join('/', 'users', '234', 'test.txt'))

console.log('path.normalize()', path.normalize('..\\..\\test\\..\\something'))

console.log('path.parse()', path.parse('/test/something.txt'))

console.log('path.relative()', path.relative('/Users/joe', '\\Users\\joe\\text.txt'))

console.log('path.resolve()', path.resolve('server.js'))
console.log('path.resolve()', path.resolve('node', 'fs.js'))
console.log('path.resolve()', path.resolve('/etc', 'joe.txt'))




