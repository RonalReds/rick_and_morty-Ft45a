import './App.css';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Deatil from './components/detail/Deatil.jsx';
import NotFound from './components/notFound/NotFound.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import { removeFav } from './redux/actions.js';

   const URL = "https://rym2.up.railway.app/api/character";
   const API_KEY = "henrystaff";

function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = 'ronal@e.com';
   const PASSWORD = 'red1234';

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert('Credenciales incorrecta')
      }
   }

   const logout = () => {
      setAccess(false);
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

   const dispatch = useDispatch()
   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
      dispatch(removeFav(id))
   }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} /> }
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Deatil/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/' element={<Form login={login} />} />
            <Route path='/favorites' element={<Favorites  onClose={onClose}/>} />
            
         </Routes>
      </div>
   );
}

export default App;
