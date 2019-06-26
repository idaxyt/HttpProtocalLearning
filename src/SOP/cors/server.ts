// >>> 引入http先安装node ### yarn add @types/node
import * as http from "http"
import * as fs from "fs"

http.createServer(function(request,response) {

    const html = fs.readFileSync('src/SOP/cors/index.html','utf-8')
    response.writeHead(200, {
        'Content-type': 'text/html'
    })
    response.end(html)
}).listen(9000) // 客户端访问端口号

console.log('server listening on 9000')
