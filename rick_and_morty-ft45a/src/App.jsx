import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Deatil from './components/Deatil.jsx';


const URL = "https://rym2.up.railway.app/api/character";
   const API_KEY = "henrystaff";

function App() {

   const [characters, setCharacters] = useState([])

   
   const onSearch = (id) => {
      axios(`${URL}/${id}?key=${API_KEY}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Deatil/>} />
            
         </Routes>
      </div>
   );
}

export default App;
