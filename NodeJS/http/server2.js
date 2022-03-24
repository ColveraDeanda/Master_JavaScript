const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

    if(req.url == '/') {
        res.writeHead(200, {'ContenT-type': 'text/html'})
        fs.readFile('../../htmlAndCss/Basics de HTML/index.html', 'utf-8', (err, html) => {
            if (err) {
                console.log('Pagina no encontrada...')
            }
            res.end(html)
        })
    } else if(req.url.includes('.css')){
        res.writeHead(200, {'Content-type': 'text/css'})
        let reqpath = path.join(__dirname, '../../htmlAndCss/Basics de HTML', req.url)
        const cssStream = fs.createReadStream(reqpath, 'utf-8') 
        cssStream.pipe(res)
    } else if(req.url.includes('img')) {    
        console.log(req.url)
        res.writeHead(200, {'Content-type': 'image/jpg'})
        let reqpathh = path.join(__dirname, '../../htmlAndCss/Basics de HTML', req.url)
        const imgStream = fs.createReadStream(reqpathh, 'utf-8') 
        imgStream.pipe(res)
    } else {
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.end('Error 404')
    }
    

}).listen(3000);