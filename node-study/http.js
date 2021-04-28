/**
 * 1. 属性
 *      http.METHODS 此属性列出了所有支持的 HTTP 方法
 *      http.STATUS_CODES 此属性列出所有的http状态码及其描述
 *      http.globalAgent 指向 Agent 对象的全局实例，该实例是 http.Agent 类的实例
 *          用于管理 HTTP 客户端连接的持久性和复用，它是 Node.js HTTP 网络的关键组件。
 * 2. 方法
 *      http.createServer() 返回 http.Server 类的新实例
 *      http.request() 发送 HTTP 请求到服务器，并创建 http.ClientRequest 类的实例
 *      http.get() 类似于 http.request()，但会自动地设置 HTTP 方法为 GET，并自动地调用 req.end()
 * 3. 类  HTTP 模块提供了 5 个类
 *      http.Agent
 *          Node.js 会创建 http.Agent 类的全局实例，以管理 HTTP 客户端连接的持久性和复用，这是 Node.js HTTP 网络的关键组成部分。
 *          该对象会确保对服务器的每个请求进行排队并且单个 socket 被复用
 *          它还维护一个 socket 池。 出于性能原因，这是关键。
 *      http.ClientRequest 
 *          当http.request()或http.get() 被调用的时候，创建一个http.ClientRequest对象
 *          当响应被接收时，则会使用响应（http.IncomingMessage 实例作为参数）来调用 response 事件
 *          返回的响应数据可以通过以下两种方式读取：
 *              可以调用 response.read() 方法。
 *              在 response 事件处理函数中，可以为 data 事件设置事件监听器，以便可以监听流入的数据。
 *          
 *      http.Server
 *          当使用 http.createServer() 创建新的服务器时，通常会实例化并返回此类
 *          拥有服务器对象后，就可以访问其方法：
 *              close() 停止服务器不再接受新的连接。
 *              listen() 启动 HTTP 服务器并监听连接
 *      http.ServerResponse 
 *          由 http.Server 创建，并作为第二个参数传给它触发的 request 事件。
 *              const server = http.createServer((req, res) => {
 *                  // res 是一个 http.ServerResponse 对象。
 *               })
 *          在事件处理函数中总是调用的方法是end() 他会关闭相应
 *              getHeaderNames() 获取已设置的 HTTP 消息头名称的列表
 *              getHeaders() 获取已设置的 HTTP 消息头的副本。
 *              setHeader('headername', value) 设置 HTTP 消息头的值
 *              getHeader('headername') 获取已设置的 HTTP 消息头
 *              removeHeader('headername') 删除已设置的 HTTP 消息头。
 *              hasHeader('headername') 如果响应已设置该消息头，则返回 true。
 *              headersSent() 如果消息头已被发送给客户端，则返回 true。
 *          在处理消息头之后，可以通过调用 response.writeHead()（该方法接受 statusCode 作为第一个参数，可选的状态消息和消息头对象）将它们发送给客户端。
 *          若要在响应正文中发送数据给客户端，则使用 write()。 它会发送缓冲的数据到 HTTP 响应流。
 *          如果消息头还未被发送，则使用 response.writeHead() 会先发送消息头，其中包含在请求中已被设置的状态码和消息，可以通过设置 statusCode 和 statusMessage 属性的值进行编辑：
 *              response.statusCode = 500
 *              response.statusMessage = '内部服务器错误'
 *      http.IncomingMessage
 *          http.Server，当监听 request 事件时
 *          http.ClientRequest，当监听 response 事件时
 *          它可以用来访问响应：
 *              使用 statusCode 和 statusMessage 方法来访问状态。 
 *              使用 headers 方法或 rawHeaders 来访问消息头
 *              使用 method 方法来访问 HTTP 方法。
 *              使用 httpVersion 方法来访问 HTTP 版本。
 *              使用 url 方法来访问 URL
 *              使用 socket 方法来访问底层的 socket
 *          因为 http.IncomingMessage 实现了可读流接口，因此数据可以使用流访问
 */
const http = require('http')

console.log('http.METHODS', http.METHODS)
console.log('http.STATUS_CODES', http.STATUS_CODES)
console.log('http.globalAgent', http.globalAgent)

const server = http.createServer((req, res) => {
    //使用此回调处理每个单独的请求。
})