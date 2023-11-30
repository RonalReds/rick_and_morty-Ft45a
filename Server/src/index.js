const http = require('http');
const PORT = 3001;
const getCharById = require('./controllers/getCharById');


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/').pop();
        getCharById(res,id)
    }
}).listen(PORT, '127.0.0.1', () => console.log(`Server listening on porto ${PORT}`)
)
