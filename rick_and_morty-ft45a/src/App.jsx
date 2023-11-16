import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import About from './components/About.jsx';
import Deatil from './components/Deatil.jsx';
import NotFound from './components/NotFound.jsx';
import Form from './components/Form.jsx';

const URL = "https://rym2.up.railway.app/api/character";
   const API_KEY = "henrystaff";

function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = 'ronal@e.com';
   const PASSWORD = 'red';

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const navigate = useNavigate();
   const location = useLocation();

 
   const onSearch = (id) => {

      const characterId = characters.filter(char => char.id === Number(id));
      if (characterId.length) {
         return alert (`${characterId[0].name} ya existe`)
      }

      axios(`${URL}/${id}?key=${API_KEY}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               alert('¡El id debe ser un número entre 1 y 826!');
            }
         }
      );
      navigate('/home');
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} /> }
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Deatil/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/' element={<Form login={login} />} />
         </Routes>
      </div>
   );
}

export default App;
