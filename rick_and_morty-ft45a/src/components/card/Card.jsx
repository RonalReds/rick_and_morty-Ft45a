import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import style from './Card.module.css';

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
      <div className={style.contenedor}>
         {
            isFav ? (
               <button onClick={handleFavorite} className={style.btn}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.btn}>🤍</button>
            )
         }
            <button onClick={() => props.onClose(props.id)} className={style.btnCerrar}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={style.nameCard}>{props.name}</h2>
         </Link>
            <h2 className={style.detailCard}>Status: {props.status}</h2>
            <h2 className={style.detailCard}>id: {props.id}</h2>
            <h2 className={style.detailCard}>Specie: {props.species}</h2>
            <h2 className={style.detailCard}>Gender: {props.gender}</h2>
            <h2 className={style.detailCard}>Origin: {props.origin}</h2>
            <img src={props.image} alt={props.name} className={style.imagenCard}/>
      </div>
   );
}
