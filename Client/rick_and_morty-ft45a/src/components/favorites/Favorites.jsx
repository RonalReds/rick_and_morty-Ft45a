import Card from '../card/Card';
import style from './Favorites.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';

export default function Favorites({onClose}) {
   const myFavorites = useSelector(state => state.myFavorites)

   const dispatch = useDispatch();

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
   }


   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
   }

   
   return (
      <div>
            <select name='order' onChange={handleOrder}>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
            <select name='filter' onChange={handleFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         <div className={style.contenedorFav}>  
            {
               !myFavorites.length
                     ? <h2>No hay favoritos</h2>
                     :
               myFavorites.map(favorite => (
               <Card
                  key={favorite.id}
                  id={favorite.id}
                  name={favorite.name}
                  status={favorite.status}
                  species={favorite.species}
                  gender={favorite.gender}
                  origin={favorite.origin}
                  image={favorite.image}
                  onClose={onClose}
               />
         ))}
         </div>
      </div>
   );
}
