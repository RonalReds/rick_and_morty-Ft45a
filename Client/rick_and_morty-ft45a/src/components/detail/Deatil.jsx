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
       //axios(`${URL}/${id}?key=${API_KEY}`)
       axios(`http://localhost:3001/rickandmorty/character/${id}`)
          .then(
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
            
            <img src={character?.image} alt={character?.name} 
             className={style.imagenCard} />
            <div className={style.detailCard}>
               <h2 className={style.detailCard}>Name: {character?.name}</h2>
               <h2 className={style.detailCard}>Status: {character?.status}</h2>
               <h2 className={style.detailCard}>Species: {character?.species}</h2>
               <h2 className={style.detailCard}>Gender: {character?.gender}</h2>
               <h2 className={style.detailCard}>Origin: {character?.origin?.name}</h2>
            </div>
        </div>
    )
}


export default Deatil;