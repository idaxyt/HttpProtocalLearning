import * as http from "http"

http.createServer(function(request,response){
    if(~request.url.indexOf('?callback')) {
        const callback =  request.url.split('callback=')[1]
        const obj = {
            text: 'jsonp'
        }
        const json = JSON.stringify(obj)
        response.end(`${callback}(${json})`)
    }
}).listen(9002)