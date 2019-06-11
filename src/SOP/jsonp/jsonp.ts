// >>> 只能发送get请求，不支持post put delete
// >>> 不安全 xss攻击
function jsonp({url,parmas,cb}) {
    return new Promise((resolve,reject) => {
        let script = document.createElement("script")
        parmas = {...parmas,cb}
        let arrs = []
        for(let key in parmas) {
            arrs.push(`${key}=${parmas[key]}`)
        }
        script.src = `${url}?${arrs.join('&')}`
        document.body.appendChild(script)
        window[cb] = function(data) {
            resolve(data)
            document.body.removeChild(script)
            delete window[cb]
        }
    })
}
jsonp({
    url: "https://www.baidu.com/sugrec",
    parmas: {"wd": 12},
    cb: "show"
}).then((res) => {
    console.log(res)
})