const http = require('http');


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url === '/rickandmorty/character')
}).listen(3001, 'localhost')
