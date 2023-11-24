import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";

export default function Card(props) {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);


   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(props.id))
      } else {
         setIsFav(true);
         dispatch(addFav(props))
      }
   }

   const myFavorites = useSelector(state => state.myFavorites);
   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
            <button onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 style={{color: 'blue'}}>{props.name}</h2>
         </Link>
            <h2 style={{color: 'black'}}>Status: {props.status}</h2>
            <h2 style={{color: 'black'}}>id: {props.id}</h2>
            <h2 style={{color: 'black'}}>Specie: {props.species}</h2>
            <h2 style={{color: 'black'}}>Gender: {props.gender}</h2>
            <h2 style={{color: 'black'}}>Origin: {props.origin}</h2>
            <img src={props.image} alt={props.name} style={{borderRadius: '9999rem'}}/>
      </div>
   );
}
