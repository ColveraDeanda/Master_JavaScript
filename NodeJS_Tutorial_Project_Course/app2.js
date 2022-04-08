const http = require('http');

http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Homdqwdqwde')
        res.end()
    } else if(req.url === '/user') {
        res.write('User')
        res.end()
    } else {
        res.end(`
        ERRRROOOOR!!
        `)
    }
}).listen(5000);