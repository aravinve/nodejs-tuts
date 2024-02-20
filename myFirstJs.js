var http = require('http')
var datetime = require('./myFirstModule')

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Date Time is = " + datetime.myDateTime())
    res.end("\nHello World!!!!")
}).listen(8080)