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


function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         if (data.access) {
            setAccess(data.access);
            navigate('/home');
         } else {
            alert('Credenciales incorrecta');
         }
      } catch (error) {
         alert(error.message)
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

 
   const onSearch = async (id) => {
      try {
         const characterId = characters.filter(char => char.id === Number(id));
         if (characterId.length) {
            return alert (`${characterId[0].name} ya existe`)
         }
         navigate('/home');
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters([...characters, data]);
         } else {
            alert('¡El id debe ser un número entre 1 y 826!');
         }
      } catch (error) {
         alert(error.message)
      }
   }  
   

   const dispatch = useDispatch()
   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
      dispatch(removeFav(id))
   }

   return (
      <div>
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
