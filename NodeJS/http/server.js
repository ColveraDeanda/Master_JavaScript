const http = require('http');

http.createServer((req, res) => {
    console.log(req.method, req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    console.log(`${res.statusCode}`);

    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>con NODEMON</h1>
    </body>
    </html>
    `);
}).listen(3000); // 3000 normalmente para servidores NodeJS