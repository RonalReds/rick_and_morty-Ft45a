import axios from "axios";
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
        <div>
            <h1>SOY EL DETALLE 👀</h1>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}


export default Deatil;