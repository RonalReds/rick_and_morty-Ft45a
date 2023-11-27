import axios from "axios";
import style from './Detail.module.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



const URL = "https://rym2.up.railway.app/api/character";
   const API_KEY = "henrystaff";

const Deatil = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL}/${id}?key=${API_KEY}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);


    return (
        <div className={style.contenedor}>
            
            <h2 className={style.detailCard}>{character?.name}</h2>
            <h2 className={style.detailCard}>{character?.status}</h2>
            <h2 className={style.detailCard}>{character?.species}</h2>
            <h2 className={style.detailCard}>{character?.gender}</h2>
            <h2 className={style.detailCard}>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} className={style.imagenCard}/>
        </div>
    )
}


export default Deatil;