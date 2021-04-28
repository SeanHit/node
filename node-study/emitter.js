/**
 * events 模块为提供了 EventEmitter 类，这是在 Node.js 中处理事件的关键
 *  事件监听器返回及使用以下事件：
 *      当监听器被添加时返回 newListener。
 *      当监听器被移除时返回 removeListener。
 * 1. emitter.addListener():emitter.on() 的别名
 * 2. emitter.emit() 触发事件。 按照事件被注册的顺序同步地调用每个事件监听器
 * 3. emitter.eventNames() 返回字符串（表示在当前 EventEmitter 对象上注册的事件）数组：
 * 4. emitter.getMaxListeners() 获取可以添加到 EventEmitter 对象的监听器的最大数量（默认为 10，但可以使用 setMaxListeners() 进行增加或减少）。
 * 5. emitter.setMaxListeners() 设置可以添加到 EventEmitter 对象的监听器的最大数量（默认为 10，但可以增加或减少）。
 * 6. .... 
 */
const EventEmitter = require('events')
const door = new EventEmitter()
door.emit("slam") // 触发'slam'事件
console.log('door.eventNames()', door.eventNames())
console.log('door.getMaxListeners()', door.getMaxListeners())
