const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character";
//const API_KEY = "henrystaff";
   
const getCharById = (req, res) => {
    const { id } = req.params;
    axios
        .get(`${URL}/${id}`)
        .then(({ data }) => {
            const { id, status, name, species, origin, image, gender, location } = data
            const character = {
                id, status, name, species, origin, image, gender, location
            };
            return character.name ? res.json(character) : res.status(404).send('Not fount');
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })
};


module.exports = getCharById;


/* const axios = require('axios')
const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";
   

const getCharById = (res, id) => {
    axios.get(`${URL}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then(data => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
                location: data.location
            };
            return res
                .writeHead(200, { 'Content-Type': 'application/json' })
                .end(JSON.stringify(character))
        })
        .catch(error => {
            return res
                .writeHead(500, { 'Content-Type': 'text/plain' })
                .end(error.message)
            })
}

module.exports = getCharById;

 */