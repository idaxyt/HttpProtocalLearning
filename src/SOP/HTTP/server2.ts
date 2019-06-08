import * as http from 'http'

http.createServer(function(request,response) {
    console.log('request 9001',request.url)
    response.writeHead(200,{
        "Access-Control-Allow-Origin": "http://localhost:9000"
    })
    response.end('hello,ida')

}).listen(9001)

console.log('listening to server 9001')