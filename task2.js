

const http = require ('http');


http.createServer((req,res)=> {
    res.setHeader('content-type','text/html')
    res.end('<h1> hello node </h1>')

}).listen(4000)
console.log(' the server is ok in port 4000');