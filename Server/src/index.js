const express = require('express');
const morgan = require('morgan')
const router = require('./routes');
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
}); 
 
server.use(express.json());
server.use(morgan('dev'));

server.use('/rickandmorty', router)
 



server.listen(PORT, () => {
    console.log('Server raised in port: ', PORT);
});


/* const http = require('http');
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
 */

