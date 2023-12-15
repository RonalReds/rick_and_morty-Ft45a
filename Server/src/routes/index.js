const router = require('express').Router();

const getCharById = require('../controllers/getCharById.js');
const login = require('../controllers/login.js');
const postUser = require('../controllers/postUser.js');
const postFav = require('../controllers/postFav.js');
const deleteFav = require('../controllers/deleteFav.js')



router.get('/character/:id', getCharById);

router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;