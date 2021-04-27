/**
 * 操作系统模块
 *  该模块提供额许多函数 可用于从底层的操作系统和程序运行所在的计算机上检索信息并进行交互
 * 1. os.arch() 返回标识底层架构的字符串，例如 arm、x64、arm64。
 * 2. os.cpus() 返回关于系统上可用的 CPU 的信息。
 * 3. os.endianness() 根据是使用大2的内存字节数端序或小端序编译 Node.js，返回 BE 或 LE。
 * 4. os.freemem() 可用的内存字节数
 * 5. os.homedir() 返回到当前用户的主目录的路径
 * 6. os.hostname() 返回主机名。
 * 7. os.networkInterfaces() 返回系统上可用的网络接口的详细信息。
 * 8. os.platform() 返回为 Node.js 编译的平台
 * 9. os.release() 返回标识操作系统版本号的字符串
 * 10. os.tmpdir() 返回指定的临时文件夹的路径
 * 11. os.totalmem() 返回表示系统中可用的总内存的字节数。
 * 12. os.type() 标识操作系统
 * 13. os.uptime() 返回自上次重新启动以来计算机持续运行的秒数
 * 14. os.userInfo() 返回包含当前 username、uid、gid、shell 和 homedir 的对象
 */
const os = require('os')
console.log('os.arch', os.arch())
console.log('os.cpus', os.cpus())
console.log('os.endianness', os.endianness())
console.log('os.freemem', os.freemem())
console.log('os.homedir', os.homedir())
console.log('os.hostname', os.hostname())
console.log('os.networkInterfaces', os.networkInterfaces())
console.log('os.release', os.release())
console.log('os.type', os.type())
console.log('os.uptime', os.uptime())
console.log('os.userInfo', os.userInfo())
console.log('os.tmpdir', os.tmpdir())




