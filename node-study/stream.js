/**
 * 流
 * 1. 什么是流
 *  流是为 Node.js 应用程序提供动力的基本概念之一
 *  它们是一种以高效的方式处理读/写文件、网络通信、或任何类型的端到端的信息交换。
 *  例如，在传统的方式中，当告诉程序读取文件时，这会将文件从头到尾读入内存，然后进行处理。
 *      使用流，则可以逐个片段地读取并处理（而无需全部保存在内存中）。
 *  Node.js 的 stream 模块 提供了构建所有流 API 的基础。 所有的流都是 EventEmitter 的实例
 * 2. 为什么是流
 *  相对于使用其他的数据处理方法，流基本上提供了两个主要优点：
 *      内存效率: 无需加载大量的数据到内存中即可进行处理
 *      时间效率: 当获得数据之后即可立即开始处理数据，这样所需的时间更少，而不必等到整个数据有效负载可用才开始。
 * 3. 流的实例
 *  例子： 从磁盘读取文件
 *      使用 Node.js 的 fs 模块，可以读取文件，并在与 HTTP 服务器建立新连接时通过 HTTP 提供文件
 *      pipe()  src.pipe(dest1).pipe(dest2) / src.pipe(dest1) dest1.pipe(dest2)
 * 4. 流的类型
 *  1) Readable  可以通过管道读取、但不能通过管道写入的流（可以接收数据，但不能向其发送数据）。 当推送数据到可读流中时，会对其进行缓冲，直到使用者开始读取数据为止。
 *  2) Writable: 可以通过管道写入、但不能通过管道读取的流（可以发送数据，但不能从中接收数据）。
 *  3) Duplex: 可以通过管道写入和读取的流，基本上相对于是可读流和可写流的组合。
 *  4) Transform: 类似于双工流、但其输出是其输入的转换的转换流。
 * 5. 如何创建可读流
 *  从stream模块获取可读流，对其进行初始化并实现readable._read()方法
 * 6.如何创建可写流
 */

const http = require('http')
const fs = require('fs')

// const server = http.createServer(function (req, res) {
//     console.log(__dirname)
//     fs.readFile(__dirname + '/path.js', (err, data) => {
//         res.end(data)
//     })
// })

// 流的方式
// const server = http.createServer((req, res) => {
//     const stream = fs.createReadStream(__dirname + '/path.js')
//     stream.pipe(res)
// })
// server.listen(3000)

/**
 * 创建可读流
 * 实现_read() 或者 使用read选项实现_read
 * 
 */
const Stream = require('stream');
// 实现_read()
// const readableStream = new Stream.Readable();
// readableStream._read = () => { };
// 或者使用read选项实现_read
// const readableStream = new Stream.Readable({
//     read() { }
// })
// readableStream.push('hi')
// readableStream.push('ho!')

/**
 * 创建可写流
 */
// const writableStream = new Stream.Writable();
// writableStream._write = (chunk, encoding, next) => {
//     console.log(chunk.toString())
//     next()
// }
// process.stdin.pipe(writableStream)


const readableStream = new Stream.Readable({
    read() { }
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

writableStream.end()