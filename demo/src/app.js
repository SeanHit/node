const http = require('http');

const server = http.createServer((req, res) => {

    res.end('hello world!')
})

server.listen(4000, '127.0.0.1', () => {
    console.log(`4000端口启动成功`);
})