const http = require('http');
const PORT = 3001;
const characters = require('./utils/data');


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/').pop();
        const character = characters.find(char => char.id === Number(id));
        if (character) {
            return res
                .writeHead(200, { 'Content-Type': 'application/json' })
                .end(JSON.stringify(character));
        } else {
            return res
                .writeHead(404, { 'Content-Type': 'application/json' })
                .end(JSON.stringify({message: 'Character Not Found'}));
        }
    }
    return res
        .writeHead(404, { 'Content-Type': 'application/json' })
        .end(JSON.stringify({message: 'Wrong url'}));
}).listen(PORT, '127.0.0.1')
