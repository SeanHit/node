/**
 * 1. 什么是buffer
 *      Buffer是内存区域，它表示V8 Javascript引擎外部分分配的固定大小的内存块（无法调整大小）
 *      可以将buffer视为整数数组，每个整数代表一个数据字节
 *      Node.js Buffer类
 * 2. 为什么需要Buffer
 *      1) 帮助开发者处理二进制数据，传统的是处理字符串而不是二进制数据
 *      2）Buffer与 流 关系很大。 当流处理器接受数据的速度快于其消化的速度时，则会将数据放入buffer中
 *      简单场景： 看视频的进度条缓冲
 * 3. 如何创建buffer
 *      使用Buffer.from(),Buffer.alloc() 和 Buffer.allocUnsafe()创建
 *          const buf = Buffer.from('Hey!')
 *          const buf = Buffer.alloc(1024)
 *          const buf = Buffer.allocUnsafe(1024)
 * 4. 使用Buffer (看作是但不是 整数数组) Unicode码
 *      访问buffer的内容 buf[0]  buf.toString()
 *      获取 buffer 的长度
 *      迭代 buffer 的内容
 *      更改 buffer 的内容
 *          可以使用 write() 方法将整个数据字符串写入 buffer
 *          直接buf[0] = 111
 *      复制 buffer copy()
 *      切片 buffer 使用 slice() 方法创建它
 *          如果要创建 buffer 的局部视图，则可以创建切片。 切片不是副本：原始 buffer 仍然是真正的来源。 如果那改变了，则切片也会改变。
 */

const buf = Buffer.from('Hey!')
buf.slice(0).toString() //Hey!
const slice = buf.slice(0, 2)
console.log(slice.toString()) //He
buf[1] = 111 //o
console.log(slice.toString()) //Ho