// >>> 引入http先安装node ### yarn add @types/node
const http = require('http')

http.createServer(function(request,response) {
    console.log("request come",request.url)

    response.end("hello, ida")
}).listen(9000) // 客户端访问端口号

console.log('server listening on 9000')
